# Cloudflare Workers Internship Application: Full-Stack

Here's my submission for the Cloudflare Workers Internship Application: Full-Stack. The full task can be found [here](https://github.com/cloudflare-internship-2020/internship-application-fullstack).

## Steps taken

I used Cloudflare workers to deploy an application to randomly send users to one of two webpages. The application is deployed on a [worker.dev subdomain](https://cf-workers-app.wenl.workers.dev/).

## Things I did

On top of the basic functionality, I tackled the extra credit challenges as well.
I customized the page using [HTMLRewriter](https://developers.cloudflare.com/workers/reference/apis/html-rewriter/). This enabled me to modify the text and also the link - I changed the url in the 'href' attribute to the portfolio and travels page of my own [website](https://wenhongl.com/).

I also made use of cookies. Cloudflare's template gallery has some useful code on handling cookies, which I referenced. The end result is as desired - that a user will always be directed to the same page that they first visited.

I do not own any other domains and thus did not tackle the third extra credit challenge.

## Notes

`wrangler dev` was particularly useful in locally testing my application.

For security, I have removed my account ID from wrangler.toml.