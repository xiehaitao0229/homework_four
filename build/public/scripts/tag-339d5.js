webpackJsonp([1],{4:function(i,s,e){i.exports=e(5)},5:function(i,s,e){"use strict";var a=e(0),n=new a.Thumb,t="";xtag.register("x-praise",{content:"<div class='hand' id='thumb'><div class='finger'></div><div class='finger'></div><div class='finger'></div><div class='finger'></div><div class='finger thumb'></div><div class='arm'></div></div><span class='hide' id='animation'>+1</span>",methods:{praise:function(){var i=this;n.clickAction();var s=i.querySelector("#animation");s.className="hide num",setTimeout(function(){s.className="hide"},800)}},events:{click:function(i){var s=this;"thumb"==i.target.id&&(t&&clearTimeout(t),t=setTimeout(function(){s.praise()},500))}}})}},[4]);