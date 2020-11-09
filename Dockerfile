FROM node:14

# Create app directory
WORKDIR /app
ADD package*.json

# global install & update
RUN yarn install

ADD . /app/

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD ["yarn", "start"]
