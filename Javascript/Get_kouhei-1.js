fetch("https://api.scratch.mit.edu/users/kouhei-1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));
