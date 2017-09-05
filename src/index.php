<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset='utf-8' />
    <title><?php if(Yii::app()->controller->id=='index'){
        echo '极果-全球好物消费推荐平台';
    }else{
        echo CHtml::encode($this->pageTitle).'-极果';
    }?></title>
    <meta name="description" content="<?php echo $this->description;?>" />
    <meta name="keywords" content="<?php echo $this->keywords;?>" />
    <meta name="referrer" content="always" />
    <meta content="target-densitydpi=device-dpi,width=750" name="viewport">
    <meta name="format-detection" content="telephone=no"/>
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-navbutton-color" content="#000000" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
</head>
<body>
<div id="app"></div>
</body>
</html>