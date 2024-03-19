let pont = 0;

const gameBoard = document.getElementById("gameBoard");

gameBoard.addEventListener("click", function (event) {
  if (
    event.target.tagName === "circle" ||
    event.target.tagName === "ellipse" ||
    event.target.tagName === "rect"
  ) {
    pont++;
    document.getElementById("score").textContent = pont;

    moveTarget(event.target);
  }
});

function moveTarget(target) {
  const x = Math.floor(Math.random() * 1690) + 50;
  const y = Math.floor(Math.random() * 690) + 50;
  console.log(x);
  target.setAttribute("cx", x);
  target.setAttribute("cy", y);
  target.setAttribute("x", x);
  target.setAttribute("y", y);
}

function ganeraltcelpontok(shape) {
  for (let i = 0; i < 35; i++) {
    let target;
    const x = Math.floor(Math.random() * 1690) + 50;
    const y = Math.floor(Math.random() * 690) + 50;

    if (shape === "Circle") {
      target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      target.setAttribute("r", "8");
    } else if (shape === "Ellipse") {
      target = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "ellipse"
      );
      target.setAttribute("rx", "10");
      target.setAttribute("ry", "5");
    } else if (shape === "Rectangle") {
      target = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      target.setAttribute("width", "20");
      target.setAttribute("height", "10");
    }

    target.setAttribute("fill", "grey");
    target.setAttribute("cx", x);
    target.setAttribute("cy", y);
    target.setAttribute("x", x);
    target.setAttribute("y", y);

    gameBoard.appendChild(target);
  }
}

document
  .getElementById("alakzatok")
  .addEventListener("change", function (event) {
    const selectedShape = event.target.value;
    gameBoard.innerHTML = "";
    ganeraltcelpontok(selectedShape);
  });

ganeraltcelpontok("Circle");

function reset() {
  document.getElementById("score").textContent = 0;
}
function send_email() {
  var params = {
    name: document.getElementById("name").value,
    score: pont,
  };
  const serverID = "service_j28or3h";
  const templateID = "template_5e73nog";
  emailjs
    .send(serverID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      params.score;
      console.log(res);
      alert("Sikeres küldés");
    })
    .catch((err) => console.log(err));
}
