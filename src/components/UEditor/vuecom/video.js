
UE.registerUI('yuiinsertvideo',function(editor,uiName){

  editor.registerCommand(uiName,{
	execCommand:function(){

	}
  });
  var btn = new UE.ui.Button({
	name:uiName,
	title:uiName,
	cssRules :'background-position: -500px 0;',
	onclick:function () {
	  editor.vm.show = !(editor.vm.show || false);
	}
  });

  editor.addListener('selectionchange', function () {
	var state = editor.queryCommandState(uiName);
	if (state == -1) {
	  btn.setDisabled(true);
	  btn.setChecked(false);
	} else {
	  btn.setDisabled(false);
	  btn.setChecked(state);
	}
  });
  return btn;
});