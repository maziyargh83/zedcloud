# Development stage
FROM node:20-alpine as development

WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json ./
COPY *.lock ./ 

# Install dependencies
RUN yarn

# Copy the entire project
COPY . .

# Expose the necessary ports
EXPOSE 3000

# Set the environment to development
ENV NODE_ENV=development

# Start the Next.js development server
CMD ["yarn", "dev"]
