# What Do You Mean
This is a demo page to fetch and display data from the [Oxford Dictionaries API](https://developer.oxforddictionaries.com/) via a NodeJS backend.

# Installation
- Make a folder for your project and navigate to it in your terminal. Then run:
- `npm install`
- `npm start`

# About

Note: The Oxford API has not enabled [Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS). Therefore the browser will refuse to display data directly from the API. This is a feature, not a bug! Unless instructed otherwise by CORS headers, The browser will enforce a [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) to prevent cross-contamination of data between different domains.

Our solution uses [NodeJS](https://nodejs.org/) and [Express](https://expressjs.com/) on the server, to request data from Oxford on behalf of our frontend. NodeJS listens on its own `search` endpoint. It passes requests on to the Oxford API, and relays the result back.

A further use of NodeJS here is to handle authentication in a discrete way. The Oxford API requires an API Key, but we want to avoid revealing it to end users. It's better to store our credentials on the server (e.g. as environment variables). NodeJS does this really well, and saves us having to give away reveal our secrets.

Created by [Harold Sikkema](https://nsitu.ca) in the context of Integrated Systems Design 2 in the [Interaction Design](https://ixd.sheridancollege.ca/program.html) program at [Sheridan College.](https://www.sheridancollege.ca/) Made with [Vue 3](https://v3.vuejs.org/). Data fetched with [Axios HTTP Client](https://axios-http.com/). Fonts via [Monotype](https://enterprise.monotype.com/). Thanks to [Oxford Dictionaries](https://developer.oxforddictionaries.com/) for all the words.