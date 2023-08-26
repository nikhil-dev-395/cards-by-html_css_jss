let istatus = document.querySelector(".info");

let addFriend = document.querySelector(".add");
let removeFriend = document.querySelector(".remove");
let check = 0;

addFriend.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "<h2>friend<h1/>";
    istatus.style.color = "blue";
    console.log("successfully added...");
    addFriend.innerHTML = "remove";
    addFriend.style.background = "orangered";
    addFriend.style.color = "white";
    check = 1;
  } else {
    istatus.innerHTML = "<h2>stranger<h2/>";
    istatus.style.color = "red";
    addFriend.innerHTML = "add";
    addFriend.style.color = "black";
    addFriend.style.background = "#dadadaad";
    check = 0;
  }
});
