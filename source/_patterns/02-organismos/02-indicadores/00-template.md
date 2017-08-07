---
title: Indicadores
---

Componente para a exibição de indicadores em alguma tela.

É uma extensão compatível com Yii1.

**Casos de Uso**
- Quando é preciso exibir um ou mais conjunto de números em uma tela

Para usar ícones, deve-se usar o font awesome, pois o gliphicon no boostrap 2 não permite aumentar ícone sem gambiarra.

**Chamada:**

```php
$this->widget('fidelize.widgets.indicator.FIndicator', [
    'indicators' => [
        ['title' => 'ROI', 'value' => 10, 'icon' => 'fa-bar-chart-o'],
        ['title' => 'INV1', 'value' => 10],
        ['title' => 'INV2', 'value' => 10],
        ['title' => 'INV3', 'value' => 10, 'link' => 'http://www.fidelize.com.br'],
        ['title' => 'INV1', 'value' => 10, 'color' => 'red'],
        ['title' => 'INV2', 'value' => 10, 'color' => '#FF0000'],
    ],
    'parentFontSize' => '0.8', //define o tamanho da fonte (em - relativo). Default 1
]);
?>
```