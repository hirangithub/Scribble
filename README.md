# Scribble

ASCENTIC- UI/UX Champion (SSE/ATL/TL level) - Practical Assignment

# Introduction 

* The development code is in the ['src/'](src) directory.
* The build process relies on ['gulp'](https://gulpjs.com/).
* The 'gulp' tasks can be found in the ['gulpfile.js'](gulpfile.js)
  file.


## Setup

1. Install ['Node.js'](https://nodejs.org/) and
   ['npm'](https://docs.npmjs.com/getting-started/installing-node).
2. Run 'npm install'.


## Development

You should be able to work almost entirely in the [`src/`](src) directory.

While developing use VSCode LiveServer (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) as this will open the website
in your default browser and automatically update it whenever changes
are made to the page or any of the files contained in the page.

VS Code live complilation of SCSS 'Watch Sass' will ease the sass compilation process.  


## Build

When you have finished your changes, make sure that the distribution
package is correct by running 'gulp build' and then checking the
output in 'dist' folder.
(CSS and JS will be minified, You may add a version number to the css and js to avoid browser caching e.g. abc.css?v=11.0.0, abc.js?v=11.0.0)


## Deploy

Use 'Sourcetree' or approprite tool to commit and push your changes to the repo 'master' branch. 
In the same time the changes will be pushed to the UAT server. http://ip-address/dist/
This step is done automatically.


