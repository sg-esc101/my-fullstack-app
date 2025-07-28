# ---- Stage 1: Build the react application ----
# Use a Node.js image for building the React app
FROM node:20-alpine AS build

#Set the working directory
WORKDIR /app

#Copy package.json  and package-lock.json to install dependencies
COPY package*.json ./

#Install Dependencies
RUN npm install

#Copy the rest of application code
COPY . .

#Build the react app for sandbox environment
RUN npm run build

# --- Stage 2: Serve the React application with Nginx ---
# Use a very lightweight Nginx image
FROM nginx:stable-alpine

# Copy the built React app from the 'build' stage to Nginx's default public directory
COPY --from=build /app/build /usr/share/nginx/html

#Expose port 80 (default http port for web server)
EXPOSE 80

#Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]