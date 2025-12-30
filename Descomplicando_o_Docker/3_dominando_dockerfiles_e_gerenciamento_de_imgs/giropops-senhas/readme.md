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

## Instalar Scan Trivy Localmente (Ubuntu)
[Reference Link](https://trivy.dev/docs/latest/getting-started/installation/)
```sh
sudo apt-get install wget gnupg
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null
echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb generic main" | sudo tee -a /etc/apt/sources.list.d/trivy.list
sudo apt-get update
sudo apt-get install trivy
```

Como ver se uma X imagem é vulnerável?  
`trivy image {image-name}:{tag}`

## Instalar Docker Scout CLI (Ubuntu)
`curl -sSfL https://raw.githubusercontent.com/docker/scout-cli/main/install.sh | sh -s --`

Como ver se uma X imagem é vulnerável?  
`docker scout cves {image-name}:{tag}`