## 🐳 O que é Docker Compose?

Docker Compose é uma ferramenta que permite definir e executar aplicações compostas por múltiplos containers usando um único arquivo de configuração (`docker-compose.yml`).

Nesse arquivo, descrevemos serviços, redes, volumes e variáveis de ambiente de forma declarativa. Com isso, é possível subir toda a aplicação com um único comando:

```bash
docker compose up
```

O Docker Compose é amplamente utilizado para ambientes de desenvolvimento, testes e cenários simples de produção, pois facilita a padronização do ambiente e reduz a necessidade de executar vários comandos docker run.

Ele não substitui orquestradores como Kubernetes, mas é ideal para rodar aplicações multi-container de forma simples e local.