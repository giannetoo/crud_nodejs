# CRUD Node.js - API de Vendas Mensais

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white)

API RESTful simples para gerenciamento de vendas mensais desenvolvida com Node.js, Express e MongoDB. Permite realizar operações CRUD em registros de vendas organizados por mês e valor vendido.

## 🚧 Em Desenvolvimento

Atualmente trabalhando em:

- 📊 Dashboard para visualização das vendas
- 📈 Gráficos e relatórios mensais
- 🎨 Interface web para gerenciar dados
- 📱 Melhorias na API

## 📋 Funcionalidades

- ✅ Criar nova venda mensal
- ✅ Listar todas as vendas mensais
- ✅ Atualizar vendas existentes
- ✅ Deletar registros de vendas

## 🛠️ Tecnologias

- **Node.js** com **Express.js 5.1.0**
- **MongoDB Atlas** com **Mongoose 8.17.0**
- **dotenv** para variáveis de ambiente

## 📡 Endpoints

| Método   | Endpoint      | Descrição              |
| -------- | ------------- | ---------------------- |
| `GET`    | `/vendas`     | Listar todas as vendas |
| `POST`   | `/vendas`     | Criar nova venda       |
| `PUT`    | `/vendas/:id` | Atualizar venda por ID |
| `DELETE` | `/vendas/:id` | Deletar venda por ID   |

## 📊 Modelo de Dados

```javascript
{
  "mes": Number,        // Número do mês (1-12)
  "valorVendido": Number // Valor vendido no mês
}
```

## 📁 Estrutura

```
├── server.js          # Servidor principal
├── VendaMensal.js     # Modelo Mongoose
├── package.json       # Dependências
└── .env              # Configurações MongoDB
```

---

**Autor:** [Giannetoo](https://github.com/giannetoo)
