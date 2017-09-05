<template>
  <div class="page">
    <div class="content-wrap ft">
      <span v-if="show" @click="inserthtml">哈哈</span>
      <div :id="editor_id" style="height:100px;"></div>
    </div>
  </div>
</template>

<script>

  export default {
    data:function () {
      return {
        show:false,
		editor_id:String('id'+Math.random()).replace('.',''),
		editor:null
      };
    },
    mounted:function () {
      var _this = this;
	  _this.editor = UE.getEditor(this.editor_id,{
    		'onready':function () {
    		  this.vm = _this;
            }
        });
    },
    methods:{
	  inserthtml(){
		this.editor.execCommand('inserthtml','<div data-disedit="div" contenteditable="false">' +
            '<div style="color: red">哈哈哈</div>' +
			this.editor_id + '</div>' );
      }
    }
  }
</script>
