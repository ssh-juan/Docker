# How To

## Localmente
```sh
sudo apt install python3-venv -y
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```
Redis precisa estar rodando localelmente para a aplicação funcionar.
```sh
flask run --host=0.0.0.0
export REDIS_HOST=ip
```
------

## Docker
```sh
docker build -t gerador .
docker run -d -p 6379:6379 redis
export REDIS_HOST=ip
docker run -d -e REDIS_HOST -p 5000:5000 gerador
```