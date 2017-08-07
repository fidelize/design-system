Quando um aplicativo oferece suporte a grandes quantidades de informações, os usuários devem poder localizar rapidamente o conteúdo procurando por ele. Para tanto, [o Material Design propõem um conjunto de instruções para otimizar e unificar os métodos de busca](https://material.io/guidelines/patterns/search.html).

Em suma, uma busca textual envolve:

- Abrir o campo de busca
- Digitar e enviar uma query
- Exibir um conjunto de resultados


**Boas prática**
- Persistência da busca: lembrar de buscas já feitas pelo usuário.
- Sugestões em busca: buscar e autocompletar a busca enquanto a query é digitada.

**Definiton of Done**
- Filtros de todos os tipos buscam pelos caracteres inseridos em qualquer parte da palavra/valor.
- Filtros de todos os tipos NÃO discriminam caracteres acentuados dos não acentuados. Essa regra não é válida para filtros de gridview.
- Filtros de todos os tipos NÃO discriminam caracteres maiúsculos dos minúsculos.
- Filtros de CNPJ/CRM não cobram máscara.
- Componentes Select2 tem regras específicas de aplicação. Observe-as!

**Casos de Uso**
- Pesquisa persistente, quando o foco da aplicação é a busca (sempre visível)
- Pesquisa expansível, quando o foco da aplicação não é a busca (aparece ao clicar em um ícone, por exemplo).

**Locais de Uso**
- Persistente: [menu do Tradetools](https://tt.fidelize.com.br/training/)
- Expansível: [busca de acompanhamento de contratos do TradeSpend](https://tt.fidelize.com.br/training/index.php?r=tradespend/acaoTrade/acompanhar)

**Heurísticas**: Consistência; Reconhecimento; Prevenção de Erros