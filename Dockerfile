FROM node:latest 
WORKDIR /app
COPY . .
RUN npm --force install
EXPOSE 3006 
CMD ["npm", "run", "start"]