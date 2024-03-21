FROM node:18.17.0

RUN echo "alias ll='ls -la'" >> ~/.bashrc

COPY startup.sh /opt/startup.sh
RUN chmod +x /opt/startup.sh

CMD ["/bin/bash", "/opt/startup.sh"]
