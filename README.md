# My Weather Forecast App

This is a simple-demo Angular app to test the OpenWeatherMap API and [Angular-Chart.js](http://jtblin.github.io/angular-chart.js/)

## Local setup

Execute the next command lines to install these tools:

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

- To run it locally but using a selected configuration, you can specify the env you want:

    exec 'grunt serve --env=STAGE'


- To compile the entire project with a specific configuration:

    exec 'grunt build --env=STAGE'


## Configuration 

OpenWeatherMap API key can be defined in the directory /modules/tpa/config/env/XXX

- XXX can be: DEV / STAGE / PROD for ex.

- In each env directory, you can add a file tpa-config.js: this file is the configuration for the selected environment

- When you launch 'grunt serve|build' with the '--env' parameter, Grunt knows which configuration file can be used


## To run it on Apache2

You will have to:

- Compile the project, cf. the last doc part

- Simply install Apache2 and configure a new Virtual Host

- Move the generated files from the 'dist' Grunt directory to the 'DocumentRoot' of your Apache

## Credits

We'd like to thank you [Backbase](http://www.backbase.com) for this nice assignment :)

Developped by Alexandre Veremme @ [The POC Agency](https://www.the-poc-agency.com)

## Licence

### Global App license 

Licensed under the Apache License, Version 2.0 (the "License")

You may not use this app except in compliance with the License

You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied

See the License for the specific language governing permissions and limitations under the License

### Background image

The background image comes from [Wallpapercave.com](http://wallpapercave.com/weather-wallpapers), **you have to respect its licence to use it** ! This is just a demo app, you can not use the background image, expect if you respect the license. 

** The POC Agency is not responsible for any legal issue, related to this background image. **