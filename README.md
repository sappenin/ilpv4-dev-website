# ILPv4 Dev Website
This website allows you to experience the future of payments using the Interledger Testnet.
See it in action at [https://ilpv4.dev](https://ilpv4.dev).

## Interledger Background
The Interledger Protocol (ILP) provides the foundation for the internet of Value. ILP is an open protocol that enables
sending money in any currency and any amount. The goal is to make sending value as fast, easy, and inexpensive as
sending information across the internet is today.

Like routers on today's internet, Interledger connectors route packets of money across independent
payment networks. The open architecture and minimal protocol enable interoperability for any
value transfer system.

Interledger is not tied to any one company, blockchain, or currency. We believe that
interoperability is critical to achieving the internet of value and envision a widely available
Interledger network allowing anyone to pay or get paid in the currency of their choice, nearly
instantaneously and at minimal cost.

For more information, read more at [interledger.org](https://interledger.org).

## How can I contribute?
To contribute to the content on this site, consider one of the following:

* Check out the issues page and see if there are any you can help with!
* Submit links to add to specific sections that are incomplete, by submitting a pull-request
* Identify out-of-date information on https://ilpv4.dev (or linked to from https://ilpv4.dev) and submit a pull-request
* Suggest ideas for new subpages, new content, or other ways to improve https://ilpv4.dev by opening an issue.

## Development

### Unix/Mac
```
# In the root folder:
yarn add docz docz-theme-default --dev
yarn
npm install
npm run-script docz:dev
```

### Windows
- Download [node.js & npm](https://nodejs.org/en/download/)
- Download [Yarn](https://yarnpkg.com/en/docs/install#windows-stable)
- Download [Git Bash](https://git-scm.com/downloads)
- Download the `master` branch
- Navigate to the `/ilpv4-dev-website` folder
- Right click and select `Git Bash Here`

Run the following commands:
```
npm install -g yarn
npm install
yarn
npm run-script docz:dev
```

## Build
```
# In the root folder:
npm run-script docz:build
```

The build should be exported to `/.docz/dist` which can be deployed to a static host. 
We are hosting the site on github pages via the deploy script below.

## Deployment
```
# In the root folder:
./deploy.sh

(note: move the `.well-known` folder into the root before deploying)
```

## Structure
Site content is in `/src` folder.
