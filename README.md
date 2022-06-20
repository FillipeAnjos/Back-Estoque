## About Estoque - BACK-END

Estoque - É um software que projeta todo o fluxo de estoque de uma loja de roupas, 
desde a sua entrada e saída de estoque até o ínicio e final de uma venda.

Com o projeto Estoque, você terá um sistema completo que irá suprir a necessidade
de uma loja pequena.

## Tecnologias 

React Js / Next Js / Sass / TypeScript / JavaScript / TypeOrm / PostgreSQL

## Instalação

1° Clonar o projeto
2° cd Front-Estoque
3° npm install 
4° npm run dev ou yarn dev 
5° OBS: Esse projeto contém apenas o Back-End do sistema
   o Front-end se encontra em outro repositório. 

## Bibliotecas

### Instalação do ORM Typeorm
npm install typeorm

### Instalação o express
npm install express
npm add @types/express - D

### Instalação do ts node dev - bem parecido com o nodmon
npm add ts-node-dev -D

### Instalar o Typescript
npm install typescript

### Usar criptografia
npm install bcryptjs
npm add @types/bcryptjs -D

### Usar o banco de dados MySQL
npm install mysql --save

### Usar o banco de dados PostgreSQL
npm install pg

### Instalação do Metadata
npm install reflect-metadata

### Para evitar erro cors
npm add cors
npm add @types/cors -D

### Referente a formatação de datas
npm install moment --save

### Referente ao entendimento de variaveis ambientes
npm install dotenv

### Referente ao babel para "build" e depois "start"
npm add @babel/cli -D
npm add @babel/core -D
npm add @babel/node -D
npm add @babel/plugin-proposal-class-properties -D
npm add @babel/plugin-proposal-decorators -D
npm add @babel/preset-env -D
npm add babel-plugin-module-resolver -D
npm add babel-plugin-transform-typescript-metadata -D
npm add @babel/preset-typescript -D

### -----------------------------------------------------

### BACK-END COMANDOS - TYPEORM

//Comando para criar uma migration
npx typeorm migration:create -n Create<nome da migration>

//Comando para rodar as migrations
npm run typeorm migration:run

//Comando para rodar as migrations - SERVIDOR
npx typeorm migration:run

## FRONT-END

npx create-next-app <nome projeto>

npm add typescript @types/react @types/node -D

npm i react-pro-sidebar

npm add react-icons

npm add sass

npm add axios

npm add next-auth
npm add @types/next-auth -D

npm install react-paginate

npm install @mui/material @emotion/react @emotion/styled

### VARIAVEIS DE AMBIENTE - FRONT-END

NEXT_PUBLIC_CHAVE_API_OpenWeatherMap=<Sua chave>

NEXT_PUBLIC_CHAVE_SENHA_ADM=<Sua chave>

