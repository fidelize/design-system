---
title: Grid
---

Grids exibem conjuntos de dados. Permitem a navegação e a manipulação de informações. Aparecem geralmente em ambientes desktop.

Se você tem conjunto de dados não padronizados ou muito extensos, considere o uso de cards.

É uma extensão compatível com Yii1.

**Casos de Uso**
- Quando as informações a exibir são padronizadas (mesmo conjunto de dados)
- Quando as informações a exibir são limitadas


**Para usar a grid basta:**
```php
$this->widget('fidelize.grid.FGridView', [
    'id' => 'ts-ciclo-grid',
    'isExportable' => true,
    'isEditable' => true,
    'deleteUrl' => false,
    'dataProvider' => $model->search(),
    'filter' => $model,
    'columns' => [
		'nome',
        [
            'class' => 'fidelize.grid.FButtonColumn',
            'template' => '{update}',
        ],
    ],
]);
```