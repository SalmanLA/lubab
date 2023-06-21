const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/lifestyle1.jpeg") {
        myImage.setAttribute("src", "images/lifestyle2.jpeg");
    } else {
        myImage.setAttribute("src", "images/lifestyle1.jpeg");
    }
};

let myButton = document.querySelector("button");
let welcomText = document.querySelector("p");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    welcomText.textContent = `Welcome, ${myName}`;
  }
}

myButton.onclick = () => {
    setUserName();
};
