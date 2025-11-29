FROM node:18-alpine AS builder
LABEL authors="ceoDemitri"

ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN apk add --no-cache bash curl python3 make g++ libc6-compat

WORKDIR ./

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR ./

ENV NODE_ENV=production

COPY --from=builder ./.next ./.next
COPY --from=builder ./package*.json ./

RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]