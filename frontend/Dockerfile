# Step 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./

# Install vite globally
RUN npm install -g vite

# Install dependencies
RUN npm install

COPY . .

# Build the app using vite
RUN vite build

# Step 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
