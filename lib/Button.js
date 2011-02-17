(function(document, define){
    define(["compose", "./Base", "uber/dom-event", "css!./resources/Button.css"], function(Compose, Base, event){
		return Compose(Base, {
			label: "",
			render: function(){
				var node = this.node = document.createElement("input");
				node.type = "button";
				node.value = this.label;
				node.className = "widgetsButton";

				this.clickHandle = event.listen(node, "onclick", Base.Handler(this, "onClick"));
			},
			onClick: null
		});
	});
})(document, typeof define != "undefined" ? define : function(deps, factory){
    this.widgets_Button = factory(Compose, widgets_Base, uber_dom_event); // use global has
});
