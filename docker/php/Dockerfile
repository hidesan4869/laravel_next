FROM php:8.3-fpm-alpine3.18

ENV LANG ja_JP.UTF-8
ENV LC_ALL C

# Composerのインストール
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 作業ディレクトリを設定
WORKDIR /var/www/server

# 必要なパッケージのインストール
RUN apk add --no-cache \
      sudo \
      git \
      libxml2-dev \
      unzip \
      wget \
      zlib-dev \
      iproute2 \
      sqlite-dev \
      postgresql-dev \
      icu-dev \
      oniguruma-dev \
      libzip-dev \
      jpeg-dev \
      libpng-dev \
      freetype-dev \
      libwebp-dev \
      gettext-dev \
      linux-headers \
      nodejs \
      npm \
      bash

# PHPの拡張機能をインストール
RUN docker-php-ext-install \
      intl \
      mbstring \
      pdo_sqlite \
      pdo_mysql \
      pdo_pgsql \
      soap \
      xml \
      mysqli \
      gettext \
      zip \
      sockets \
    && docker-php-ext-configure gd --with-jpeg=/usr/include/ --with-freetype=/usr/include/ --with-webp=/usr/include/ \
    && docker-php-ext-install gd

RUN echo "alias ll='ls -la'" >> ~/.bashrc

ENTRYPOINT ["php-fpm"]