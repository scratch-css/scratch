# Φ / Scratch framework

Scratch is CSS framework and methodology to build web, mobile and TV applications with one code base. We have micro modular architecture, so you choose what you really want to take. Using it means to follow some good practices, make everything configurable and easy to change. We have some built-in features as well as some additional modules you may also want to use.

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/scratch-css/)
[![npm (scoped)](https://img.shields.io/npm/v/@scratch-css/scratch.svg)](https://www.npmjs.com/package/scratch-css/)
[![David](https://img.shields.io/david/scratch-css/scratch.svg)](https://www.npmjs.com/package/scratch-css/scratch)


Scratch provides management system for these fields:

- Colors
- Units
- Responsive breakpoints
- Typography set
- Gutters (or gaps)
- Writing directions
- Reset

We also have other libraries as modules to enhance its possibilities:

- [Reset](https://github.com/scratch-css/reset) - CSS reset for Scratch apps.
- [Grid system](https://github.com/scratch-css/grid) - two types of grid system.
- [UI kit](https://github.com/scratch-css/ui) - rich library of UI components.
- [Helpers](https://github.com/scratch-css/helpers) - helper classes to use inline in HTML.
- [Animations](https://github.com/scratch-css/animations) - CSS animations and transitions.

They are based on Scratch, and are great examples of using it. You have all separated on `npm`, or you can use them [all together](https://github.com/scratch-css/all).


### Setup

To add Scratch in your `dependencies` list, run:

    yarn add @scratch-css/scratch --save

You need to import it in your CSS file afterwards:

    @import '@scratch-css/scratch';

Or, import from `node_modules` path:

    @import '@scratch-css/scratch/index.css';

Try to add this snippet in your CSS just to check if it works:

    body { background-color: var(--success) !important; }

Background must be green, [is not it](https://github.com/scratch-css/scratch/issues)?


### Visualization
Scratch is not an UI framework, it just gives your a powerful API to build them efficiently. But, as I mentioned above, we also have UI components library on top of Scratch. It is available in [this repository](https://github.com/scratch-css/ui). You can install it via npm.


### Preprocessors
Right now, I intend to use [postcss-present-env](https://preset-env.cssdb.org/) based on [PostCSS](http://postcss.org/) to write tomorrow's CSS today. I believe this is the best environment to write efficient, performant and pure CSS, with no extra stuff and fastest compile time possible. I may add support for LESS and SASS lovers in the future depend on demand.


### History
Scratch has a little history. It slowly begun to be developed back in 2011. It was documented on Georgian language and looked like [this](https://www.facebook.com/scratch.ui/photos/a.293699317317685/299426610078289/). [The first version](https://github.com/nikoloza/scratch) on Github was written on LESS. It had built-in UI components, helpers and layout techniques including [row-n](https://github.com/nikoloza/row-n-grid) grid system. Then, I cleaned it up from unnecessary things and decided to divide it by domains. Now, it has became very lightweight and modular framework.


### Authors
- [nikoloza](https://github.com/nikoloza) - Creator of Scratch.
- [vigour-io](https://github.com/vigour-io) - Significant improvements and cool ideas have came while working at Vigour.
- You can also become supporter by [contributing](#contribution), [creating an issue](https://github.com/scratch-css/scratch/issues) for any new idea or just [being a stargazer](https://github.com/scratch-css/scratch/stargazers).


### Sponsors

<a href="https://browserstack.com" target="_blank"><img src="https://cl.ly/5a14f4c08679/browserstack-logo-600x315.png" data-canonical-src="https://cl.ly/5a14f4c08679/browserstack-logo-600x315.png" width="300" height="157" /></a>


### License
Scratch is [MIT licensed](LICENSE).


### Contribution
To run a project, you probably need [Node.js](https://nodejs.org/en/download/) and [NPM](https://docs.npmjs.com/cli/install) installed.

To install dependencies you need to run:

    yarn

To run, you can use:

    yarn start

For GIT related information, please read instructions at [Contributing to Open Source on GitHub](https://guides.github.com/activities/contributing-to-open-source/).

