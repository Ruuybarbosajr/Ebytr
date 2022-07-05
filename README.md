# Boas vindas ao repositório do projeto Blitz Ebytr !!!

> Tecnologias utilizadas:
- Express
- Typescript
- JWT
- Mysql

> Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`).
- Esses serviços irão inicializar um container chamado `ebytr_api` e outro chamado `ebytr_db`.
- A partir daqui você pode rodar o container `ebytr_api` via CLI ou abri-lo no VS Code.

> Use o comando `npm run up:server`.
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as dependências com `npm install`

> O banco terá duas tabelas: pessoas usuárias e tarefas.

```sql
DROP DATABASE IF EXISTS Ebytr;
CREATE DATABASE Ebytr;
USE Ebytr;

CREATE TABLE Users (
  `id` VARCHAR(50) NOT NULL PRIMARY KEY,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `admin` BOOLEAN NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL
) ENGINE=INNODB;

CREATE TABLE Tasks (
  `id` VARCHAR(50) NOT NULL PRIMARY KEY,
  `title` VARCHAR(50) NOT NULL,
  `status` INT NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  FOREIGN KEY (`user_id`) REFERENCES Users(`id`)
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO Users (`id`, `first_name`, `last_name`, `admin`, `email`, `password`)
VALUES ('IDÚNICO', 'Ruy', 'Junior', true, 'ruy.junior@mail.com', 'senhapadrao');
```
O arquivo `Ebytr.sql` contém as _queries_ que criam e populam o banco.

<details>
  <summary><strong>Rotas Usuários</strong><summary><br />
    
    > GET
    - http://localhost:3001/user/all
    - http://localhost:3001/user/:id
    
    > POST
    - http://localhost:3001/user/create
<details>
  
<details>
  <summary><strong>Rotas Tarefas</strong><summary><br />
    
    > GET
    - http://localhost:3001/task/all
    - http://localhost:3001/task/:id
    
    > POST
    - http://localhost:3001/task/create
    
    > PUT
    - http://localhost:3001/task/update/:id
    - http://localhost:3001/task/update/status/:id
    
<details>
