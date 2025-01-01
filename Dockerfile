FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .

RUN npm install && npm install -g nodemon

# Bundle app source
COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]