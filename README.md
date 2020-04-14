# Cloudflare Workers Internship Application: Full-Stack

Here's my submission for the Cloudflare Workers Internship Application: Full-Stack. The full task can be found [here](https://github.com/cloudflare-internship-2020/internship-application-fullstack).

## Steps taken

I used Cloudflare workers to deploy an application to randomly send users to one of two webpages. The application is deployed at [cf-workers-app.wenl.workers.dev](https://cf-workers-app.wenl.workers.dev/).

## Things I did

### Basic functionality

I did as instructed and installed all the necessary tools. I request the array of URLs from the API and then choose one URL to fetch and return. This depends on whether cookie is found - if one is found, the page previously visited will be returned, else one will be randomly selected.

### HTMLRewriter

On top of the basic functionality, I tackled the extra credit challenges as well.
I customized the page using [HTMLRewriter](https://developers.cloudflare.com/workers/reference/apis/html-rewriter/). This enabled me to modify the text and also the link - I changed the url in the 'href' attribute to the portfolio and travels page of my own [website](https://wenhongl.com/).

### Cookies

I also made use of cookies. Cloudflare's template gallery has some useful code on handling cookies, which I referenced. The end result is as desired - that a user will always be directed to the same page that they first visited.

## Notes

I do not own any other domains and thus did not tackle the third extra credit challenge.

`wrangler dev` was particularly useful in locally testing my application.

For security, I have removed my account ID from wrangler.toml.