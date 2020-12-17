# Zalo connection

Zalo connection with JavaScript

Author: Cu Nguyen &lt;[cunguyen.dev@gmail.com](cnguyen.dev@gmail.com)&gt;

Deploy to Netlify: [https://zalo-connection.netlify.app/](https://zalo-connection.netlify.app/)

## Requirements

- [Node](https://nodejs.org/en/) &gt;=8.4.0 / [npm](https://www.npmjs.com/) &gt;=5.3.0
  - Recommend installing with [nvm](https://github.com/creationix/nvm)
- [Parcel](https://parceljs.org/) &gt;=1.12.4
- [Yarn](https://classic.yarnpkg.com) &gt;=1.22.4

## Guide

Step by step to add zalo chat plugin into your app

### Crate an Zalo Offcial Account

Go to [Zalo API](https://developers.zalo.me/docs/api/official-account-api-147) to create and get an OAID (Offcial Account ID).

### Create Zalo init file (`zalo.js`)

```javascript
class ZaloChatPlugin {
  constructor(oaid) {
    this.oaid = oaid;
    this.body = document.querySelector('body');
  }

  /**
   * Render zalo chat window with welcome message
   * @param {string} message
   */
  render() {
    const zaloNode = document.createElement('div');

    zaloNode.setAttribute('class', 'zalo-chat-widget');
    zaloNode.setAttribute('data-oaid', this.oaid);

    this.body.appendChild(zaloNode);
  }
}

export default ZaloChatPlugin;
```

### Import Zalo init file (`zalo.js`) into your app then launch it

_Note that, you have to pass your OAID when call the constructor_

```javascript
import ZaloChatPlugin from '../plugins/zalo';

/**
 * Your oaid (Offcial Account)
 * Read the document here: https://developers.zalo.me/docs/api/official-account-api-147
 */
const zaloChatPlugin = new ZaloChatPlugin('2445522973757062543');
zaloChatPlugin.render();
```

## Getting Started

Step by step to run this app in your local

### Install packages

At your directory root, run:

```
npm/yarn install
```

### Run server

```
npm/yarn start
```

Open on web: http://localhost:1234 (this is by default, you can custom it)

### Build

```
npm/yarn run build
```

_You can update the source structures to follow your patterns._

_Note: Live-reload is supported_
