FROM node:24-alpine AS base
WORKDIR /frontend
COPY package*.json .
RUN npm ci

FROM base AS dev
ENV NODE_ENV=development
RUN npm ci --include=dev
COPY . .
CMD [ "npm", "run", "dev" ]

FROM base AS build
COPY . .
RUN npm run build

FROM node:24-alpine AS prod
WORKDIR /frontend
COPY package*.json .
RUN npm ci --omit=dev
COPY --from=build /frontend/dist ./dist
CMD [ "node", "dist/index.js" ]