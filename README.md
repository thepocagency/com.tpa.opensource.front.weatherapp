# My Weather Forecast App

This is a simple Angular app to test the OpenWeatherMap API.

We'd like to thank you Backbase for this nice assignment.

## Local setup

Execute and install the next tools:

- sudo apt install nodejs-legacy

- sudo apt-get install ruby
- sudo apt-get install ruby-compass
- sudo gem install compass

- sudo apt-get install npm
- sudo npm install bower -g
- sudo npm install -g grunt-cli
- sudo npm install -g grunt-contrib-compass

- bower update
- npm install

## Build & Development

- To launch it locally : 

    exec 'grunt serve'

- To run it locally but using a different configuration, you can specify the env you want:

    exec 'grunt serve --env=STAGE'


- To compile the entire project with a specific configuration:

    exec 'grunt build --env=STAGE'


## Configuration 

API key can be defined in the directory /modules/tpa/config/env/XXX

- XXX can be: DEV / STAGE / PROD for ex.

- In each env directory, you can add a file tpa-config.js: this file is the configuration for the selected environment

- When you launch 'grunt serve|build' with the '--env' parameter, Grunt knows which configuration file can be used

NB: 


## To run it on Apache2

You will have to:

- Compile the project, cf. the last doc part

- Simply install Apache2 and configure a new Virtual Host

- Move the generated files from the 'dist' Grunt directory to the 'DocumentRoot'