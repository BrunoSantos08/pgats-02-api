const { users } = require('../model/userModel');

function registerUser({ username, password, favorecido }) {
  if (users.find(u => u.username === username)) {
    return { error: 'Usuário já existe.' };
  }
  users.push({ username, password, favorecido: !!favorecido, saldo: 10000 });
  return { success: true };
}

function loginUser({ username, password }) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return { error: 'Credenciais inválidas.' };
  return { success: true };
}

function getUsers() {
  return users;
}

module.exports = { registerUser, loginUser, getUsers };