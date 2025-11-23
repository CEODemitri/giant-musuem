FROM node:18-alpine AS buider
LABEL authors="ceoDemitri"

WORKDIR /src

COPY package*.json ./
RUN bun install

COPY . .
RUN bun run build

FROM node:18-alpine AS runner

WORKDIR /src

ENV NODE_ENV=production

COPY --from=builder /src/.next ./.next
COPY --from=builder /src/public ./public
COPY --from=buider /src/package*.json ./

RUN bun install --omit=dev

EXPOSE 3000
CMD ["bun", "start"]