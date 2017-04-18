var modulesPopup = (function(){
  var popup = function(seleceter){
    this.$wrap = $(seleceter);
    this.$close = $(".close_pop" ,this.wrap);

    this.eventHandler();
  };

  popup.prototype.eventHandler = function(e){
      var self = this;

      this.$close.focus();
      this.$close.on('click', function(e){
        e.preventDefault();
        self.closeEvent();
      });
      $(document).keydown( function(e) {
        if (e.keyCode == 27) {
          self.closeEvent();
        }
      });
  };

  popup.prototype.closeEvent = function(){
      this.$wrap.remove();
  };

  return popup;
})();

var modulesAjax = {
  init : function(targets){
    this.target = targets;
    this.$target = $("[" + targets + "]");

    this.eventHandler();
  },
  eventHandler : function(){
    var self = this;
    this.$target.unbind("click");
    this.$target.on("click", function(e){
      self.ajaxEvent( this );
    });
  },
  ajaxEvent : function(me){
    var self = this;
    var popupFileName = $(me).attr(this.target);
    $.ajax({
      type : "POST",
      url : "./" + popupFileName + ".html",
      dataType : "html",
      error : function(){
        alert("실패");
      },
      success : function(res){
        $("body").append(res);
        $(".pop_area").each(function(){
          new modulesPopup(this);
        });
        self.init("data-module-popup");
      }
    });
  }
}

modulesAjax.init("data-module-popup");
