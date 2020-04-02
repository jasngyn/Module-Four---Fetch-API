// JavaScript Document

let requestURL = 'https://jasngyn.github.io/JSON-Lab/product.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	let listProducts = request.response;
	console.log(listProducts);
	weirdProducts(listProducts);
};

function weirdProducts(jsonObj) {
	let weirdProducts = jsonObj.weirdProducts;
	let section = document.querySelector('section');
	for(let i = 0; i < weirdProducts.length; i++) {
		let article = document.createElement('article');
		let img = document.createElement('img');
		let h2 = document.createElement('h2');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');
		
		/* Fetch API */
		fetch(requestURL) // Calling the Fetch API and passing it to the URL I defined above on line 3
		.then(function(response) {
		return response.json(); // Transforming the data into JSON
		})
		.then(function(data) {
		console.log(data);
		});
		
		img.setAttribute('src', 'https://jasngyn.github.io/JSON-Lab/' + weirdProducts[i].image);
		h2.textContent = weirdProducts[i].name;
		p1.textContent = 'Price: ' + weirdProducts[i].price;
		p2.textContent = 'Details: ' + weirdProducts[i].details;
		
		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		section.appendChild(article);
	}
}