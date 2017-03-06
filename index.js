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
      clearInterval(timer); return;
    }
  }
  traversalList[i].style.backgroundColor="green";
}
function clearColor(arr) {
  for(var i=0;i<arr.length;i++) {
    arr[i].style.backgroundColor="white";
  }
}
var buttons=document.getElementsByTagName("button");
var timer;
buttons[0].onclick = function() {
  var c=0;
  traversalList=[];
  preOrder(treeRoot);
  clearColor(traversalList);
  timer=setInterval(function() {
    changeColor(c++);
  },700);
}
buttons[1].onclick = function() {
  var c=0;
  traversalList=[];
  postOrder(treeRoot);
  clearColor(traversalList);
  timer=setInterval(function() {
    changeColor(c++);
  },700);
}
//以上完成遍历

function getValue(node) {
  var a=node.innerText;
  var b=a.split("\n")[0];
  return b;
}
var counter=0;
function compareValue(a,v) {
  if(a && traversalList[a-1].style.backgroundColor!="red") {
    traversalList[a-1].style.backgroundColor="white";
  }
  if(a==traversalList.length) {
    if (!counter) {
      alert("没有符合的结果！");
    }
    clearInterval(timer); return;
  }
  if(getValue(traversalList[a])==v) {
    traversalList[a].style.backgroundColor="red"; counter++;
  }
  else {
    traversalList[a].style.backgroundColor="green";
  }
}

buttons[2].onclick = function() {
  var c=0;
  counter=0;
  var v=document.getElementById("inputContent");
  traversalList=[];
  preOrder(treeRoot);
  clearColor(traversalList);
  timer=setInterval(function() {
    compareValue(c++,v.value);
  },700);
}
