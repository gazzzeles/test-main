const users = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    email: "john.doe@example.com",
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Jane",
    surname: "Smith",
    age: 17,
    email: "jane.smith@example.com",
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Jonny",
    surname: "Jonson",
    age: 40,
    email: "jonny.jonson@example.com",
    photo: "https://via.placeholder.com/100",
  },
];

function renderUsers(userArray) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  userArray.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.className = "user";

    const img = document.createElement("img");
    img.src = user.photo;
    img.alt = `${user.name} ${user.surname}`;

    const details = document.createElement("div");
    details.innerHTML = `
            <p><strong>Name:</strong> ${user.name} ${user.surname}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `;

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          user.photo = e.target.result;
          img.src = user.photo;
        };
        reader.readAsDataURL(file);
      }
    });

    userDiv.appendChild(img);
    userDiv.appendChild(details);
    userDiv.appendChild(fileInput);
    userList.appendChild(userDiv);
  });
}

function filterUsers() {
  const ageFilter = document.getElementById("ageFilter").value;
  if (ageFilter) {
    const filteredUsers = users.filter((user) => user.age > ageFilter);
    renderUsers(filteredUsers);
  } else {
    renderUsers(users);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderUsers(users);
});
