const reverse = function() {
	for (let i = 0; i < process.argv.length; i++) {
		if (i > 1) {
			let reversed = '';
			for (let j = process.argv[i].length - 1; j >= 0; j--) [ (reversed += process.argv[i][j]) ];
			console.log(reversed);
		}
	}
};

module.exports = reverse

// reverse();
