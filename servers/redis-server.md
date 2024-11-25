```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

```bash
cd ~
echo '
version: "3.3"

services:
  redis:
    image: redis:latest
    restart: always
    ports:
      - "6379:6379"
    volumes:
      - /path/to/local/data:/data
      - /path/to/local/redis.conf:/usr/local/etc/redis/redis.conf
    environment:
      - REDIS_PASSWORD=my-password
      - REDIS_PORT=6379
      - REDIS_DATABASES=16
' > redis.docker-compose.yaml

docker compose -f redis.docker-compose.yaml up -d
```
