---
title: Wizard
---

Wizard exibe o progresso através de uma seqüência de etapas lógicas e numeradas. Eles também podem ser usados para navegação.

Podem exibir uma mensagem de feedback transitória após uma etapa ser salva.

Podem salvar o registro na base a cada etapa ou somente ao finalzar o preenchimento.

**Casos de Uso**
- Quando é necessário preencher muitas informações em um formulário
- Quando é necessário persistir pequenos fragmentos de dados de um cadastro maior
- Quando as informações a salvar dizem respeito à vários objetos (tabelas)

**Para usar o wizard:**

```php
$this->widget('fidelize.widgets.wizard.FWizard', array(
    'tabs' => [
    	0 => array(
            'desc' => 'Liberação e alvo',
            'url' => 'tradespend/criacaoContratoSimplificado/index',
            'move' => false,
            'scenario' => TsAcaoTrade::SCENARIO_LIBERACAO
        ),
        1 => array(
            'desc' => 'Dados gerais',
            'url' => 'tradespend/criacaoContratoSimplificado/dadosGerais',
            'move' => true,
            'scenario' => TsAcaoTrade::SCENARIO_GERAL
        ),
    ],
    'activeTab' => 1,
    'params' => []
));
```