FROM node:24-alpine AS base
WORKDIR /backend
COPY package*.json ./
RUN npm ci --omit=dev

FROM base AS dev
ENV NODE_ENV=development
RUN npm ci 
COPY . .
CMD [ "node", "--watch", "index.js" ]

FROM base AS prod
ENV NODE_ENV=production
COPY . .
CMD [ "npm", "start" ]