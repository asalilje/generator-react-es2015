# generator-react-es2015
## A Yeoman Generator for a React application using ES2015

The application is configured to use CSSModules, ESLint, and a Webpack Dev Server with hot reloading. 
Tasks are defined in the package.json file and run as NPM tasks.

A stub for a mock api via ajax request is included. The option to include testing using Mocha, Enzyme and Expect is given in the generator.

The option to include Redux is available. In this case, Redux will be set up with a sample Todo-app of the same kind that's built in the basic tutorial found at http://redux.js.org/docs/basics. 

There is also a simple webpack production config doing minifying without source maps, and a build:prod NPM task that starts the production app in an express server. This is to make sure it looks and behaves as intended when served from the file system.

### To create a site using Yeoman:
- Install Yeoman: `npm install -g yo`.
- Install the generator: `npm install -g https://github.com/asalilje/generator-react-es2015.git`.
- Run the generator in the folder where you want your new site: `yo react-es2015`.
- Answer the questions and wait until the site has been created and NPM install is done.
- Move into the folder and run: `npm run build:dev`.
- The sample site should open on http://localhost:8080, with lint and optionally tests run in the shell.


### To update and run a generator locally:
- Clone the generator: `git clone https://github.com/asalilje/generator-react-es2015.git`.
- Stand in the folder of the generator and create a global symlink to the local generator: `npm link`.
- Now you can edit the code and run the generator from your local machine: `yo react-es2015`.


### To uninstall the generator:
`npm uninstall -g generator-react-es2015`
