FROM ubuntu:18.04
#RUN executa em tempo de build
RUN apt-get update && apt-get install nginx -y
EXPOSE 80
#CMD executa em tempo de execução
CMD ["nginx", "-g", "daemon off;"]
#nginx -g "daemon off;" mantém o nginx rodando em primeiro plano    