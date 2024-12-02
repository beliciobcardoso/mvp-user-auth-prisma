# MVP Next.js, Prisma, Auth, Email Verification.


## Tecnologias e Bibliotecas

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)
![Typescript](https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)

![Static Badge](https://img.shields.io/badge/-PostgreSQL-PostgreSQL?logo=postgresql&logoColor=%23ffffff&labelColor=008bb9&color=848484)
![Static Badge](https://img.shields.io/badge/-RESEND-PostgreSQL?logo=resend&logoColor=%23ffffff&labelColor=000000&color=000000)
![Static Badge](https://img.shields.io/badge/-REACTEMAIL-REACTEMAIL?labelColor=000000&color=000000)
![Static Badge](https://img.shields.io/badge/-SHADCNUI-SHADCNUI?labelColor=000000&color=000000)
![Static Badge](https://img.shields.io/badge/-Prisma-Prisma?logo=prisma&logoColor=%23000000&labelColor=%230000&color=%23ffffff)

## Getting Started

```bash
npm install
```

## Banco de Dados

O banco de dados utilizado é o PostgreSQL. Você precisará de uma instância dele para executar o projeto. Um arquivo docker-compose.yml está incluído para facilitar a execução de um container Docker.

## Configuração de Envio de E-Mail



## Variáveis de Ambiente

Renomeie o arquivo .env.example para .env. Depois, modifique as variáveis de ambiente conforme necessário:

Váriável do banco de dados:

```bash
# Exemplo utilizando o container Docker disponível
DATABASE_URL="postgresql://developerdeck101:developerdeck101@127.0.0.1:5432/test"
# Ou personalize com suas próprias configurações
DATABASE_URL="postgresql://<user>:<password>@<url>:<port>/<db_name>"
```

Variável de encriptação do token JWT:

```bash
AUTH_SECRET=314FUJnJeO1zGfxpxbmqqxQsBiCl/NwOyJ9AONpG03Y=
```

Para gerar a chave AUTH_SECRET, utilize o comando:

```bash
# Unix
openssl rand -base64 32
```

ou

```bash
# Windows
npm exec auth secret
```

Caso deseje executar em modo produção npm run start, será necessário descometa a variável:

```bash
AUTH_TRUST_HOST=true
```

## Tabelas do Banco de Dados

Para criar as tabelas do banco de dados, é possível executar os comandos do Prisma ou scripts do projeto.

### Comandos Prisma

Execute o comando:

```bash
npx prisma migrate dev
```

ou

```bash
npx prisma db push
```


## Para inicializar o projeto

### Modo Desenvolvimento

```bash
# Executar o Projeto
npm run dev
```

### Modo Produção

```bash
# Construir o projeto
npm run build
```

```bash
# Executar o Projeto
npm run start
```

Abrir [http://localhost:3000](http://localhost:3000) com seu navegador.

## Configuração de Rotas

A configuração das rotas de middleware é realizada no arquivo de configuração config/routes/index.ts.

```JavaScript
import { ConfigRoutes } from "@/types/routes";

export const configRoutes: ConfigRoutes = {
  publicRoutes: [
    "/",
    "/auth/login",
    "/auth/register",
    "/auth/change-password",
    "/auth/reset-password",
    "/auth/verify-email",
  ],
  authRoutes: ["/api/auth/signin"],
  apiRoutes: ["/api/protected-api"],
  protectedRoutes: ["/auth/settings"],
};
```

Para customizar conforme sua necessidade, utilize a função `createRouteMatchers` do arquivo `lib/route/index.ts` dentro do middleware.ts conforme exemplo abaixo:

```JavaScript
export default auth((req) => {
  const { isPublicRoute, isProtectedRoute, isApiRoute, isAuthRoute } =
    createRouteMatchers(configRoutes, req);
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  console.log(`Public: ${isPublicRoute}`);
  console.log(`Protected: ${isProtectedRoute}`);
  console.log(`Api: ${isApiRoute}`);
  console.log(`Auth: ${isAuthRoute}`);
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // console.log(`Middleware: ${req.nextUrl.pathname}`);
});
```

