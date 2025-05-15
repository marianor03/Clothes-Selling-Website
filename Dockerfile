# Use Node as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /src

# Copy only the package files and install dependencies
COPY package*.json ./
RUN npm install -g supervisor && npm install

# Copy only necessary app files (not everything!)
COPY index.js ./
COPY app/ ./app/
COPY views/ ./views/
COPY static/ ./static/

# Expose the port the app runs on
EXPOSE 3000

# Default command
CMD ["supervisor", "index.js"]

