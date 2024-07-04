# Usar a imagem oficial do Node.js na versão 20.15.0
FROM node:20.15.0

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]