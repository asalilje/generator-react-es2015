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
            'Welcome to the astonishing ' + chalk.magenta('React ES2016') + ' generator!'
        ));

        var prompts = [{
            name: 'projectName',
            message: 'What would you like to call your project?',
            validate: function (input) {
                var pattern = new RegExp("[^a-z|-]");
                if (pattern.test(input)) {
                    return "Sorry, only small letters and dashes allowed!";
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'includeMocha',
            message: 'Do you want to use Mocha for testing?',
        }];

        return this.prompt(prompts).then(function (answers) {
            this.projectName = answers.projectName;
            this.includeMocha = answers.includeMocha;
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

        hiddenfiles: function () {
            this.log(chalk.magenta("Copying hidden files..."));
            this.fs.copy(
                this.templatePath('./app/.eslintrc'),
                this.destinationPath('.eslintrc')
            );
            this.fs.copy(
                this.templatePath('./app/.babelrc'),
                this.destinationPath('.babelrc')
            );
            this.fs.copy(
                this.templatePath('./app/.gitignore'),
                this.destinationPath('.gitignore')
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