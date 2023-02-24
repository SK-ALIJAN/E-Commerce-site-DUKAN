
// navbar section
let for_new = document.querySelector(".for-new");
let for_dress = document.querySelector(".for-dresss");
let for_wedding = document.querySelector(".for-weddings");

let new1 = document.querySelector("#for-new");
let wed2 = document.querySelector("#under-Weddings");
let cloth3 = document.querySelector("#for-dress");

for_new.addEventListener("click", () => {
  new1.style.display = "flex";
  wed2.style.display = "none";
  cloth3.style.display = "none";
});

for_dress.addEventListener("click", () => {
  new1.style.display = "none";
  wed2.style.display = "none";
  cloth3.style.display = "flex";
});

for_wedding.addEventListener("click", () => {
  new1.style.display = "none";
  wed2.style.display = "flex";
  cloth3.style.display = "none";
});

document.querySelector("#navbar").addEventListener("click", () => {
  new1.style.display = "none";
  wed2.style.display = "none";
  cloth3.style.display = "none";
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

// for user_login
let logg_email = document.querySelector("#logg-email");
let logg_password = document.getElementById("pass");
let logg_submit = document.querySelector("#logg-submit");
let loggin_display = document.getElementById("S_logged");
let logout_button = document.querySelector("#logout"); //log out button
let cross = document.querySelector("#cross");

let user_data = JSON.parse(localStorage.getItem("details"));
if (user_data == null) {
  user_data = []; // data send to local storage
}

signup_submit.addEventListener("click", (ele) => {
  // onsubmit of signup
  ele.preventDefault();
  let red_flag = false;
  let signal = 0;

  form.forEach((ele) => {
    if (ele.value !== "") {
      signal++; // checking if any field are empty or not
    }
  });

  if (signal == form.length) {
    // after varify
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

  if (flag == 2) {
    // checking both are true or not
    login_form.style.display = "none";
    loggin_display.style.display = "block";

    setTimeout(() => {
      loggin_display.style.display = "none";
    }, 2000);

    // Sign_In_Sign_Up.style.display = "none";
    // logout_button.style.display = "block";
    localStorage.setItem("login_status", "true");
  }
});

// logout_button.addEventListener("click", () => {
//   Sign_In_Sign_Up.style.display = "block";
//   logout_button.style.display = "none";
//   localStorage.setItem("login_status", false);
// });

cross.addEventListener("click", () => {
  setTimeout(() => {
    login_form.style.display = "none";
  }, 200);
});

// append data
let cart_price = document.querySelector("#cart_show_price");
let amount = document.querySelector("#amounts");
let image1 = document.querySelector("#shopping-girl");
let image2 = document.querySelector("#empty");

let append_data = document.querySelector("#appending");
let fetch_data = JSON.parse(localStorage.getItem("my_data"));
if (fetch_data == null) fetch_data = [];

displays(fetch_data);
console.log(append_data);
function displays(arr) {
  append_data.innerHTML = "";
  arr.forEach((ele) => {
    let product_div = document.createElement("div");
    let category = document.createElement("h5");
    let image = document.createElement("img");
    let name = document.createElement("p");
    let description = document.createElement("p");
    let price_div = document.createElement("div");
    let price = document.createElement("h5");
    let discount = document.createElement("h5");
    price_div.append(price, discount);
    let rating = document.createElement("p");
    let cart_button = document.createElement("button");

    category.textContent = ele.category;
    image.setAttribute("src", ele.thumbnail);
    name.textContent = ele.brand;
    price.textContent = ele.price;
    discount.textContent = ele.discountPercentage;
    rating.textContent = `Rating ${ele.rating} `;
    description.textContent = ele.description;
    cart_button.textContent = "Remove ";

    cart_button.addEventListener("click", () => {
      deleted(ele);
    });

    product_div.append(
      category,
      image,
      name,
      price_div,
      rating,
      description,
      cart_button
    );
    append_data.append(product_div);
  });
}
function deleted(ele) {
  let deleting = fetch_data.filter((element) => {
    if (ele == element) {
      return false;
    } else return true;
  });

  fetch_data = deleting;
  localStorage.setItem("my_data", JSON.stringify(fetch_data));
  displays(fetch_data);
  price(fetch_data);
  somehting();

  alert_showing.style.display = "block";
  alert_message.textContent = "Successfully Deleted !";
  alert_showing.style.backgroundColor = "green";
  setTimeout(() => {
    alert_showing.style.display = "none";
  }, 2000);
}

// cart price show
function somehting() {
  if (fetch_data.length !== 0) {
    image1.style.display = "none";
    image2.style.display = "none";
    price(fetch_data);
  } else {
    setTimeout(() => {
      image1.style.display = "block";
      image2.style.display = "block";
    }, 2000);
  }
}
somehting();

function price(arr) {
  cart_price.innerHTML = "";
  let sum = 0;

  arr.forEach((element) => {
    let dabba = document.createElement("div");
    let item = document.createElement("p");
    let price = document.createElement("p");
    item.textContent = element.brand;
    price.textContent = element.price;
    sum += element.price;
    dabba.append(item, price);
    cart_price.append(dabba);
  });
  amount.textContent = sum;
}

// procede to buy
let order_place = document.querySelector("#order-place");

let procede = document.querySelector("#proceed-to-order");
procede.addEventListener("click", () => {
  let varify=localStorage.getItem("login_status")
  if (varify=="false"){
    login_form.style.display = "block";
  }
   else {
    if (fetch_data.length !== 0) {
      order_place.style.display = "block";
      fetch_data = [];
      localStorage.setItem("my_data", JSON.stringify(fetch_data));
      displays(fetch_data); // for display
      price(fetch_data); // for cart price
      somehting(); // for image

      setTimeout(() => {
        order_place.style.display = "none";
      }, 2000);
    } else {
      alert_showing.style.display = "block";
      alert_message.textContent = "Your cart is Empty !";
      setTimeout(() => {
        alert_showing.style.display = "none";
      }, 2000);
    }
  }
});
