const handlebars = require("handlebars");
const {DateTime} = require("luxon");

function registerHelpers(services) {
    handlebars.registerHelper("formatDate", (date, dateString) => {
        return new handlebars.SafeString(
            DateTime.fromJSDate(date).toFormat(dateString)
        )
    })

    handlebars.registerHelper("serviceName", id => {
        return new handlebars.SafeString(
            services[id].name
        )
    })

    handlebars.registerHelper("serviceStatus", id => {
        return new handlebars.SafeString(
            services[id].status
        )
    })

    handlebars.registerHelper("ongoingIssue", id => {
        return new handlebars.SafeString(
            services[id].ongoingIssue
        )
    })

    handlebars.registerHelper("ongoingIssueLink", id => {
        return new handlebars.SafeString(
            `issues/issue-${services[id].ongoingIssue}.html`
        )
    })

    handlebars.registerHelper("serviceStatusIs", (id, type) => {
        return services[id].status === type;
    })
}

module.exports = { registerHelpers };
