FROM node:10.14.2 as builder

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install -g npm
RUN npm install -g @angular/cli@7.1.4
COPY package.json /usr/src/app/package.json
RUN npm install

COPY . /usr/src/app
# RUN ng test --watch=false
RUN npm run build

FROM nginx:1.15.7
COPY --from=builder /usr/src/app/dist/ninis-work-in-progress /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]