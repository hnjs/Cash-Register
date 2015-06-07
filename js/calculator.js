var Calculator = (function() {
	var previous = 0,
		current  = 0,
		lastOp   = '';

	return {
		calc: function(value, oper) {
			switch (lastOp) {
				case '':
					previous = value;
					break;
				case 'add':
					previous += value;
					break; 
				case 'sub':
					previous -= value;
					break; 
				case 'mul':
					previous *= value;
					break; 
				case 'div':
					previous /= value;
					break; 
				default:
			}
			lastOp = oper;
		},
		equal: function(value){
			switch (lastOp) {
				case 0:
					current = value;
					break;
				case 'add':
					current = previous + value;
					break; 
				case 'sub':
					current = previous - value;
					break; 
				case 'mul':
					current = previous * value;
					break; 
				case 'div':
					current = previous / value;
					break; 
				default:
			}
			previous = 0;
			lastOp   = '';
			return current;
		},
		clear: function(){
			current = 0;
			previous = 0;
			lastOp = '';
		}
	};
})();