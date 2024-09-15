FROM node:lts

WORKDIR /app

COPY . .

RUN npm i -g pnpm@latest
RUN npm i -g typescript
RUN pnpm i
RUN tsc 

EXPOSE 8002
CMD [ "pnpm", "start" ]