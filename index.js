var treeRoot=document.getElementById("root");
var traversalList=[];

function preOrder(node) {
  if(node.className == "treeNode") {
    traversalList.push(node);
  }
  for (var i=0;i<node.childNodes.length;i++) {
    preOrder(node.childNodes[i]);
  }
}

function postOrder(node) {
  for (var i=0;i<node.childNodes.length;i++) {
    postOrder(node.childNodes[i]);
  }
  if(node.className == "treeNode") {
    traversalList.push(node);
  }
}

function changeColor(i) {
  if(i) {
    traversalList[i-1].style.backgroundColor="white";
    if(i==traversalList.length) {
      clearInterval(timer);
    }
  }
  traversalList[i].style.backgroundColor="green";
}

var buttons=document.getElementsByClassName("btn");
var timer;
buttons[0].onclick = function() {
  var c=0;
  traversalList=[];
  preOrder(treeRoot);
  timer=setInterval(function() {
    changeColor(c++);
  },700);
}

buttons[1].onclick = function() {
  var c=0;
  traversalList=[];
  postOrder(treeRoot);
  timer=setInterval(function() {
    changeColor(c++);
  },700);
}