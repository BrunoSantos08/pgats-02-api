const { users } = require('../model/userModel');
const { transfers } = require('../model/transferModel');

function transfer({ from, to, value }) {
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) return { error: 'Usuário não encontrado.' };
  if (sender.saldo < value) return { error: 'Saldo insuficiente.' };
  if (!recipient.favorecido && value >= 5000) {
    return { error: 'Transferências acima de R$ 5.000,00 só para favorecidos.' };
  }
  sender.saldo -= value;
  recipient.saldo += value;
  transfers.push({ from, to, value, date: new Date() });
  return { success: true };
}

function getTransfers() {
  return transfers;
}

module.exports = { transfer, getTransfers };