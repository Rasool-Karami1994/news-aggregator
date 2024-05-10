# Use an official Node runtime as the base image
FROM node:16-bullseye

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the current directory
COPY package*.json ./

# Install any needed packages specified in package-json
RUN npm install

# Copy the built app to the current directory
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Run the app using the command-line interface
CMD ["npm", "run" , "dev"]