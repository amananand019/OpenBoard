// variable declare
// tool change
let cTool = "pencil";
let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d");
let body = document.querySelector("body");
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;

//   tool strokeStyle should be changed after setting canvas dimensions
//   otherwise it will reset the strokeStyle to default black color
tool.strokeStyle = "red";

// pencil, rect, line code
// canavas board -> left  point kitna aage  hai
let boardLeft = canvasBoard.getBoundingClientRect().left;
let boardTop = canvasBoard.getBoundingClientRect().top;
let iX, iY, fX, fY;
let drawingMode = false;
body.addEventListener("mousedown", function (e) {
  iX = e.clientX + boardLeft;
  iY = e.clientY - boardTop;
  if (cTool == "pencil" || cTool == "eraser") {
    drawingMode = true;
    tool.beginPath();
    tool.moveTo(iX, iY);
  }
});
body.addEventListener("mouseup", function (e) {
  if (cTool == "pencil" || cTool == "eraser") {
    drawingMode = false;
  } else if (cTool == "rect" || cTool == "line") {
    // rect, line
    fX = e.clientX - boardLeft;
    fY = e.clientY - boardTop;
    let width = fX - iX;
    let height = fY - iY;
    if (cTool == "rect") {
      tool.strokeRect(iX, iY, width, height);
    } else if (cTool == "line") {
      tool.beginPath();
      tool.moveTo(iX, iY);
      tool.lineTo(fX, fY);
      tool.stroke();
      console.log("line tool is pending");
    }
  }
});
body.addEventListener("mousemove", function (e) {
  if (drawingMode == false) return;

  fX = e.clientX - boardLeft;
  fY = e.clientY - boardTop;
  tool.lineTo(fX, fY);
  tool.stroke();
  iX = fX;
  iY = fY;
});

// tool change and tool pointer size code
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");
// identify -> click  -> again click
pencil.addEventListener("click", function (e) {
  if (cTool == "pencil") {
    // second click
    // options show
    options[0].style.display = "flex";
  } else {
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
    // eraser.style.border = "1px solid red";
    cTool = "pencil";
    tool.strokeStyle = "red";
    tool.lineWidth = pencilSize;
  }
});
eraser.addEventListener("click", function (e) {
  if (cTool == "eraser") {
    // second click
    // options show
    options[1].style.display = "flex";
  } else {
    // eraser.style.border = "1px solid red";
    // koi aur clicked aur usko options visible to wo remove ho jaaye
    cTool = "eraser";
    tool.strokeStyle = "white";
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }

    tool.lineWidth = eraserSize;
  }
});
rect.addEventListener("click", function (e) {
  if (cTool == "rect") {
    // second click
    // options show
    options[2].style.display = "flex";
  } else {
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
    // eraser.style.border = "1px solid red";
    cTool = "rect";
    tool.strokeStyle = "red";
    tool.lineWidth = rectSize;
  }
});
line.addEventListener("click", function (e) {
  if (cTool == "line") {
    // second click
    // options show
    options[3].style.display = "flex";
  } else {
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
    // eraser.style.border = "1px solid red";
    cTool = "line";
    tool.strokeStyle = "red";
    tool.lineWidth = lineSize;
  }
});

// stroke color change code
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");
redColor.addEventListener("click", function () {
  tool.strokeStyle = "red";
});
greenColor.addEventListener("click", function () {
  tool.strokeStyle = "lightgreen";
});
blueColor.addEventListener("click", function () {
  tool.strokeStyle = "lightskyblue";
});

let pencilSize = 2;
let eraserSize = 5;
let rectSize = 2;
let lineSize = 2;

let sizeBoxArr = document.querySelectorAll(".size-box");

sizeBoxArr[0].addEventListener("click", (e) => {
  let elems = ["size1", "size2", "size3", "size4"];
  //class
  //jispe
  //using event bubbling we can get the child which is clicked
  console.log(e.target);
  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);

  if (test) {
    if (firstClass == "size1") {
      pencilSize = 2;
    } else if (firstClass == "size2") {
      pencilSize = 4;
    } else if (firstClass == "size3") {
      pencilSize = 6;
    } else if (firstClass == "size4") {
      pencilSize = 8;
    }
  }

  tool.lineWidth = pencilSize;
});

sizeBoxArr[1].addEventListener("click", (e) => {
  let elems = ["size1", "size2", "size3", "size4"];
  //class
  //jispe
  console.log(e.target);
  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);

  if (test) {
    if (firstClass == "size1") {
      eraserSize = 5;
    } else if (firstClass == "size2") {
      eraserSize = 10;
    } else if (firstClass == "size3") {
      eraserSize = 15;
    } else if (firstClass == "size4") {
      eraserSize = 20;
    }
  }

  tool.lineWidth = eraserSize;
});
sizeBoxArr[2].addEventListener("click", (e) => {
  let elems = ["size1", "size2", "size3", "size4"];
  //class
  //jispe
  console.log(e.target);
  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);

  if (test) {
    if (firstClass == "size1") {
      rectSize = 2;
    } else if (firstClass == "size2") {
      rectSize = 4;
    } else if (firstClass == "size3") {
      rectSize = 6;
    } else if (firstClass == "size4") {
      rectSize = 8;
    }
  }

  tool.lineWidth = rectSize;
});

sizeBoxArr[3].addEventListener("click", (e) => {
  let elems = ["size1", "size2", "size3", "size4"];
  //class
  //jispe
  console.log(e.target);
  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);

  if (test) {
    if (firstClass == "size1") {
      lineSize = 2;
    } else if (firstClass == "size2") {
      lineSize = 4;
    } else if (firstClass == "size3") {
      lineSize = 6;
    } else if (firstClass == "size4") {
      lineSize = 8;
    }
  }

  tool.lineWidth = lineSize;
});
