FROM node:22 as frontend
COPY . /src
WORKDIR /src
RUN npm i 
EXPOSE 3000
CMD ["npm", "start"]