FROM node:18.17.0-alpine

# bashのインストール
RUN apk add --no-cache bash

# startup.shスクリプトをコピー
COPY startup.sh /opt/startup.sh

# 実行権限を付与
RUN chmod +x /opt/startup.sh

# CMDを修正
CMD ["/opt/startup.sh"]
