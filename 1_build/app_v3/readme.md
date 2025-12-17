# Build Arguments
Build arguments (ARG) são variáveis passadas no momento do build (por exemplo `docker build --build-arg`) e declaradas no Dockerfile com `ARG`. Elas permitem parametrizar instruções do Dockerfile (versões, caminhos, flags, etc.) sem alterar o Dockerfile em si. Não são seguras para segredos, pois seus valores podem ficar em camadas intermediárias da imagem.
```sh
docker build --build-arg VERSION=1.1.0 -t nodeapp:0.1 .
```