FROM node:20
WORKDIR /app
COPY . .
RUN npm install
CMD ["sh", "-c", "sleep 10 && node upload.js"]