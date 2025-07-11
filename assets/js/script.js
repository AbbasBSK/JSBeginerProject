fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  console.log(response);
  return response.json()
}).then(data =>{
  console.log(data);
  
})
.catch(err => console.log("خطا:", err))