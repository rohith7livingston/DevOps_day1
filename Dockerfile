# Use an official Node.js image as the base image
FROM node:18-alpine
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json (if available)
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# Build the React app for production
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["npm","start"]