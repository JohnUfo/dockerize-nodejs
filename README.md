# Dockerized Node.js Service Deployment

This project demonstrates how to Dockerize a simple Node.js service and deploy it to a remote server using GitHub Actions.

👉 Project Page: [https://roadmap.sh/projects/dockerized-service-deployment](https://roadmap.sh/projects/dockerized-service-deployment)

## Features

- `/` route returns `Hello, world!`
- `/secret` route protected with Basic Auth, returns secret message

## Running Locally

```bash
git clone https://github.com/JohnUfo/dockerize-nodejs.git
cd dockerize-nodejs
npm install

node index.js
