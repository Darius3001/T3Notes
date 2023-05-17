### install deps
FROM --platform=linux/amd64 node:16-alpine3.17 AS deps
RUN apk add --no-cache libc6-compat openssl1.1-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN  npm install --production


### builder
FROM --platform=linux/amd64 node:16-alpine3.17 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . . 

RUN npm run build


### runner
FROM --platform=linux/amd64 node:16-alpine3.17 AS runner

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]