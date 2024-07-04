# Barber Shop

## Descrição do Projeto

O **Barber Shop** é uma aplicação web desenvolvida para gerenciar agendamentos em uma barbearia. A aplicação permite que os usuários façam login, registrem-se, agendem, editem e visualizem seus agendamentos.

## Tecnologias Utilizadas

- **Backend**:
  - Node.js (v20.15.0)
  - Express.js
  - Firebase Firestore
  - Axios

- **Frontend**:
  - Node.js (v20.15.0)
  - Vue.js
  - Vue Router
  - Vuex

- **Containerização**:
  - Docker
  - Docker Compose

## Requisitos para Rodar o Projeto

- Docker
- Docker Compose

## Como Rodar o Projeto

### Utilizando `docker-compose`

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/Rafael-Fortes/barber-shop
   cd barber-shop
   ```

2. **Construa e inicie os containers**:
   ```sh
   docker-compose up --build
   ```

3. **Acesse a aplicação**:
   - Backend: `http://localhost:3000`
   - Frontend: `http://localhost:8080`

### Utilizando dois terminais (um para o backend e outro para o frontend)

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/Rafael-Fortes/barber-shop
   cd barber-shop
   ```

2. **Instale as dependências do backend**:
   ```sh
   cd backend
   npm install
   ```

3. **Inicie o backend**:
   ```sh
   node app.js
   ```

4. **Instale as dependências do frontend**:
   Abra um novo terminal e execute:
   ```sh
   cd frontend
   npm install
   ```

5. **Inicie o frontend**:
   ```sh
   npm run serve
   ```

6. **Acesse a aplicação**:
   - Backend: `http://localhost:3000`
   - Frontend: `http://localhost:8080`