// // api url


// // Defining async function
// async function getapi() {
// 	// Storing response
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi();

// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab =
// 		`<thead>
//         <tr>
// 		<th>Id</th>
// 		<th>Name</th>
// 		<th>Salary</th>

// 		</tr>
//         </thead>`;

// 	// Loop to access all rows
// 	for (let emp of data) {
// 		tab += `<tr>
// 	<td>${emp.id} </td>
// 	<td>${emp.name}</td>
// 	<td>${emp.salary}</td>		
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("employees").innerHTML = tab;
// }

const start = 0.10;
var time = start * 0

const loading = document.getElementById("time");

setInterval(loadingTimer, 1000)
function loadingTimer() {

	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;
	loading.innerHTML = `${minutes}:${seconds}`
	time--;
}



async function getData() {
	let response = await fetch('https://jsonplaceholder.typicode.com/users')
	let data = await response.json()
	// console.log(data)
	show(data);
	return data
}
getData().then(response => {
	console.log(response)
})

getData();


function show(data) {
	let tab =
		`<thead>
        <tr>
		<th>Id</th>
		<th>Name</th>
		<th>E-mail</th>
		
		</tr>
        </thead>`;

	// Loop to access all rows
	data.map((emp) => {
		tab += `<tr>
	<td>${emp.id} </td>
	<td>${emp.name}</td>
	<td>${emp.email}</td>		
</tr>`;
	})
	document.getElementById("employees").innerHTML = tab;

}


// // axios -- third party javascript library
// // axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
// //     console.log(response.data)
// // },err=>{
// //     console.log(err)
// // })