// header ad
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let header_first = document.querySelector("#header-first");
let header_second = document.getElementById("header-second");

left.addEventListener("click", () => {
  header_first.style.display = "flex";
  header_second.style.display = "none";
});
right.addEventListener("click", () => {
  header_first.style.display = "none";
  header_second.style.display = "flex";
});

//language and login section
let image = document.querySelector("#dropdown");
let language_show = document.querySelector("#language-show");

image.addEventListener("click", () => {
  language_show.style.display = "block";
  image.style.transform = "rotate(90deg)";

  setTimeout(() => {
    image.style.transform = "rotate(270deg)";
    language_show.style.display = "none";
  }, 2000);
});


// loggin form
let login_button = document.querySelector("#login");
let sign_button = document.querySelector("#signup");

let login_display = document.querySelector("#for-login");
let signup_display = document.querySelector("#for-signup");

// for signup section here

login_button.addEventListener("click", () => {
  login_button.style.backgroundColor = "rgb(247, 13, 212)";
  login_button.style.color = "white";

  sign_button.style.backgroundColor = "rgb(244, 239, 239)";
  sign_button.style.color = "black";

  login_display.style.display = "flex";
  signup_display.style.display = "none";
});

sign_button.addEventListener("click", () => {
  sign_button.style.backgroundColor = "rgb(247, 13, 212)";
  sign_button.style.color = "white";

  login_button.style.backgroundColor = "rgb(244, 239, 239)";
  login_button.style.color = "black";

  login_display.style.display = "none";
  signup_display.style.display = "block"; // for swaping each other
});

// checking

let Sign_In_Sign_Up = document.querySelector("#Sign_In_Sign_Up");
let login_form = document.querySelector("#for-varify");

// for user's signup
let name = document.getElementById("signup_name");
let email = document.querySelector("#signup_email");
let password = document.querySelector("#passs");
let confirm_password = document.querySelector("#confirm_password");
let signup_submit = document.querySelector("#signup-submit");
let form = document.querySelectorAll("#for-signup form input");
let alert_showing = document.querySelector("#alert-showing");
let alert_message = document.querySelector("#alert-showing p");
let already_member = document.querySelector("#already_a_member");
let not_member = document.querySelector("#not_Members"); // all from singup

let user_data = JSON.parse(localStorage.getItem("details"));
if (user_data == null) {
  user_data = [];         // data send to local storage
}

Sign_In_Sign_Up.addEventListener("click", () => {
  login_form.style.display = "block";
}); 

signup_submit.addEventListener("click", (ele) => { // onsubmit of signup
  ele.preventDefault();
  let red_flag = false;
  let signal = 0;

  form.forEach((ele) => {
    if (ele.value !== "") {
      signal++;      // checking if any field are empty or not 
    }
  });

  if (signal == form.length) {  // after varify
    if (password.value !== confirm_password.value) {
      alert_showing.style.display = "block";
      alert_message.textContent = "Oops! Passwords don't Match";
      red_flag = true;

      setTimeout(() => {
        alert_showing.style.display = "none";
      }, 2000);
    } else if (red_flag === false) {
      obj = {
        name: name.value,
        email: email.value,
        password: password.value,
      };
      user_data.push(obj);
      localStorage.setItem("details", JSON.stringify(user_data)); //store data array of object format

      alert_showing.style.display = "block";
      alert_message.innerHTML = "Thank you! now you can login";
      alert_showing.style.backgroundColor = "green";

      login_button.style.backgroundColor = "rgb(247, 13, 212)";
      login_button.style.color = "white";

      sign_button.style.backgroundColor = "rgb(244, 239, 239)";
      sign_button.style.color = "black";

      login_display.style.display = "flex";
      signup_display.style.display = "none";

      setTimeout(() => {
        alert_showing.style.display = "none";
      }, 2000);
    }
  } else {
    alert_showing.style.display = "block";
    alert_message.textContent = "please fill with all details ! ";

    setTimeout(() => {
      alert_showing.style.display = "none";
    }, 2000);
  }
});

not_member.addEventListener("click", () => {
  sign_button.style.backgroundColor = "rgb(247, 13, 212)";
  sign_button.style.color = "white";

  login_button.style.backgroundColor = "rgb(244, 239, 239)";
  login_button.style.color = "black";

  login_display.style.display = "none";
  signup_display.style.display = "block";
});

already_member.addEventListener("click", () => {
  login_button.style.backgroundColor = "rgb(247, 13, 212)";
  login_button.style.color = "white";

  sign_button.style.backgroundColor = "rgb(244, 239, 239)";
  sign_button.style.color = "black";

  login_display.style.display = "flex";
  signup_display.style.display = "none";
});

// for user_login
let logg_email = document.querySelector("#logg-email");
let logg_password = document.getElementById("pass");
let logg_submit = document.querySelector("#logg-submit");
let loggin_display = document.getElementById("S_logged");
let logout_button = document.querySelector("#logout"); //log out button
let cross = document.querySelector("#cross");

logg_submit.addEventListener("click", () => {
  let flag = 0;
  user_data.forEach((ele) => {
    if (ele.email === logg_email.value) {
      flag++;
    } else {
      alert_showing.style.display = "block";
      alert_showing.style.backgroundColor = "teal";
      alert_message.textContent = "Wrong email ! ";
      setTimeout(() => {
        alert_showing.style.display = "none";
      }, 2000);
    }

    if (ele.password === logg_password.value) {
      flag++;
    } else {
      alert_showing.style.display = "block";
      alert_showing.style.backgroundColor = "teal";
      alert_message.textContent = "Wrong password ! ";
      setTimeout(() => {
        alert_showing.style.display = "none";
      }, 2000);
    }
  });


  if (flag == 2) {  // checking both are true or not 
    login_form.style.display = "none";
    loggin_display.style.display = "block";

    setTimeout(() => {
      loggin_display.style.display = "none";
    }, 2000);

    Sign_In_Sign_Up.style.display = "none";
    logout_button.style.display = "block";
    localStorage.setItem("login_status", true);
  }
});

logout_button.addEventListener("click", () => {
  Sign_In_Sign_Up.style.display = "block";
  logout_button.style.display = "none";
  localStorage.setItem("login_status", false);
});

cross.addEventListener("click", () => {
  setTimeout(() => {
    login_form.style.display = "none";
  }, 200);
}); 

window.addEventListener("load", () => {
  let varify = localStorage.getItem("login_status");
  if (varify == true) {
    Sign_In_Sign_Up.style.display = "none";
    logout_button.style.display = "block";
    localStorage.setItem("login_status", true);
  } else {
    setTimeout(() => {
      Sign_In_Sign_Up.style.display = "block";
      logout_button.style.display = "none";
      login_form.style.display = "block";
    }, 10000);
  }
});
