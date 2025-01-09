# Formulário de Cadastro de Membros

Este projeto consiste em um formulário de cadastro de membros para o projeto Frontend Fusion, desenvolvido utilizando React, validação de dados com Zod, e armazenamento local dos dados.

## Objetivo

Desenvolver um formulário de cadastro de membros utilizando React, validação de dados com Zod, e salvando os dados localmente.


## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **components/Form.jsx**: Componente do formulário.
- **hooks/useFormValidation.js**: Hook para validação utilizando Zod.
- **utils/validationSchema.js**: Contém os schemas de validação do Zod.
- **utils/storage.js**: Funções para manipulação do localStorage.

## Passos para Desenvolvimento

1. **Configuração Inicial**:
   - Configuração do ambiente de desenvolvimento com React e Tailwind CSS.
   - Criação da estrutura básica do projeto.

2. **Desenvolvimento do Formulário**:
   - Criação do componente `Form.jsx` com os campos necessários.
   - Implementação da lógica de estado para gerenciar os dados do formulário.

3. **Validação dos Dados**:
   - Criação do arquivo `validationSchema.js` com os schemas de validação utilizando Zod.
   - Implementação do hook `useFormValidation.js` para validar os dados do formulário.

4. **Armazenamento Local**:
   - Criação do arquivo `storage.js` com funções para salvar e recuperar dados do localStorage.

5. **Ajustes Finais**:
   - Adição de mensagens de erro e feedback para o usuário.
   - Ajustes no layout e responsividade utilizando Tailwind CSS.
