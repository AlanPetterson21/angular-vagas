# Angular Vagas (UC8)

Projeto exemplo com **rotas**, **componentes**, **serviço** e consumo de arquivo **assets/vagas-db.json**.

## Requisitos
- Node.js LTS instalado
- Angular CLI `npm i -g @angular/cli`

## Instalação
```bash
npm i
npm start
# abra http://localhost:4200
```

## Estrutura
- `src/app/components/home` — página inicial
- `src/app/components/vagas-lista` — lista com filtros
- `src/app/components/vaga-detalhe` — detalhes por ID
- `src/app/components/sobre` — informações do projeto
- `src/app/services/vagas.service.ts` — leitura do JSON em `assets/vagas-db.json`

## Build (opcional)
```bash
npm run build
```

## Publicação no GitHub
1. Crie um repositório vazio no GitHub
2. Execute:
```bash
git init
git add .
git commit -m "Projeto UC8 - Angular Vagas"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git
git push -u origin main
```