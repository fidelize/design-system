---
title: Extensões da Grid
---

**AJAX/HTML**
```php
array(
	'modalId' => 'dadosEmails',
	'class' => 'fidelize.grid.FModalColumn',
	'name' => 'emails',
	'iconClass' => 'icon-comment opacity50',
	'value' => '"Ver"',
	'tooltipText' => 'Ver endereços de e-mail',
	'modalTitle' => '\'Emails de \' . $data->nome',
	'modalAjaxContent' => 'Yii::app()->createUrl(\'medico/emails\', array(\'id\' => $data->medico->id, \'endereco\' => $data->id))',
	'htmlOptions' => array('style' => 'width: 50px; text-align: center;'),
),
```

**AJAX/JSON (uma função JS se encarrega de criar o HTML nesse caso)**
```php
array(
	'modalId' => 'historicoProcesso',
	'header' => Yii::t('Processo','Histórico do Processo'),
	'class' => 'fidelize.grid.FModalColumn',
	'iconClass' => 'icon-comment opacity50',
	'value' => '"Detalhar"',
	'modalTitle' => '\'Histórico do processo nº \' . $data->numero_sinistro',
	'tooltipText' => 'Ver histórico do Processo',
	'modalAjaxContent' => 'Yii::app()->createUrl("processo/historico", array("id" => $data->id))',
	'modalFunctionToProcessContent' => 'processaItensHistorico',
	'htmlOptions' => array('style' => 'width: 100px; text-align: center;'),
	'requestIsJSON' => true,
),
```