FROM node

ADD app /src/app
ADD .bowerrc /src/
ADD .jshintrc /src/
ADD .travis.yml /src/
ADD *.json /src/
ADD Gruntfile.js /src/

WORKDIR /src


RUN npm install -g bower grunt-cli

RUN npm install
RUN bower install --allow-root
RUN grunt build --force
RUN rm -rf node_modules && rm -rf bower_components

CMD rm -rf /dist/* && cp -R /src/dist/. /dist