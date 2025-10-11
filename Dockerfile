FROM oven/bun:1.3.0 AS base

# Deps layer
FROM base AS deps
WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

# Build layer
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

# Runtime layer
FROM base AS runner
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

EXPOSE 3000
CMD ["bun", "run", "server.js"]
