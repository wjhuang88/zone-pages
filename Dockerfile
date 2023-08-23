FROM node:17-alpine

WORKDIR /app/index_content
COPY . .

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]