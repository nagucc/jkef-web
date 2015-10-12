FROM node

RUN mkdir /src
COPY ./* /src/
WORKDIR /src


RUN npm install -g bower grunt-cli

RUN npm install && bower install
RUN grunt build
RUN rm -rf node_modules && rm -rf bower_components

CMD rm -rf /dist/* && cp -R /src/dist/. /dist