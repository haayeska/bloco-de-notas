# Bloco de Notas

Lista de tarefas organizada por categoria (Trabalho, Estudo e Pessoal). As tarefas ficam salvas no navegador, então continuam lá quando você fecha e abre a página.

## Funcionalidades

- Adicionar tarefas com descrição e categoria
- Marcar como feita e desmarcar
- Apagar uma tarefa ou limpar todas as feitas de uma vez
- Filtrar a lista por categoria
- Contador de tarefas pendentes
- Dados salvos no `localStorage`, sem precisar de servidor

## Tecnologias

- [React 19](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) para desenvolvimento e build
- [Tailwind CSS 4](https://tailwindcss.com/) para o visual

## Como rodar

Você precisa do [Node.js](https://nodejs.org/) 20 ou mais novo.

```bash
git clone https://github.com/haayeska/bloco-de-notas.git
cd bloco-de-notas
npm install
npm run dev
```

Depois abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Scripts

| Comando           | O que faz                                    |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Sobe o projeto em modo de desenvolvimento    |
| `npm run build`   | Confere os tipos e gera a versão final em `dist/` |
| `npm run preview` | Mostra a versão final localmente             |
| `npm run lint`    | Procura problemas no código com o ESLint     |

## Estrutura

```
src/
├── components/
│   ├── tasks/      # Formulário e lista de tarefas
│   └── ui/         # Botão, campo de texto e seletor reutilizáveis
├── hooks/
│   └── useTarefas.ts  # Estado das tarefas e salvamento no navegador
├── types.ts        # Tipos e categorias
└── App.tsx         # Tela principal com os filtros
```
