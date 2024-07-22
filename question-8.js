// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

async function fetchUserNames() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const newUsers = users.map(user => user.name);
    console.log(newUsers);
  }


fetchUserNames();
