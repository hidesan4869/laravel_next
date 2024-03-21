FROM php:8.3-fpm

ENV LANG ja_JP.UTF-8
ENV LC_ALL C
ENV PATH="/usr/local/bin/php:${PATH}"

# Composerのインストール
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Node.jsのセットアップスクリプトを実行
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs=18.17.0-*

# 作業ディレクトリを設定
WORKDIR /var/www/server

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
    && docker-php-ext-install \
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
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
RUN echo "alias ll='ls -la'" >> ~/.bashrc
ENTRYPOINT php-fpm