!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("paperduck")):"function"==typeof define&&define.amd?define(["paperduck"],t):e.VuetifyImageInput=t(e.PaperDuck)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n;var e={name:"VImageInput",props:{value:String,imageWidth:{type:Number,default:256},imageHeight:{type:Number,default:256},clearable:{type:Boolean,default:!1}},data:function(){return{lazyValue:void 0}},computed:{internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("input",e)}}},watch:{value:{handler:function(e){this.lazyValue=e},immediate:!0}},methods:{clear:function(){this.internalValue=null},uploadImage:function(){var t=this,e=document.createElement("input");e.type="file",e.addEventListener("change",function(){n.load(e).then(function(e){t.internalValue=e.contain(t.imageWidth,t.imageHeight).toDataURL("image/png")})}),e.click()}},render:function(e){var t=this,n=t.imageWidth,i=t.imageHeight,a=t.internalValue,u=t.clearable;if(a){var l=e("img",{attrs:{src:a}}),r=[];if(u){var o=e("v-icon","clear"),d=e("v-btn",{props:{flat:!0,icon:!0},on:{click:this.clear}},[o]);r.push(d)}if(0<r.length){var c=e("div",r);return e("div",{style:{display:"flex"}},[e("div",{style:{flex:"1 1 0%"}},[l]),c])}return l}var f=e("v-icon","cloud_upload");return e("div",{style:{width:n+"px",height:i+"px",display:"flex",justifyContent:"center",alignItems:"center"}},[e("v-btn",{props:{fab:!0,large:!0},on:{click:this.uploadImage}},[f])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(e.name,e),e});
