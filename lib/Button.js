(function(document, define){
	define(["compose", "./Base", "uber/listen", "cssx/css!./resources/Button.css"], function(Compose, Base, listen){
		return Compose(Base, {
			label: "",
			render: function(){
				var node = this.node = document.createElement("input");
				node.type = "button";
				node.value = this.label;
				node.className = "widgetsButton";

				this._onclick = Base.Listener(node, "click", this);
			}
		});
	});
})(document, typeof define != "undefined" ? define : function(deps, factory){
	this.widgets_Button = factory(Compose, widgets_Base, uber_dom_event); // use global has
});
