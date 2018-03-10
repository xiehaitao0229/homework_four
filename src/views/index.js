module.exports = function (templateParams) {
    //vendor 是 css 的文件名称
    var _cssList = ['vendor'];
    var webAssestsHelp = require('./webAssetsHelp.js')(templateParams, _cssList);

    var scriptsshowStr = ``;
    //拼写 index.html 代码
    var _html = "{% extends './layout.html' %}"+
                "{% block title %}My Page {% endblock %}"+
                "{% block styles %}"+
                webAssestsHelp.styles+
                "{% endblock %}"+
                "{% block content %}"+
                "{% include '../widget/index.html' %}"+
                "{% endblock %}"+
                "{% block script%}"+
                "<script>"+
                "(function(){"+   //1
                    "var scriptsshow = ["+webAssestsHelp.scriptsshow+ "];"+
                    "for(let i=0;i<scriptsshow.length;i++){"+  //2
                        "let a = scriptsshow[i];"+
                        "if(localStorage.getItem(a)){" + //3
                            "$('<scr'+'ipt>'+localStorage.getItem(a)+'</scr'+'ipt>').attr({type:'text/javascript',id:i}).appendTo($('head').remove('#'+i))" +
                        "}"+  //3
                        "else{"+  //4
                            "localStorage.clear();"+
                            "flag = true;"+
                            "for(let q=0;q<scriptsshow.length;q++){"+
                                "let b = scriptsshow[q];"+
                                "axios.get(b)"+
                                ".then(function(data){"+
                                    "localStorage.setItem(b,data.data);"+
                                "})"+   
                             "}"+
                             "break;"+   
                             "LazyLoad.js(scriptsshow,function(){});"+
                        "}"+  // 4
                    "}"+  //2
                "})()"+  //1
                "</script>"+
                "{% endblock %}"
    return _html;
}

