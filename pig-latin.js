const convertToPigLatin = function() {
	let pigLatinArray = [];
	for (let i = 2; i < process.argv.length; i++) {
		pigLatinArray.push(`${process.argv[i].slice(1)}${process.argv[i][0]}ay`);
	}

	console.log(pigLatinArray.join(' '));
};

convertToPigLatin();
