# Use an official Node.js runtime as base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the app port
EXPOSE 4000

# Start the application
CMD ["npm", "start"]