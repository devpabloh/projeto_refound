# Sistema de Reembolsos

Sistema completo de gestão de reembolsos com frontend React e backend Node.js.

## 🚀 Tecnologias

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite
- JWT Authentication
- Multer (upload de arquivos)

## 📁 Estrutura do Projeto

```
projeto_refound/
├── web/                 # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas da aplicação
│   │   ├── routes/      # Configuração de rotas
│   │   ├── contexts/    # Context API
│   │   ├── services/    # Serviços de API
│   │   └── hooks/       # Custom hooks
│   └── package.json
├── api/                 # Backend Node.js
│   ├── src/
│   │   ├── controllers/ # Controladores
│   │   ├── routes/      # Rotas da API
│   │   ├── middlewares/ # Middlewares
│   │   └── database/    # Configuração do banco
│   ├── prisma/          # Schema e migrações
│   └── package.json
└── README.md
```

## 🛠️ Funcionalidades

- ✅ Autenticação de usuários (JWT)
- ✅ Sistema de roles (employee/manager)
- ✅ Gestão de reembolsos
- ✅ Upload de comprovantes
- ✅ Categorização de despesas
- ✅ Dashboard para visualização
- ✅ Interface responsiva

## 🚀 Deploy na Vercel

### Frontend
1. Conecte o repositório na Vercel
2. Configure as variáveis de ambiente:
   - `VITE_API_URL`: URL do backend (ex: https://seu-backend.vercel.app)
3. Deploy automático

### Backend
1. Conecte o repositório na Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático

## 📝 Como Usar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   cd web && npm install
   cd ../api && npm install
   ```
3. Configure o banco de dados:
   ```bash
   cd api
   npx prisma migrate dev
   ```
4. Execute o backend:
   ```bash
   npm run dev
   ```
5. Execute o frontend:
   ```bash
   cd ../web
   npm run dev
   ```

## 🔧 Configuração

### Variáveis de Ambiente

**Frontend (.env)**
```
VITE_API_URL=http://localhost:3333
```

**Backend (.env)**
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua-chave-secreta"
```

## 📊 Banco de Dados

O sistema usa SQLite com Prisma ORM. Principais entidades:

- **User**: Usuários do sistema (employee/manager)
- **Refunds**: Solicitações de reembolso
- **Categories**: Categorias de despesas

## 🎨 Interface

Interface moderna e responsiva com:
- Design system consistente
- Componentes reutilizáveis
- Navegação intuitiva
- Feedback visual para ações
