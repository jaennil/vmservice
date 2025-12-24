# Build stage
FROM node:25-alpine AS build

WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY eslint.config.js ./

# Install dependencies
RUN npm ci

# Copy source code
COPY index.html ./
COPY ./src ./src
COPY ./public ./public

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built application to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config with stub_status
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
