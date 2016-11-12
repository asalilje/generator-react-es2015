# generator-react-es2015
## A Yeoman Generator for a React application using ES2015

The application is configured to use CSSModules, ESLint, and a Webpack Dev Server with hot reloading. 
Tasks are defined up in the package.json file and run as NPM tasks.

A stub for a mock api via ajax request is included. The option to include testing using Mocha, Enzyme and Expect is given in the generator.

To create a site using Yeoman:
- Install Yeoman: `npm install -g yo`.
- Install the generator: `npm install -g https://github.com/asalilje/generator-react-es2015.git`.
- Run the generator in the folder where you want your new site: `yo react-es2015`.
- Answer the questions and wait until the site has been created and NPM install is done.
- Move into the folder and run: `npm run build:dev`.
- The sample site should open on http://localhost:8080, with lint and optionally tests run in the shell.


To test a generator locally:
- Clone the generator: `git clone https://github.com/asalilje/generator-react-es2015.git`.
- Stand in the folder of the generator and create a global symlink to the local generator: `npm link`.
- Now you can edit the code and run the generator from your local machine: `yo react-es2015`.
