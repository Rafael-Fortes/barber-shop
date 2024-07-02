const axios = require("axios");

const api_key = "";
const url =
  `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`;

// Função para autenticar o usuário
async function authenticateUser(email, password) {
  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });

    // Resposta da API
    const data = response.data;
    console.log("Usuário autenticado com sucesso:", data);

    // Retornar os dados da resposta
    return data;
  } catch (error) {
    // Tratamento de erros
    console.error("Erro ao autenticar usuário:", error.response.data);
    throw error;
  }
}
