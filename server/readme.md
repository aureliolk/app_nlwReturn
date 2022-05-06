# Project NLW-RETURN -> BackEnd

- BackEnd for project NLW-RETURN

## Package need for Installation

- > typescript @types/node ts-node-dev ( Install with package for Development)
- > Whit NPM
- npm i typescript @types/node ts-node-dev -D
- > Whit Yarn
- yarn add typescript @types/node ts-node-dev -D

## Settings file tsconfig.json

- > Run with npx tsc --init | yarn tsc --init
- Change options the file tsconfig.json for:
  {
  "compilerOptions": {
  "target": "es2020",  
   "module": "commonjs",  
   "rootDir": "./src",  
   "outDir": "./dist",  
   "esModuleInterop": true,  
   "forceConsistentCasingInFileNames": true,  
   "strict": true,  
   "skipLibCheck": true  
   }
  }

## Install Package Express and TypeExpress

- > Install with npm
- npm i express && npm i --save-dev @types/express
- > Install with yarn
  > yarn add express && yarn add @types/express -D

# # Settings for Dataabse with SQLITE and PRISMA

- > URL Document Prima = https://www.prisma.io
- > Run install prisma with package for Development and @Prisma/Client whit Production
- npm i prisma -D and npm i @prisma/client
- > Run Start Prisma
- npx prisma init
- > Run Create Table/Model
- npx prisma migrate dev
- > Run Studio Prima
- npx prisma studio

## Install Nodemailer

- > URL Document Nodemailer = https://nodemailer.com/about/
- npm install nodemailer && npm install @types/nodemailer
