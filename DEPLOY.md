# 🚀 Guia de Deploy na Vercel

## Pré-requisitos

1. Conta na [Vercel](https://vercel.com)
2. Conta no [Cloudinary](https://cloudinary.com) (para upload de arquivos)
3. Banco PostgreSQL (pode usar [Neon](https://neon.tech) ou [Supabase](https://supabase.com))

## 📋 Passo a Passo

### 1. Preparar o Backend

#### 1.1 Configurar Banco de Dados
- Crie um banco PostgreSQL
- Copie a URL de conexão

#### 1.2 Configurar Cloudinary
- Crie uma conta no Cloudinary
- Anote: Cloud Name, API Key, API Secret

#### 1.3 Deploy do Backend
1. Vá para [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório
4. Configure as variáveis de ambiente:

```env
DATABASE_URL="postgresql://user:password@host:port/database"
JWT_SECRET="sua-chave-secreta-aqui"
CLOUDINARY_CLOUD_NAME="seu-cloud-name"
CLOUDINARY_API_KEY="sua-api-key"
CLOUDINARY_API_SECRET="seu-api-secret"
NODE_ENV="production"
FRONTEND_URL="https://seu-frontend.vercel.app"
```

5. Configure o projeto:
   - **Framework Preset**: Node.js
   - **Root Directory**: `api`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Deploy!

### 2. Preparar o Frontend

#### 2.1 Deploy do Frontend
1. Vá para [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe o mesmo repositório
4. Configure as variáveis de ambiente:

```env
VITE_API_URL="https://seu-backend.vercel.app"
```

5. Configure o projeto:
   - **Framework Preset**: Vite
   - **Root Directory**: `web`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Deploy!

### 3. Configurar Banco de Dados

Após o deploy do backend:

1. Acesse o terminal da Vercel ou use o CLI:
```bash
npx vercel env pull .env
```

2. Execute as migrações:
```bash
npx prisma migrate deploy
```

3. Gere o cliente Prisma:
```bash
npx prisma generate
```

## 🔧 Troubleshooting

### Problemas Comuns

1. **Erro de CORS**
   - Verifique se `FRONTEND_URL` está configurado corretamente
   - Confirme se a URL do frontend está correta

2. **Erro de Banco de Dados**
   - Verifique se `DATABASE_URL` está correto
   - Execute as migrações: `npx prisma migrate deploy`

3. **Erro de Upload**
   - Verifique as credenciais do Cloudinary
   - Confirme se as variáveis estão configuradas

4. **Build Fails**
   - Verifique se todas as dependências estão no `package.json`
   - Confirme se o TypeScript está configurado corretamente

### Comandos Úteis

```bash
# Ver logs do backend
vercel logs --scope=seu-username

# Fazer redeploy
vercel --prod

# Ver variáveis de ambiente
vercel env ls
```

## 📝 URLs Finais

- **Frontend**: `https://seu-frontend.vercel.app`
- **Backend**: `https://seu-backend.vercel.app`

## ✅ Checklist

- [ ] Backend deployado
- [ ] Frontend deployado
- [ ] Banco de dados configurado
- [ ] Migrações executadas
- [ ] Cloudinary configurado
- [ ] Variáveis de ambiente configuradas
- [ ] CORS configurado
- [ ] Testes realizados
