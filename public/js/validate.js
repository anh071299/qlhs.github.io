// check username
const form = document.getElementById("newStudent");
const firstname = form.elements.firstname;

firstname.addEventListener("keyup", function () {
  checkFirstName();
});
function checkFirstName() {
  let error =  firstname.nextElementSibling.nextElementSibling;
  let value =  firstname.value.trim();
  if (value === "") {
    error.textContent = "Ho  không được để trống";
    firstname.classList.add("is-invalid");
    return false;
  } else {
     firstname.classList.remove("is-invalid");
    return true;
  }
}

//check lastname

const lastname = form.elements.lastname;

lastname.addEventListener("keyup", function () {
  checkLastName();
});
function checkLastName() {
  let error = lastname.nextElementSibling.nextElementSibling;
  let value = lastname.value.trim();
  if (value === "") {
    error.textContent = "Tên không được để trống";
    lastname.classList.add("is-invalid");
    return false;
  } else {
    lastname.classList.remove("is-invalid");
    return true;
  }
}

// check email
const email = form.elements.email;
email.addEventListener("blur", function () {
  checkEmail();
});
function checkEmail() {
  let error = email.nextElementSibling.nextElementSibling;
  let value = email.value.trim();
  let validRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  if (value.length == "") {
    error.textContent = "Vui lòng điền email";
    email.classList.add("is-invalid");
    return false;
  } else if (!value.match(validRegex)) {
    error.textContent = "Email không hợp lệ";
    email.classList.add("is-invalid");
    return false;
  } else {
    email.classList.remove("is-invalid");
    return true;
  }
}
// check phone
const phone = form.elements.phone;
phone.addEventListener("keyup", function () {
  checkPhone();
});

function checkPhone() {
  let error = phone.nextElementSibling.nextElementSibling;
  let value = phone.value.trim();
  let validRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  if (value.length == "") {
    error.textContent = "Vui lòng điền số điện thoại";
    phone.classList.add("is-invalid");
    return false;
  } else if (!value.match(validRegex)) {
    error.textContent = "Số điện thoại sai định dạng";
    phone.classList.add("is-invalid");
    return false;
  } else {
    phone.classList.remove("is-invalid");
    return true;
  }
}

export default function () {
  if (!checkFirstName() || !checkLastName() || !checkEmail() || !checkPhone()) {
    return null;
  } else {
    return {
      first_name: firstname.value.trim(),
      last_name: lastname.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
    };
  }
}
export { form, firstname, lastname, email, phone };
