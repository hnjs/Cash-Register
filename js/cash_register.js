var CashRegister = (function() {
	var balance = 0;
	return {
		getBalance: function() {
			return balance;
		},
		deposit: function(value) {
			balance += value;
		},
		withdraw: function(value) {
			if (value > balance) {return false;}
			balance -= value;
			return true;
		}
	};
})();