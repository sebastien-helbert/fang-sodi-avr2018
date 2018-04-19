### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine as builder
WORKDIR /app
RUN npm install -g @angular/cli
COPY . .
## Build the angular app in production mode and store the artifacts in dist folder
RUN npm install
RUN ng build --prod

### STAGE 2: Setup ###
FROM httpd:2.4
COPY --from=builder /app/dist /usr/local/apache2/htdocs/
