# Bookmarking the www-bugs
This is the officially supported chrome extension for the transientBug
bookmarking service.

[![Build Status](https://travis-ci.org/transientBug/chrome-extension.svg?branch=master)](https://travis-ci.org/transientBug/chrome-extension)

TODO: This.

## Development: Getting Started
You can git clone this repo and load the extension into chrom temporarily,
visit `chrome://extensions` or see [this Google Dev doc](https://developer.chrome.com/extensions)

Currently, the latest node 8 version is used for the various development tools.
After that: `yarn install`
And `npm run test` to lint all the things.

No actual tests outside of linting happens for now, but contributions are
welcomed :)

### Note
This repository is nearly identical to the official transientBug [firefox web
extension](https://github.com/transientBug/firefox-extension), with the
addition of the [Mozila WebExtension
Polyfill](https://github.com/mozilla/webextension-polyfill). Bugs fixed here
should also make their way upstream to the firefox extension as well.
Eventually my hope is to have a single repository that serves both extensions,
however until I get around to it, this is the solution.

## Credits
Bookmark Icons from the [Google Material Design](https://material.io/icons/) project.
