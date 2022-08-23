# Desafio NodeJS
O intuito desse desafio é procurar auxiliar a criar as habilidades básicas de desenvolvimento backend usando NodeJS. Para conseguir concluir ele os seguintes conhecimentos são necessários (ou recomendados):

- O que são requests e responses
- Quais são os principais verbos HTTP e para que cada um deles serve
- Quais são os principais status code de resposta para requisições
- O que é uma API
- O que é uma API REST
- Como responder a requests e enviar response
- Banco de dados relacional
	- Chave primária
	- Inserção
	- Procura
	- Deleção
- Banco de dados não relacional
- Como manipular o banco de dados com NodeJS

## Recurso de aprendizagem
- https://www.youtube.com/watch?v=-0exw-9YJBo
- https://www.youtube.com/watch?v=K5QaTfE5ylk

## Resumo do desafio

Criar uma aplicação para cadastro de pokemons.

## Desafio #1

Criar um endpoint `/pokemon` que no verbo `POST` seja possível adicionar um novo pokemon na aplicação. Os parâmetros para adição do pokemon devem ser:

| Parâmetro | Tipo |
|--|--|
| name | string |
| type | "normal", "fire", "water", "grass", "flying", "fighting", "poison", "electric", "ground", "rock", "psychic", "ice", "bug", "ghost", "steel", "dragon", "dark" ou "fairy" |
| hp | number |
| attack | number |
| defense | number |
| speed | number |

Após a inserção deve ser enviado o status code 201 como resposta.

### Exemplo

```json
{
  "name": "Pikachu",
  "type": "electric",
  "hp": "35",
  "attack": "55",
  "defense": "40",
  "speed": "90"
}
  ```

### Tratativa de erros

- Caso algum dos parâmetros esteja faltando, foi enviado com algum dado de tipo diferente dos definidos no requisito ou o nome do pokemon já estava cadastrado deve ser enviada uma resposta com status code 400

## Desafio #2

Criar um endpoint `/pokemon/{name}` que no verbo `GET` retorne os dados do pokemon com o nome informado.

### Exemplo

Tendo adicionado o pokemon Pikachu conforme os dados do exemplo acima, ao acessar `/pokemon/Pikachu` deve retornar os seguintes dados:

```json
{
  "name": "Pikachu",
  "type": "electric",
  "hp": "35",
  "attack": "55",
  "defense": "40",
  "speed": "90"
}
  ```

### Tratativa de erros

- Caso não exista pokemon com o nome informado deve retornar status code 404

## Desafio #3

Criar endpoint `/pokemon/{name}` que no verbo `PATCH` efetue alterações parciais nos dados do pokemon.

### Exemplo

Ao enviar o seguinte request, com o verbo `PATCH`, para o endpoint `/pokemon/Pikachu` (dado que tenhamos cadastrado ele conforme nos exemplos anteriores):

```json
{
  "hp": "45",
  "speed": "110"
}
  ```

Espera-se que ao consultar os dados desse pokemon (conforme visto no desafio #2) tenhamos o seguinte retorno:

```json
{
  "name": "Pikachu",
  "type": "electric",
  "hp": "45",
  "attack": "55",
  "defense": "40",
  "speed": "110"
}
  ```

### Tratativa de erros

Se:
- O pokemon não existir
- For enviado algum parâmetro diferente, ou com tipo incompatível, dos que um pokemon deve ter

Deve retornar status code 400

## Desafio #4

Criar endpoint `/pokemon/{name}` que no verbo `PUT` efetue alterações nos dados do pokemon.

### Exemplo

Dado que tenhamos cadastrado o pokemon pikachu conforme no primeiro exemplo, ao enviarmos um request usando o verbo `PUT` para o endpoint `/pokemon/Pikachu` com os seguintes dados:

```json
{
  "name": "Pikachu",
  "type": "electric",
  "hp": "65",
  "attack": "52",
  "defense": "30",
  "speed": "110"
}
  ```

Espera-se que esses passem a ser os novos dados do Pikachu.

### Tratativa de erros

- Caso algum dos parâmetros esteja faltando, foi enviado com algum dado de tipo diferente dos definidos no requisito ou o nome do pokemon já estava cadastrado deve ser enviada uma resposta com status code 400

## Desafio 5

Criar endpoint `/pokemon/{name}` que no verbo `DELETE` remova o pokemon da aplicação.

### Exemplo

Ao enviar um request com o verbo `DELETE` para o endpoint `/pokemon/Pikachu` deve remover ele. Se tentarmos procurar ele usando o desafio #2 deve retornar 404.

### Tratativa de erros

Se o pokemon não existir deve retornar 404.
