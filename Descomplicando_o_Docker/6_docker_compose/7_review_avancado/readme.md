# Overview

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