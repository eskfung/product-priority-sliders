FROM node:10.15.3-alpine
WORKDIR /priority-sliders
COPY package.json yarn.lock ./
RUN npx yarn@1.19.1 install
COPY . .
RUN npm run build
EXPOSE 5000
ENV NODE_ENV=production
CMD npx --no-install serve -s
