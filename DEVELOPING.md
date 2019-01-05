# Developing

## First time setup

Just run `yarn` to install dependencies, and `yarn start` to start the development server.

```bash
yarn
yarn start
```

## Netlify Functions

To create/edit Netlify functions, modify files in `./functions-src`. The development server will build and run these functions, and properly proxy API calls.

## Architecture & Deployment

• The site is a static website built using React and Gatsby.
• The content comes from an instance of Wordpress, used as a headless CMS.
• Netlify is used for continuous deployment. Netlify builds and deploys a new static site when a record is created or updated in WordPress and when PRs are merged into the this GitHub repository.
