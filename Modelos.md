# Nossos modelos de dados esperados pela API

utilize esses modelos se desejar utilizar nossa API em outros meios.

## Usuário

| Nome do campo | Tipo de Dado | Regras | Prioridade |
| ------------- | :----------: | :----: | ---------: |
| firstName | String | Entre 3 e 50 caracteres | Obrigatório |
| lastName | String | Entre 3 e 100 caracteres | Obrigatório |
| email | String | - | Obrigatório | 
| cpf | String | Entre 11 ou 14 caracteres | Obrigatório. Precisa ser válido |
| password | String | Entre 8 e 200 caracteres. Precisa conter maiúsculas, números e caracteres especiais | Obrigatório |
| imageURL | String | URL de imagem de perfil | Opcional |

## Notícia

| Nome do Campo | Tipo de dado | Regras | Prioridade |
| ------------- | :----------: | :----: | ---------: |
| headline | String | Entre 5 e 100 caracteres | Obrigatório |
| introduction | String | Máximo de 1000 caracteres | Obrigatório |
| category | Enum String | [Categorias](#Categorias) | Obrigatório |
| sources | Array de String | Ao menos uma URL | Obrigatório |
| status | Enum String | [Status](#Status) | Obrigatório |

## Político

| Nome do Campo | Tipo de dado | Regras | Prioridade |
| ------------- | :----------: | :----: | ---------: |
| fullName | String | Entre 10 e 80 caracteres | Obrigatório |
| currentPosition | Enum String | [Cargos](#Cargos) | Obrigatório |
| lastPosition | Enum String | [Cargos](#Cargos) | Obrigatório |
| status | Enum String | [Status](#Status) | Obrigatório |
| province | Enum String | Código de 2 caracteres do estado | Obrigatório |
| officialInfoURL | String | [Fontes](#Fontes) | Obrigatório |
| imageURL | Stirng | [Fontes](#Fontes) | Obrigatório |

## Cargos

- Candidato
- Vereador
- Prefeito
- Prefeito
- Dep. Estadual
- Governador
- Dep. Federal
- Senador
- Presidente
- Cargo Indireto
- Outro/Não Sei

## Categorias

- Positiva
- Negativa
- Corrupção
- Promessa Cumprida
- Promessa Descumprida

## Status

- autorizar (criação)
- editar (edição)

## Fontes

A fonte oficial adotada para verificar políticos é o [Divulga Contas](divulgacandcontas.tse.jus.br) do TSE. Na página do político, a fonte
do link da imagem é preferencialmente usada para preencher a imageURL.