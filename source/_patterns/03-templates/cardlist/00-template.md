---
title: Cardlist
---

Cardlist é um agregador de cards em listas.

Ele serve para organizar grandes volumes de cards, de forma a prever paginações, rolagem e outros.

Está disponível para Yii1.

**Casos de Uso**
- Quando os cards necessitam ser categorizados
- Quando os cards são muitos e necessitam de paginação com controle
- Quando quer-se sintetizar informações relevantes e dispor link's para mais opções (para uma grid, por exemplo)


**Para usar o cardlist:**

```php
$this->widget('fidelize.widgets.cardList.CardList',array(
	'lists' => array(
		0 => array(
			'listTitle' => Yii::t('TsContratos', 'Últimos contratos criados'),
			'listOptions' => array(
				'dataProvider' => $contratos,
				'itemView' => 'application.modules.tradespend.views.contrato._listContratos',
				'summaryText' => Yii::t('TsContratos', '{count} contratos')
			),
			'linkAfter' => array(
				'title' => Yii::t('TsContratos', 'Ver todos os contratos'),
				'url' => '#',
			)
		),
		1 => array(
			'listTitle' => Yii::t('TsContratos', 'Atividade recente'),
			'listOptions' => array(
				'dataProvider' => $alteracoes,
				'itemView' => 'application.modules.tradespend.views.contrato._listAtividades',
				'summaryText' => Yii::t('TsContratos', '{count} alterações')
			),
			'linkAfter' => array(
				'title' => Yii::t('TsContratos', 'Ver todas atividades'),
				'url' => Yii::app()->createUrl('tradespend/contratoLog')
			)
		),
	)
));
```