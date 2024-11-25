```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install --lts && nvm use --lts
```

```bash
cd ~
mkdir reps
cd reps
git clone https://github.com/big-trash-heap/nestjs-ws-cluster.git
cd nestjs-ws-cluster/
git checkout platform-socket.io-redis-adapter
```

```bash
# you redis host
echo '
REDIS_URL=redis://147.45.147.96:6379
' > .env
```

```bash
npm i
npm run start:dev
```