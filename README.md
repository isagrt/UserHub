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

### 🔹 3. Onde foi utilizado Observable no projeto e porquê?

O **Observable** foi utilizado no UserService nos métodos responsáveis por buscar dados da API:

- getUsers()

- getUserById(id: number)

Esses métodos utilizam o HttpClient do Angular, que retorna dados de forma assíncrona. O Observable permite que o componente se inscreva (subscribe) na resposta da requisição HTTP e receba os dados quando eles estiverem disponíveis.

Dessa forma, o componente pode reagir aos diferentes estados da requisição, como:

- sucesso (next): quando os dados dos usuários são recebidos

- erro (error): quando ocorre algum problema na requisição

- loading: enquanto os dados ainda estão sendo carregados

O uso de Observable segue o padrão do Angular para lidar com operações assíncronas e fluxos de dados, permitindo maior controle e reatividade na aplicação.

---

## 👩‍💻 Autoria

Projeto desenvolvido para fins acadêmicos utilizando conceitos de roteamento dinâmico no Angular.
