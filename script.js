const form = document.querySelector('form');
const searchTerm = document.querySelector('#searchTerm');
const type = document.querySelector('#type');
const year = document.querySelector('#year');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', e => {
	e.preventDefault();
	const url = `https://www.omdbapi.com/?apikey=ec6b8770&s=${searchTerm.value}&type=${type.value}&y=${year.value}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			tbody.innerHTML = '';
			data.Search.forEach(result => {
				const row = document.createElement('tr');
				row.innerHTML = `
					<td>${result.Title}</td>
					<td>${result.Year}</td>
					<td>${result.Type}</td>
				`;
				tbody.appendChild(row);
			});
		})
		.catch(error => console.error(error));
});