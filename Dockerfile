FROM node:20-alpine AS base

# web

FROM base AS web-deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY web/package*.json ./
RUN npm ci

FROM base AS web-builder
WORKDIR /app
COPY --from=web-deps /app/node_modules ./node_modules
COPY . .
COPY .env.production.sample .env.production
RUN npm run build

FROM base AS web-runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=web-builder /app/public ./public

COPY --from=web-builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=web-builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0" 

CMD ["node", "server.js"]
# server

FROM base AS server
COPY server/package*.json ./
RUN npm install
COPY server/eslint.config.js server/tsconfig.json server/app.ts ./
COPY server/src ./src
COPY server/prisma ./prisma
CMD [ "npm", "dev" ]
