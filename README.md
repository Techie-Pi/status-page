# Status Page
A simple, customizable, static, open-source status page

## Installation and usage
1. Clone this repository
2. Run ``npm run initial`` to download the required dependencies
3. Customize the pages
4. Run ``npm run build`` to build the status page using the data provided
5. Deploy the ``build/`` folder to your hosting provider (Cloudflare Pages, Netlify...)

### Basics
#### How to add my services?
All the configuration files are in [``toml 0.4``](https://learnxinyminutes.com/docs/toml/).

The main (_global_) configuration file is ``config.toml``, where you can add and modify:
- The number of services
- The status of services
- The related issues of services

If you want to add a new service, you need to add (under the ``services`` key) something like the following:
```toml
[services.service-id]
name = "Readable Name"
status = "ok" # or degraded or down
ongoingIssue = 1 # The issue ID, could be null is the status is ok
```

#### How to create a new issue?
In order to create a new issue you need to do the following:
1. Modify the ``status`` key of your service (as seen previously)
2. Create a file like the following: ``content/issue-{id}.toml``
3. Populate the file with the required data (see [content/issue-1.toml](content/issue-1.toml)) for an example
4. Modify the ``ongoingIssue`` key of your service (as seen previously)

#### How to customise the Status Page?
All the templates are in [``handlebars``](https://handlebarsjs.com/guide/).

The files used to render the status page are the following:
- ``content/_templates/issue.hbs``: The template for the issues
  - The context of this template is the following:
    - ``general.{title, status, grade, affects, pinned, hidden}``
    - ``metadata.{creationDate, updatedDate, resolvedDate}``
    - ``updates[]``
      - ``{status, date, message}``
- ``pages/index.hbs``
  - **For this page you want to check the helpers**
  - The context of this template is the following:
    - ``services{}``
      - ``{name, status, ongoingIssue}``

The helpers available (check ``pages/index.hbs`` and ``content/_templates/issue.hbs`` to see the usage of the helpers):
- ``formatDate``: To format the date provided
- ``serviceName``: To get the readable name for a service
- ``serviceStatus``: To get the service status for a service
- ``ongoingIssue``: To get the current ongoing issue for a service
- ``ongoingIssueLink``: To get the link for the ongoing issue of a service
- ``serviceStatusIs``: To know if the current service status is something
- ``equals``: To compare two values

You can add custom pages on ``public/`` and with context access, on ``pages/`` (these should end on ``.hbs``).

If two or more files collide, this is the order of preference:
1. Pages (``pages/``)
2. Issues (``content/``)
3. Public (``public/``)

**If you need help with anything, contact me, and I'll help you with anything!**
