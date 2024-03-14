FROM php:8.3-fpm

ENV LANG ja_JP.UTF-8
ENV LC_ALL C
ENV PATH="/usr/local/bin/php:${PATH}"

# Composerのインストール
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 必要なパッケージのインストール
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
      sudo \
      git \
      libxml2-dev \
      unzip \
      wget \
      zlib1g-dev \
      iproute2 \
      libsqlite3-dev \
      libpq-dev \
      libicu-dev  \
      gnupg2 \
      libonig-dev \
      libzip-dev \
      libjpeg-dev \
      libpng-dev \
      zlib1g-dev \
      libmemcached-dev \
      libmagickwand-dev \
      libfreetype6-dev \
      libjpeg62-turbo-dev \
      libwebp-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENTRYPOINT php-fpm