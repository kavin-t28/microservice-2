# Dockerfile for service2
FROM node:14
WORKDIR /app
COPY app/ .
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]
