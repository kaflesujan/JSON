const createBtn = document.getElementById("Create");
const updateBtn = document.getElementById("Update");
const readBtn = document.getElementById("Read");
const editBtn = document.getElementsByClassName("edit");
const deleteBtn = document.getElementsByClassName("delete");

const fnameInput = document.getElementById("fnameid");
const lnameInput = document.getElementById("lnameid");
const phoneInput = document.getElementById("numid");
const emailInput = document.getElementById("emailid");

const userTableBody = document.getElementById("userTableBody");

const localStorageKey = "local_crud_users";

const read = () => {
  const localUsers = localStorage.getItem(localStorageKey);
  return localUsers ? JSON.parse(localStorage.getItem(localStorageKey)) : [];
};

const create = () => {
  const users = read();

  const user = {
    id: Date.now(),
    firstName: fnameInput.value,
    lastName: lnameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
  };
  console.log(user);

  users[users.length] = user;
  localStorage.setItem(localStorageKey, JSON.stringify(users));
  return updateUserTable();
};

const edit = (id) => {
  const users = read();

  const targetUser = users.find((user) => {
    return user.id == id;
  });
  fnameInput.value = targetUser.firstName;
  lnameInput.value = targetUser.lastName;
  phoneInput.value = targetUser.phone;
  emailInput.value = targetUser.email;

  createBtn.style.display = 'none';
  updateBtn.style.display = 'block';

  updateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    update(id);
  });
};

const update = (id) => {
  const users = read();

  const targetUser = users.findIndex((user) => {
    return user.id == id;
  });
  

  users[targetUser]['firstName'] = fnameInput.value;
  users[targetUser]['lastName'] = lnameInput.value;
  users[targetUser]['phone'] = phoneInput.value;
  users[targetUser]['email'] = emailInput.value;
  console.log(users[targetUser])
  localStorage.setItem(localStorageKey, JSON.stringify(users));
  document.getElementById("userForm").reset();
  return updateUserTable();
};

const deleteUser = (id) => {
  const users = read();
  const userWithoutId = users.filter((user) => {
    return user.id != id;
  });
  localStorage.setItem(localStorageKey, JSON.stringify(userWithoutId));
  return updateUserTable();
};

const updateUserTable = () => {
  updateBtn.style.display = "none";
  createBtn.style.display = "block";
  users = read();

  if (users.length < 1) {
    return (userTableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; font-size: 1.2rem; color: #515151">No User Found</td>
            </tr>
        `);
  }
  userTableBody.innerHTML = "";
  users.forEach((element, index) => {
    console.log(element);
    userTableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${element.firstName}</td>
                    <td>${element.lastName}</td>
                    <td>${element.phone}</td>
                    <td>${element.email}</td>
                    <td>
                        <div style="display: flex; column-gap: 1rem">
                            <button class="edit" data-id="${
                              element.id
                            }">Edit</button>
                            <button class="delete" data-id="${
                              element.id
                            }">Delete</button>
                        </div>
                    </td>
                </tr>
            `;
  });
  Array.from(editBtn).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      edit(e.target.getAttribute("data-id"));
    });
  });
  Array.from(deleteBtn).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      deleteUser(e.target.getAttribute("data-id"));
    });
  });
};

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  create();
});
readBtn.addEventListener("click", (e) => {
  e.preventDefault();
  return updateUserTable();
});

updateUserTable();