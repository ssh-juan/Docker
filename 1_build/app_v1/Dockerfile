#Qual imagem quero de origem?
FROM node:17-alpine3.14 

#Apenas Label para fins de organização
LABEL maintainer="juan"

#Rodar comando para criar diretório
RUN mkdir /var/node

#Mudar de diretório - como se fosse um: cd /var/node
WORKDIR /var/node

#Copia o app.js (do host) para o . (diretório atual) do container
COPY app.js .

#Expõe a porta 3000
EXPOSE 3000

#CMD, um array de comandos. Comando executado ao fazer o: docker run
CMD [ "node", "app.js" ]