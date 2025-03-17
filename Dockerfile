FROM node:20-alpine AS base
WORKDIR /app

# web

FROM base AS web
COPY web/package*.json ./
RUN npm install
COPY web/eslint.config.mjs web/next.config.ts web/postcss.config.mjs web/tailwind.config.ts web/tsconfig.json ./
COPY web/src ./src
COPY web/public ./public
CMD [ "npm", "dev" ]

# server

FROM base AS server
COPY server/package*.json ./
RUN npm install
COPY server/eslint.config.js server/tsconfig.json server/app.ts ./
COPY server/src ./src
COPY server/prisma ./prisma
CMD [ "npm", "dev" ]
