/*
1. body 에서 사용된 modules 종류가져오기
2. 배열로 자르기
3. 함수로 스크립트 불러오기
*/

var loadScript = function( url ){
  var script = document.createElement("script");
  script.type = "text/javascript"
  script.src = "/modules/" + url + ".js";
  document.getElementsByTagName("head")[0].appendChild( script );
}

var load = {
  init : function(){
    this.wrap = document.getElementsByTagName("body")[0];
    this.getModules = this.wrap.getAttribute("data-modules-type");
    this.modulesArray = this.getModules.split(" ");
    this.modulesArray.lengths = this.modulesArray.length;

    this.activeEvent();
  },
  activeEvent : function(){
    var i;
    for(i = 0;i<this.modulesArray.lengths;i++){
      loadScript(this.modulesArray[i]);
    }
  }
}
load.init();
