# Restart Policies
**Restart policies** definem **quando e como** o Docker deve reiniciar automaticamente um container.

São usadas para:
- aumentar resiliência
- evitar downtime
- reiniciar containers após crash ou reboot do host

## 🔧 Tipos de Restart Policies
O Docker suporta **4 políticas**:
- no (nada, default)
- always
- unless-stopped
- on-failure

## Lab
```sh
docker build -t busybox:on-failure .
docker run -d --restart on-failure busybox:on-failure
watch docker ps
```