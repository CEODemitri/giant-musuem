# -------------------------
# 1. Builder
# -------------------------
FROM node:18 AS builder
WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=4096"

# Copy only package files first
COPY package*.json ./

RUN npm ci

# Copy entire project (app/, public/, next.config.mjs, etc)
COPY . .

RUN npm run build

# -------------------------
# 2. Runner
# -------------------------
FROM node:18 AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public

RUN npm ci --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
