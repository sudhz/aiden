FROM node:22 as backend
COPY . /src
WORKDIR /src
RUN npm i
EXPOSE 8000
CMD ["npm", "run", "dev"]