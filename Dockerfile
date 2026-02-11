# Use official bun image
FROM oven/bun:1-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first for better cache utilization
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy application files
COPY . .

# Build application
RUN bun run build

# Expose port
EXPOSE 3000

# Run production server
ENTRYPOINT ["bun", "run", "start"]