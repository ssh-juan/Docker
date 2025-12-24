# Dokcer Swarm

Rodar `vagrant up` para subir os nodes.  
Para parar (graceful shutdown) posteriormente: `vagrant halt`  
Para destruir: `vagrant destroy -f`  
`vagrant ssh swarm-1`, fazer isso nos 3 nodes
recomendado usar o terminal tilix e sincronizar os inputs


## Config do cluster
1. Iniciar um cluster
Escolher uma única máquina
Pegar o ip da máquina `ip a`
`docker swarm init --advertise-addr {ip}`
```sh
Swarm initialized: current node (x9z9ogaowt9hhrvlrbk4lvfh6) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-2tv4r9214raxyzn7iq4fkwgwtil7gpw8imxc20-c6954jmt626hhjft3tlfdjvfh {ip}:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```

2. Para adicionar os outros workers no Swarm, efetuar o comando o `docker swarm join` nas máquinas do outros nodes, que informado ao inicializar a máquina principal
`docker swarm join --token SWMTKN-1-2tv4r9214raxyzn7iq4fkwgwtil7gpw8imxc20-c6954jmt626hhjft3tlfdjvfh {ip}:2377`

3. Para controlar um cluster, os comandos devem ser executados a partir do node manager, nesse caso o `swarm-1`
`docker node ls`
```sh
vagrant@node-1:~$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
x9z9ogaowt9hhrvlrbk4lvfh6 *   node-1     Ready     Active         Leader           24.0.2
px6elcvryc60n3tari2emj585     node-2     Ready     Active                          24.0.2
wabt7a8zcjt44suthqowly3ac     node-3     Ready     Active                          24.0.2
```

## Como controlar o cluster através de outra máquina, sem precisar acessar o node diretamente?
1. Como premissa, a máquina atual precisa conseguir se conectar ao node, estar na mesma rede ou ter acesso.
2. Testar acesso à porta 2375: `nc -v {ip} 2375`
```
nc: connect to 192.168.56.11 port 2375 (tcp) failed: Connection refused
```
3. Exportar o socket do Cluster.  
Procurar onde está: `sudo find / -name docker.service -type f`  
Editar o arquivo, em ExecStart incluir: `-H tcp://0.0.0.0:2375`

4. Enviar comando: `DOCKER_HOST={ip}:2375 docker node ls`