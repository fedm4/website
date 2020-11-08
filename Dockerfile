FROM node:14

# Create app directory
WORKDIR /app
ADD . /app/

# global install & update
RUN yarn install

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD ["yarn", "start"]