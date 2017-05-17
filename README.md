# Login app example

Login app with email and facebook authentication. U need [nodejs](https://nodejs.org/en/) and [mongodb](https://www.mongodb.com/) first.

## Whats in here?
`config` configuration (mongodb address located here and facebook appId, appSecret)
`middlewares` favicon, static-files, error, logging, templates, sessions, etc handling
`fixtures` here some users for test
`libs` [passport-facebook](https://github.com/jaredhanson/passport-facebook), [koa-passport](https://github.com/rkusa/koa-passport), [mongoose](http://mongoosejs.com/), [mongoose-beautiful-unique-validation](https://www.npmjs.com/package/mongoose-beautiful-unique-validation), [selenium](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver)
`models` user model
`public` for static files
`routes` for routes, dawg
`templates` and templates for templates
`test` read below

## Testing
So they said testing with [mocha](https://mochajs.org/) it's simple and fun ...

`npm i mocha
npm i should
npm i co-mocha
npm i selenium-webdriver`

then run `mocha`

## Start

Just type `node index.js`, smash `Enter` and check `localhost:3000`
