var generators = require("yeoman-generator");
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require("mkdirp");

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
    },

    prompting: function () {
        this.log(yosay(
            'Welcome to the astonishing ' + chalk.magenta('React ES2015') + ' generator!'
        ));

        var prompts = [{
            name: 'projectName',
            message: 'What would you like to call your project?',
            validate: function (input) {
                var pattern = new RegExp("[^a-z|A-Z|-]");
                if (pattern.test(input)) {
                    return "Sorry, only letters and dashes allowed!";
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'includeRedux',
            message: 'Do you want to use Redux?',
        },
        {
            type: 'confirm',
            name: 'includeMocha',
            message: 'Do you want to use Mocha for testing?',
        }];

        return this.prompt(prompts).then(function (answers) {
            this.projectName = answers.projectName;
            this.includeMocha = answers.includeMocha;
            this.includeRedux = answers.includeRedux;
        }.bind(this));
    },

    writing: {

        dir: function () {
            this.log(chalk.magenta("Creating directory for project: '" + this.projectName + "'..."));
            mkdirp(this.projectName, function (err) {
                if (err) {
                    this.log(chalk.red(err));
                }
                else {
                    this.log(chalk.green("Done!"));
                }
            }.bind(this));
        },

        setDestination: function () {
            this.destinationRoot(this.projectName);
        },

        app: function () {
            this.fs.copyTpl(
                this.templatePath('./app'),
                this.destinationPath(''),
                this
            );
        },

        config: function () {
            this.log(chalk.magenta("Copying config files..."));
            this.fs.copy(
                this.templatePath('./config/_eslintrc'),
                this.destinationPath('.eslintrc')
            );
            this.fs.copy(
                this.templatePath('./config/_babelrc'),
                this.destinationPath('.babelrc')
            );
            this.fs.copyTpl(
                this.templatePath('./config/_gitignore'),
                this.destinationPath('.gitignore'),
                this
            );
        },

        mocha: function () {
            if (this.includeMocha) {
                this.log(chalk.magenta("Copying test files..."));
                this.fs.copy(
                    this.templatePath('./mocha/App.test.js'),
                    this.destinationPath('./src/App.test.js')
                );
                this.fs.copy(
                    this.templatePath('./mocha/testSetup.js'),
                    this.destinationPath('./tools/testSetup.js')
                );
            }
        },
    },

    install: function () {
        this.npmInstall();
    }

});