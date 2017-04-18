/* modules file */
var modulesTab = (function(){
  var tab = function(selecter){
    //console.log(2);
    this.wrap = $(selecter);
    this.btnList = $('>.tabBtn', this.wrap);
    this.btn = $('>li>button', this.btnList);
    this.con = $('>.tabCon', this.wrap);

    this.eventHandler();
  }
  tab.prototype.eventHandler = function(){
    //console.log(3);
    var that = this;
    this.btn.on('click', function(){
      that.clickEvent( $(this) );
    });
  }
  tab.prototype.clickEvent = function(target){
    //console.log(4);
    var targetNum = target.parent().index();
    this.btn.parent().removeClass('on');
    target.parent().addClass('on');
    this.con.removeClass('on');
    this.con.eq(targetNum).addClass('on');
  }
  return tab;
})();
/* end */

var tabWrap = $(document).find(".tabModules");
tabWrap.each(function() {
  new modulesTab(this);
});
