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



// humburger section 
let humburger=document.querySelector("#humburger");
let nav_menu=document.querySelector("#nav-menu");

humburger.addEventListener("click",()=>{

  if (nav_menu.style.display=="block") {
    nav_menu.style.display="none"
  }
  else{
  nav_menu.style.display="block"
  }
})

// input color
let input=document.querySelectorAll("input");
input.forEach((ele)=>{
 ele.addEventListener("focus",()=>{
  ele.style.border="none"
  ele.style.outline=" 0.1px solid #5e767855"
 })


})





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

Sign_In_Sign_Up.addEventListener("click", () => {
  login_form.style.display = "block";
});

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

window.addEventListener("load", () => { // onload checking you are already member or not 
  let varify = localStorage.getItem("login_status");

  if (varify == "true") {
    Sign_In_Sign_Up.style.display = "none";
    logout_button.style.display = "block";
    clearTimeout(clear);
  } else {
    var clear = setTimeout(() => {
      Sign_In_Sign_Up.style.display = "block";
      logout_button.style.display = "none";
      login_form.style.display = "block";
    }, 10000);
  }
});

logg_submit.addEventListener("click", (e) => {
e.preventDefault();
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
    console.log(flag);
  if (flag >= 2) { // checking both are true or not

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

// this is for getting data form api
let product_append = document.querySelector("#product");
let global_arr = [];
window.addEventListener("load", () => {
  let api = "https://dummyjson.com/products";
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      global_arr = data.products;
      display(data.products);
    })
    .catch((err) => {
      console.log(err);
    });
});

let filter = document.getElementById("filter");
let sort = document.getElementById("sorting");

filter.addEventListener("change", () => {
  //filter
  if (filter.value == "") {
    display(global_arr);
  } else {
    let filtered = global_arr.filter((ele) => {
      return ele.category === filter.value;
    });
    display(filtered);
  }
});

sort.addEventListener("change", () => {
  //sorting
  if (sort.value == "") {
    display(global_arr);
  } else {
    let sorting = global_arr.filter((ele) => {
      if (sort.value === "10-200") {
        return ele.price >= 10 && ele.price <= 200;
      } else if (sort.value === "200-500") {
        return ele.price >= 200 && ele.price <= 500;
      } else if (sort.value === "above-500") {
        return ele.price >= 500;
      }
    });
    display(sorting);
  }
});

function display(arr) {
  product_append.innerHTML = "";
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
    cart_button.textContent = "Add To Cart";

    cart_button.addEventListener("click", () => {
      get_to_cart(ele);
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
    product_append.append(product_div);
  });
}

let ls_cart = JSON.parse(localStorage.getItem("my_data"));
if (ls_cart === null) {
  ls_cart = [];
}

function get_to_cart(ele) {
  if (ls_cart.length == 0) {
    ls_cart.push(ele);
    localStorage.setItem("my_data", JSON.stringify(ls_cart));
  } else {
    let red_flag = false;
    for (let i = 0; i < ls_cart.length; i++) {
      if (ls_cart[i].id === ele.id) {
        red_flag = true;
        break;
      }
    }

    if (red_flag == false) {
      ls_cart.push(ele);
      localStorage.setItem("my_data", JSON.stringify(ls_cart));
    } else {
      alert_showing.style.display="block";
      alert_message.textContent="Hey! you already Added to cart !"

      setTimeout(() => {
         alert_showing.style.display="none";
      }, 3000);
    }
  }
}
