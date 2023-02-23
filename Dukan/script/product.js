let global_arr = [];
window.addEventListener("load", () => {
  let api = "https://63f701c759c944921f7cffd6.mockapi.io/fashion";
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      global_arr = data;
    });
});
