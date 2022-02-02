# What Do You Mean
This is a demo page to fetch and display data from the [Oxford Dictionaries API](https://developer.oxforddictionaries.com/) via a NodeJS backend.

# Setup Development Environment 
- [Install NodeJS](https://nodejs.org/en/download/) on your computer.
- Clone this repo onto your machine
- Get a [free API Key and App ID via Oxford Dictionaries](https://developer.oxforddictionaries.com/)
- Locally: create a `.env` file in the project root including your Oxford API credentials (see the `.env.example` as a starting point)
- Open a terminal (e.g. in VSCode) to the project folder and run:
- `npm install`
- This will install all dependencies based on the `package.json` file.
- To start the app run the command: 
- `npm start`
- Look for the message "We are live on port 5000"
- Point your browser to [http://localhost:5000/](http://localhost:5000/)

# Deploying to Heroku
- You can deploy NodeJS apps fairly easily to Heorku via this Guide: [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- Just remember to set your Oxford API credentials as [Environment Variables in the Heroku Dashboard.](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard)

# Deploy on Replit
- There's a Replit-compatible version of this app [already deployed on Replit](https://replit.com/@haroldsikkema/What-Do-You-Mean). You can fork it if you like. 

# About

Note: The Oxford API has not enabled [Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS). Therefore the browser will refuse to display data directly from the API. This is a feature, not a bug! Unless instructed otherwise by CORS headers, The browser will enforce a [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) to prevent cross-contamination of data between different domains.

Our solution uses [NodeJS](https://nodejs.org/) and [Express](https://expressjs.com/) on the server, to request data from Oxford on behalf of our frontend. NodeJS listens on its own `search` endpoint. It passes requests on to the Oxford API, and relays the result back.

A further use of NodeJS here is to handle authentication in a discrete way. The Oxford API requires an API Key, but we want to avoid revealing it to end users. It's better to store our credentials on the server (e.g. as environment variables). NodeJS does this really well, and saves us having to give away reveal our secrets.

Created by [Harold Sikkema](https://nsitu.ca) in the context of Integrated Systems Design 2 in the [Interaction Design](https://ixd.sheridancollege.ca/program.html) program at [Sheridan College.](https://www.sheridancollege.ca/) Made with [Vue 3](https://v3.vuejs.org/). Data fetched with [Axios HTTP Client](https://axios-http.com/). Fonts via [Monotype](https://enterprise.monotype.com/). Thanks to [Oxford Dictionaries](https://developer.oxforddictionaries.com/) for all the words.