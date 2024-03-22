FROM node:18.17.0-alpine

# bashとgitのインストール
RUN apk add --no-cache bash git

# startup.shスクリプトをコピー
COPY startup.sh /opt/startup.sh

# 実行権限を付与
RUN chmod +x /opt/startup.sh

# .bashrcファイルにエイリアスを追加
RUN echo "alias ll='ls -la'" >> ~/.bashrc

# CMDを修正
CMD ["/opt/startup.sh"]
