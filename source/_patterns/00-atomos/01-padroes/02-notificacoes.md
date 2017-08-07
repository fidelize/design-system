As notificações fornecem informações curtas, oportunas e relevantes sobre sua aplicação. Elas são direcionadas para a web e para mobile.

Elas podem ser de Sucesso, Alerta ou Erro. Elas devem seguir o padrão de cores ao estado correspondente (amarelo, verde, vermelho).

Em suma, os tipos de notificação podem ser:
- **Transacional:** fornecem conteúdo que um usuário deve receber em um horário específico para permitir interação humano-a-humano, funcionar melhor na vida diária, controlar ou resolver estados transitórios do dispositivo
- **Não transacional:** para todas as situações não transacionais

**Boas práticas**
- Em vez de exibir várias notificações, você pode criar uma notificação que as resume todos. Por exemplo, um aplicativo de mensagens pode ter uma notificação sumária que diz "3 novas mensagens". Após a expansão, pode mostrar um snippet para cada mensagem.
- Não usar em operações que não exigem envolvimento do usuário, como informações de sincronização
- Não usar em estados de erro a partir dos quais o aplicativo pode se recuperar sem interação do usuário

**Casos de Uso**
- Quando uma carga do usuário foi processada
- Quando um registro foi excluído por ajax

**Locais de Uso**
- CRUD: [cadastro de mix de produtos](https://tt.fidelize.com.br/training/index.php?r=cadastro/segmentacaoMix)

Para detalhes sobre como proceder com o envio de notificações, tal como como é o comportamento em dispositivos móveis, observe [os padrões de notificações do Material Design]("https://material.io/guidelines/patterns/notifications.html).

**Heurísticas**: Visibilidade; Liberdade; Contexto