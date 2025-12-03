# Docker
```sh
#Rodar Localmente
node app.js
curl {endpoint}:{port} -I

#Container
docker run -it -w /app -v "$(pwd)/app.js":/app/app.js node:17-alpine3.14 sh

#Container via Dockerfile
docker build -t nodeapp:0.1 .

docker images

docker run nodeapp:0.1

docker ps

#Verificar IP para fazer curl
docker inspect {container-id}

curl {ip}
```

## Dockerfile Explicado
[Dockerfile Reference](https://docs.docker.com/reference/dockerfile/)
```dockerfile
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
```