FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN apt-get update && apt-get install -y \
    wget \
    xvfb \
    unzip \
    && rm -rf /var/lib/apt/lists/* \
    && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && dpkg -i google-chrome-stable_current_amd64.deb || true \
    && apt-get install -f -y \
    && rm google-chrome-stable_current_amd64.deb

ENV DISPLAY=:99
CMD ["npm", "test"]
