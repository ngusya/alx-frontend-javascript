function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
	resolve(0);
	})
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);
