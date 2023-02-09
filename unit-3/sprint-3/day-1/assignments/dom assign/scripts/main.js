// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

// register
let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassword = document.getElementById("register-user-passowrd");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

// login
let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

// getTodo
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

// cats
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let catsData = [];

// employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

let paginationWrapper = document.getElementById("pagination-wrapper");

let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
  "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
  "update-score-employee"
);

let employeesData = [];

// ***** Event listeners ***** //
window.addEventListener("load", () => {
  // fetchAndRenderEmployees();
  // fetchAndRenderCats(1);
  fetchAndRenderUsers(1);
});

sortAtoZBtn.addEventListener("click", () => {});

sortZtoABtn.addEventListener("click", () => {});

empCreateBtn.addEventListener("click", () => {
  // we need to create an object / we need make a POST request

  /*
  
  {
      method: 'POST',
      headers: { 
        'Content-type': 'application/json'
      },
      body: 'json data here'
    });

    let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");

  */

  let empNameValue = empNameInput.value;
  let empImgValue = empImgInput.value;
  let empDeptValue = empDeptInput.value;
  let empSalaryVal = +empSalaryInput.value;

 // perform some validation 

  let userObj = {
    name: empNameValue,
    image: empImgValue,
    department: empDeptValue,
    salary: empSalaryVal,
  };

  fetch(`${baseServerURL}/employees`, {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    fetchAndRenderEmployees();
  });

});

updateScoreEmpSalaryButton.addEventListener("click", function () {});

updateEmpUpdateBtn.addEventListener("click", function () {});

loginUserButton.addEventListener("click", async function () {});

registerUserButton.addEventListener("click", function () {});

// ***** fetch & render ***** //
function fetchAndRenderEmployees(queryParamString = null) {
  fetch(`${baseServerURL}/employees${queryParamString ? queryParamString : ""}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let empObj = data.map((item) => ({
        id: item.id,
        title: item.name,
        salary: item.salary,
        description: "Rs. " + item.salary,
        linkText: "Edit",
        linkUrl: "https://google.com",
        imageUrl: `${baseServerURL}${item.image}`,
      }));

      employeesData = empObj;
      renderCardList(empObj);
    });
}

function fetchAndRenderCats(pageNumber = 1) {

  fetch(`${baseServerURL}/cats?_limit=10&_page=${pageNumber}`)
    .then((res) => {
      let totalCats = res.headers.get("X-Total-Count");
      if (totalCats) showPagination(totalCats, 10);
      return res.json()
    })
    .then((data) => {
      console.log(data);
      let catObj = data.map((item) => ({
        id: item.id,
        title: item.name,
        salary: item.cost,
        description: item.description.substring(0,75),
        linkText: "Edit",
        linkUrl: "https://google.com",
        imageUrl: `${baseServerURL}${item.thumb}`,
      }));

      renderCardList(catObj);
    });
}


function fetchAndRenderUsers(pageNumber = 1) {

  fetch(`${baseServerURL}/users?_limit=10&_page=${pageNumber}`)
    .then((res) => {
      let totalCount = res.headers.get("X-Total-Count");
      if (totalCount) showPagination(totalCount, 10);
      return res.json()
    })
    .then((data) => {
      console.log(data);
      renderCardList(data);
    });
}

// ***** Utilities ***** //

// 25 / 10
function showPagination(totalItems, limit) {
  const numOfButtons = Math.ceil(totalItems/limit); // 3 button

  let stringListOfButtons = '';

  for (let i = 1; i <= numOfButtons; i++) {
    stringListOfButtons = stringListOfButtons.concat(getAButton(i,i))
  }

  paginationWrapper.innerHTML = `
    ${stringListOfButtons}
  `

  // these buttons are there in the dom
  let paginationButtons =  document.querySelectorAll('.pagination-button');
  // console.log(paginationButtons);

  for (let btn of paginationButtons) {
    btn.addEventListener('click', function(e){
      let pageNumber = e.target.dataset['pageNumber'];
      fetchAndRenderUsers(pageNumber);
    })
  }
}

function getAButton(text, pageNumber) {
  return `
    <button class="pagination-button" data-page-number="${pageNumber}" >${text}</button>
  `
}

// array of objects
// id, title, desc, linkText, linkUrl, imageUrl
function renderCardList(cardData) {
  let cardList = `
    <div class="card-list">
      ${cardData
        .map((item) =>
          getCard(
            item.id,
            item.firstname + ' ' + item.lastname,
            item.email,
            null,
            null,
            item.avatar
          )
        )
        .join("")}
    </div>
  `;

  mainSection.innerHTML = cardList;
}

function getCard(id, title, desc, linkText, linkUrl, imageUrl) {
  let card = `
      <div class="card" data-id=${id} >
        <div class="card__img">
        <img src=${imageUrl} alt="${title} image" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${title}</h3>
          <div class="card__item card__description">
            ${desc}
          </div>
          ${ linkUrl ? `<a href=${linkUrl} data-id=${id} class="card__item card__link">${linkText}</a>` : ''}
        </div>
      </div>
  `;
  return card;
}