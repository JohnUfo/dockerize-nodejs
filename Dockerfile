# Use Node LTS image
FROM node:18-alpine

# Set working dir
WORKDIR /usr/src/app

# Copy package.json & install deps
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD [ "node", "index.js" ]
