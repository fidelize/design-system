---
title: Toggle
---

Componente de toggle de informações. Pode estar por padrão exibindo ou ocultando informações.

É uma extensão compatível com Yii1.

**Casos de Uso**
- Quando a informação é relevante porém grande demais para a tela
- Quando a informação não é essencial para a tela mas ainda assim deve estar disponível


**Chamada:**

```php
$this->widget('fidelize.widgets.toggleElement.FToggleElement', [
    'title' => 'Efetuar Carga',
    'description' => 'Faça a carga de adesões ao sistema',
    'parentCssClass' => 'wizard-content wizard-well well', //classes que a div "pai" vai herdar, o que te faz controler todo o css abaixo
    'content' => $this->renderPartial('_cargaForm', ['oAcao' => $oAcao], true),
    'closed' => true, //status "fechado" - false é aberto
    'id' => 'efetuarcargabox', 
]);
```