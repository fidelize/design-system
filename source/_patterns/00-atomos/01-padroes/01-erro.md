Os erros ocorrem quando um aplicativo não consegue completar uma ação esperada. Veja os [padrões de exibição de erro do Material Design](https://material.io/guidelines/patterns/errors.html).

Minimize erros ao projetar aplicativos que facilitam a entrada de informações com facilidade. Os aplicativos devem aceitar formatos de dados comuns que usam recursos para melhorar a compreensão do usuário. Para resolver erros:
- Comunique claramente o que está acontecendo
- Descreva como um usuário pode resolvê-lo
- Preserve quanto possível a entrada introduzida pelo usuário

**Boas práticas**
- O erro deve ser exibido abaixo do campo
- O erro deve ser exibido em estados de erro (vermelho, para fundo branco, por exemplo)
- A submissão do formulário deve estar ativa, todavia se você faz validação inline, então o input de submit deve ficar desabilitado enquanto o erro persiste.
- Um resumo de erros pode ser exibido no início do formulário quando o formulário é submetido e erros são encontrados
- Você pode identificar erros e tratâ-los em tempo real, como por exemplo, interpretando erros de digitação e fazendo buscas corretas

**Casos de Uso**

Alguns exemplos de erro incluem:
- Quando o input do usuário não foi corretamente processado
- Quando a aplicação falha ao carregar
- Operações incompatíveis rodando concorrentemente
- Quando o usuário digita alguma palavra de forma errada

**Locais de Uso**
- Resumo de erros e erros em campos de um formulário: [submter em branco o formulário de cadastro de produtos do Transfer Order](https://tt.fidelize.com.br/training/index.php?r=cadastro/cadProduto/create).

**Heurísticas**: Prevenção de erros; Liberdade; Contexto