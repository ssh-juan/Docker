#Qual imagem quero de origem?
FROM node:17-alpine3.14 

#Apenas Label para fins de organização
LABEL maintainer="juan"

#Define um volume persistente em /var/nodeapp
VOLUME [ "/var/nodeapp" ]

#Rodar comando para criar diretório
RUN adduser -h /var/nodeapp \
    -s /bin/bash \
    -D nodeapp

#Mudar de diretório - como se fosse um: cd /var/node
WORKDIR /var/nodeapp

#Copia o app.js (do host) para o . (diretório atual) do container
COPY app.js .

#Alterar dono do arquivo copiado para o usuário nodeapp
RUN chown nodeapp:nodeapp app.js

#Expõe a porta 3000
EXPOSE 3000

#ARG - variável de ambiente em tempo de build
ARG VERSION
#ENV - variável de ambiente em tempo de execução, baseada no ARG
ENV VERSION=${VERSION:-1.0.0}

#Mudar para o usuário nodeapp
USER nodeapp

#CMD, um array de comandos. Comando executado ao fazer o: docker run
#ENTRYPOINT vs CMD: ENTRYPOINT define o comando principal que sempre será executado, enquanto CMD fornece argumentos padrão que podem ser sobrescritos ao executar o container.
ENTRYPOINT [ "node", "app.js" ]