FROM node

ADD app /src/app
ADD .bowerrc /src/
ADD .jshintrc /src/
ADD .travis.yml /src/
ADD *.json /src/
ADD Gruntfile.js

WORKDIR /src


RUN npm install -g bower grunt-cli

RUN npm install && bower install
RUN grunt build
RUN rm -rf node_modules && rm -rf bower_components

CMD rm -rf /dist/* && cp -R /src/dist/. /dist