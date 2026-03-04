# 📘 UserHub

## 📌 Sobre o Projeto
O **UserHub** é uma aplicação desenvolvida em **Angular** que permite listar usuários e visualizar seus detalhes individualmente através de rotas dinâmicas.
O sistema utiliza navegação baseada em parâmetros de URL para carregar informações específicas de cada usuário diretamente da API.

---

## 🚀 Conceitos Técnicos Utilizados

### 🔹 1. O que é Rota Dinâmica?

Uma **rota dinâmica** é uma rota que recebe um **parâmetro variável na URL**, permitindo que a aplicação carregue conteúdos diferentes conforme o valor informado.
No UserHub, a rota dinâmica foi utilizada para acessar a página de detalhes do usuário através do seu ID.

## Exemplo de rota utilizada no projeto

```javascript
{ path: 'user/:id', component: Details }
```

### 🔹 2. O que é paramMap?

O **paramMap** é um objeto fornecido pelo Angular que permite acessar os **parâmetros da rota atual**.
Ele é utilizado juntamente com o serviço **ActivatedRoute**.

## Exemplo de rota utilizada no projeto

```javascript
this.route.paramMap.subscribe(params => { 
const id = Number(params.get('id')); 
});
```

### 🔹 3. Onde foi utilizado no projeto?

No UserHub, a rota dinâmica e o paramMap foram aplicados na:

📌 Página de Detalhes do Usuário (Details)

---
## 👩‍💻 Autoria

Projeto desenvolvido para fins acadêmicos utilizando conceitos de roteamento dinâmico no Angular.
