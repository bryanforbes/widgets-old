(function(document, define){
	define(["compose", "uber/object", "uber/dom", "uber/function", "uber/listen"],
	function(Compose, object, dom, func, listen){
		var Base = Compose(listen.Evented, function(args, node, preventStartup){
			this.create(args, node, preventStartup);
		},{
			create: function(args, src, preventStartup){
				src = this.srcNode = object.isString(src) ? dom.byId(src) : src;

				if(args){
					Compose.call(this, args);
				}

				if(preventStartup){
					this.preventStartup = preventStartup;
				}else{
					preventStartup = this.preventStartup;
				}

				this.render();

				if(this.node){
					if(src && src.parentNode && this.node !== src){
						src.parentNode.replaceChild(this.node, src);
					}
				}

				if(src && !src.parentNode){
					delete this.srcNode;
				}

				if(!preventStartup){
					this.startup();
				}
			},
			render: function(){
				if(!this.node){
					// Create root node if it wasn't created
					this.node = this.srcNode || document.createElement('div');
				}
			},
			startup: function(){
				this._started = true;
			},
			destroy: function(){
				dom.destroyElement(this.node);
				delete this.node;
			}
		});

		function Emitter(scope, type){
			type = "on" + type;
			return function(){
				var method = scope && scope[type];
				if(method){
					return method.apply(scope, arguments);
				}
			};
		}
		function Listener(node, type, scope, scopeType){
			return listen(node, type, Emitter(scope, scopeType||type));
		}
		Base.Emitter = Emitter;
		Base.Listener = Listener;

		return Base;
	});
})(document, typeof define != "undefined" ? define : function(deps, factory){
	this.widgets_Base = factory(Compose, uber_object, uber_dom, uber_function); // use global has
});
