# API de Transferências

Esta API permite login, registro de usuários, consulta de usuários e transferência de valores, com regras básicas de negócio. O banco de dados é em memória.

## Instalação

1. Clone o repositório ou baixe os arquivos.
2. Instale as dependências:
   ```powershell
   npm install
   ```

## Execução

Para iniciar o servidor:
```powershell
node server.js
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

- `POST /users/register`: Registra um novo usuário.
- `POST /users/login`: Realiza login.
- `GET /users`: Lista todos os usuários.
- `POST /transfers`: Realiza uma transferência.
- `GET /transfers`: Lista todas as transferências.
- `GET /api-docs`: Documentação Swagger.

## Regras de Negócio
- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências acima de R$ 5.000,00 só podem ser feitas para usuários marcados como "favorecido".

## Testes
Para testar a API com Supertest, importe o `app.js` em seu arquivo de teste.

## Documentação
Acesse `/api-docs` para visualizar a documentação Swagger.
