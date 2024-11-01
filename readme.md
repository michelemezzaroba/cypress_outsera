
# Cypress + Cucumber Project

Este projeto utiliza o Cypress com o plugin Cucumber para permitir testes e2e com a sintaxe de Gherkin. 

## Pré-requisitos

- **Node.js** e **npm** instalados
- Cypress e dependências instaladas

### 1. Clonar o Repositório

Clone o repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Execute o comando abaixo para instalar as dependencias:
```bash
npm install
```

E caso necessário, instale também essas dependências:
```bash
npm install cypress --save-dev
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor --save-dev
npm install tsify --save-dev
npm install --save-dev cypress-mochawesome-reporter
```

## Como Executar os Testes

Para abrir o Cypress em modo interativo, execute:
```bash
npx cypress open
```

Para executar todos os testes em modo headless, utilize:
```bash
npx cypress run
```

## Estrutura do Relatório
O relatório mostrará:

Resumo dos testes: Número de testes aprovados, reprovados, pendentes, etc.
Gráficos e métricas: Tempo de execução, frequência de falhas e outras métricas visuais.
