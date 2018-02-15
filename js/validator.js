(function($){

	var $$ = $.Validator = function(options) {
		this.options = $.extend({}, $$.options, options||{});
	};

	$$.errors = {
  		login_0: "Login can not be empty!",
  		login_1: "Incorrect login",
  		login_2: "At least 3 characters",
  		login_3: "Not more than 20 characters",
  		password_0: "Password can not be empty!",
  		password_1: "Incorrect password",
  		password_2: "At least 5 characters",
  		password_3: "Not more than 20 characters",
	};

	$$.prototype = {
		options : {},
		elem : null,
		form : null,
		result : null,

		validate : function() {
			var _t = this;
			_t.clearError();

			$('input:not(input[type=submit])', _t.form).each(function(){
				_t.elem = this;
				var type = $(_t.elem).attr("name");

				_t.validateElement(type);
			});

		},

		clearError : function() {
			var _t = this;
			$(".error", _t.form).hide();
			_t.result = false;	
		},

		showError : function(type) {
			var _t = this;
			var lay = $(_t.elem).closest(".fline");
			var error = _t.getError(type);

			$(".error", lay).text(error).show();	
		},

		validateElement : function(type) {
			var _t = this;
			
			if ($(_t.elem).val() == "") {
				_t.showError(type+"_0");
				_t.result = true;
				return;
			}

			var value = $(_t.elem).val();
			var length = value.length;

			switch (type) {
				case 'login':
					
					if (length < 3) {
						_t.showError("login_2");
						_t.result = true;			
					}

					if (length > 20) {
						_t.showError("login_3");
						_t.result = true;			
					}

					if (!(/^[A-Za-zА-Яа-я0-9]+$/i.test(value))) {
						_t.showError(type+"_1");
						_t.result = true;
					}

					break
				
				case 'password':

					if (length < 5) {
						_t.showError("password_2");
						_t.result = true;			
					}

					if (length > 20) {
						_t.showError("password_3");
						_t.result = true;			
					}
					
					if (!(/^[A-ZА-Я]+[a-zа-я]+\d+.+$/i.test(value))) {
						_t.showError(type+"_1");
						_t.result = true;
					}

					break

				default:
					break
			}	
		},

		getError : function(type) {
			var _t = this;
			return $$.errors[type];
		}

	};	
	$.fn.extend({
		Validator: function(options) {
			return this.each(function() {
				if (this.Validator) return;
				var _t = new $$(options);
				_t.form = this;
				this.Validator = _t;
				$(_t.form).bind("submit", function(e) {
					_t.validate();
					if (_t.result) return false;	
				});
			});
		}
	});
})(jQuery);