async function fetchUserData() {
  let apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((user) => {
      let ele = document.createElement("li");
      ele.textContent = user.name;
      userList.append(ele);
    });
    dataContainer.appendChild(userList);
  } catch {
    dataContainer.innerHTML = "Failed to load user data.";
  }
}
addEventListener("DOMContentLoaded", fetchUserData);
