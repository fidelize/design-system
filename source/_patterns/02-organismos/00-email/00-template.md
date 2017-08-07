---
title: Email
---

O layout de email da Fidelize está na pasta layout/views das extensoes.

É uma extensão compatível com Yii1.

**Casos de Uso**
- Quando é preciso enviar um email formal da empresa, constando cabeçalho e rodapé


**Para fazer o envio de email com esse layout**
```php
$controller = new CController('context');
$message = new YiiMailMessage();
$message->view = 'mail';
$message->setBody([
    'content' => $controller->renderInternal(
        Yii::getPathOfAlias('fidelize.layout.views') . '\mail.php',
            [
                'content' => $content,
            ], true
        ),
], 'text/html', Yii::app()->charset);
$message->subject = 'Contrato Aguardando Aprovação';
$message->from = Yii::app()->params['fromMail'];
$message->addTo($destinatario->usu_email);
```

**Para definir um layout para o content da mensagem é só fazer algo assim:**
```php
$content = $controller->renderFile(
    Yii::getPathOfAlias('tradespend.views.contrato') . '/_tsContratoAguardandoAprovacao.php',
        [
            'usuario' => $destinatario,
            'contrato' => $acaoTradeAdesao,
            'usuarioSolicitante' => $this->contrato->getUsuarioSolicitante(),
        ], true
);
```

**Se o email com layout da fidelize for feito em alguma classe que rode no terminal (command), algumas linhas serão modificadas.**

1- O comando "$controller = new CController('context');" some, pois o command não consegue enxergar o controlador, devemos utilizar CConsoleCommand.</p>
2- Devemos modificar o renderInternal para renderFile já que CConsoleCommand não possui nenhum método chamado renderInternal.

```php
$message->setBody([
    'content' => $controller->renderFile(

        Yii::getPathOfAlias('fidelize.layout.views') . '\mail.php',
            [
                'content' => $content,
            ], true
        ),
], 'text/html', Yii::app()->charset);
```