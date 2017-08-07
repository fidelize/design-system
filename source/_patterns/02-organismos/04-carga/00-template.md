---
title: Carga
---

Facilita e padroniza o processo de carga de informações.

É uma extensão compatível com Yii1.

**Principais funcionalidades:**
- Permite baixar um arquivo CSV vazio de exemplo
- Tem um botão para detectar automaticamente a posição das colunas
- As colunas são preenchidas por um combo, e não digitando "0", "1", ...
- A carga roda em segundo plano e o retorno vem por e-mail
- Cada linha roda em uma transaction
- Arquivos muito grandes são divididos em arquivos menores de 5000 linhas, criando um job para cada arquivo

**Se a carga der erro:**
- Ele vai manter os registros que estavam corretos
- Ele vai gerar uma nova planilha somente com as linhas que deram erro, inclusive informando qual foi o erro
(e mais coisas, se precisar!)

**Casos de Uso**
- Quando é preciso fazer inserções de registro em massa
