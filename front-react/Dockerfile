# build environment
FROM node:22.13.0-alpine AS build
WORKDIR /app
ENV PATH="/app/node_modules/.bin:$PATH"
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]