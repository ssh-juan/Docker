## Overview

As networks em geral existem e fazem sentido em cenários de Docker Swarm.

- Bridge (default)
- Driver Overlay
- Driver Host
- Mac VLAN

docker network ls

docker network create giropops

docker network inspect {network_name}

Quando for criar um container, pode mencionar a network

`--network`

docker run -d --network giropops-senhas --name redis_v2 -p 6379:6379 redis

## Computing - Limitando Recursos como CPU e Memória

`docker run -d --name --network giropops-senhas -p 6379:6379 --cpus 1 --memory 64m --memory-swap 512m redis`

`--cpus 0.5`

`--memory 64m`

`--memory-swap 32`

Uso Máx. 1 CPU

- Checar consumo

docker top {container}

docker stats

- Testar

`apt-get install stress`

`stress --help`

## Atualizar parâmetros do Container

`docker container update [PARAMS]`