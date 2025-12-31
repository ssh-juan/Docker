# Docker Compose

_[Link da Documentação](https://docs.docker.com/reference/compose-file/)_

O **Docker Compose** é uma ferramenta para definir e rodar aplicações multi-contêineres.

Em vez de iniciar cada parte do seu sistema (banco de dados, backend, frontend) com comandos individuais, você utiliza um único arquivo de configuração chamado `docker-compose.yml`.

> Docker compose ajuda no desenvolvimento local
> 

> Docker Compose não é para produção
> 

[Compose file reference](https://docs.docker.com/reference/compose-file/)

## Comandos Principais

`docker compose up`

`docker compose down`

## Exemplo - Gerador + Redis

```yaml
services:
  gerador:
    image: juanbs/gerador-senha:1.0
    ports:
      - "8080:80"
    networks:
      - giropops
    environment:
      - REDIS_HOST=redis
    depends_on:
      - redis
  redis:
    image: redis:latest
    ports:
      - "6379:6379"
    networks:
      - giropops

networks:
  giropops:
    driver: bridge
```

## Scale via CLI

`docker compose up -d --scale redis=3`

## Reservando e Definindo Recursos com CPU e Memória

### Reservations and Limits

No Docker Compose, na seção `deploy: resources`, as configurações de **`reservations`** e **`limits`** controlam o uso de recursos (CPU e memória) por um serviço:

- **`reservations` (Reservas):** Define a **quantidade mínima garantida** de recursos (CPU/memória) que o contêiner sempre terá disponível. O *Docker* garante que essa quantidade de recurso seja alocada, e se o hospedeiro não puder satisfazer esse requisito, o serviço não será iniciado. É um "limite suave" (soft limit) que a aplicação deve ter para funcionar corretamente.
- **`limits` (Limites):** Define a **quantidade máxima** de recursos (CPU/memória) que um contêiner pode consumir. O *Docker* impede que o contêiner aloque mais recursos do que o especificado nesta configuração, prevenindo que um único serviço sobrecarregue todo o sistema hospedeiro. É um "limite rígido" (hard limit).

Em resumo, `reservations` é o **mínimo garantido**, e `limits` é o **máximo permitido**.

```yaml
services:
  gerador:
    image: juanbs/gerador-senha:1.0
    deploy:
      resources:
        reservations:
          cpus: '0.25'
          memory: 128M
        limits:
          cpus: '0.50'
          memory: 256M
```

## Healthchecks
```yaml
services:
  gerador:
    image: juanbs/gerador-senha:1.0
    deploy:
      resources:
        reservations:
          cpus: '0.25'
          memory: 128M
        limits:
          cpus: '0.50'
          memory: 256M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:80/"] 
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 5s
```

## Review

Explorei:

- Build
```yaml
    build:
      context: ./Dockerfile
      dockerfile: Dockerfile

```
- Container Name
```yaml
    container_name: gerador
```
- Env File
```yaml
    env_file:
      - .env
```
- Deploy: Replicas e Labels
```yaml
    deploy:
      replicas: 2
      labels:
        juan.bs.dev.environment: "teste"
```
- Mudando a formatação de volume
```yaml
    volumes:
      - type: volume
        source: strigus
        target: /strigus
```
- Update Config - oque acontece num redeploy, quando atualizar ele
```yaml
      update_config:
        order: start-first
        parallelism: 1
        delay: 5s
```
- Devices
```yaml
    devices:
      - /dev/ttyUSB0:/dev/ttyUSB0
```
- Custom DNS
```yaml
    dns:
      - 8.8.8.8
      - 8.8.4.4
```