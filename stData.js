let list = JSON.parse(localStorage.getItem("students")) || [];
showAll();
function stAdd(){
  let name = document.getElementById("stName").value;
  let marks = document.getElementById("stMarks").value;
  if (name ==="" ||marks ===""){alert("Please fill all data ");
    return;}
  list.push({"name" : name , "marks":marks})
  alert("Student data saved successfully  !!!");
  localStorage.setItem("students",JSON.stringify(list));
  showAll();
}
function srRes(){
  let searchName = document.getElementById("search").value;
  if (searchName === ""){
    alert("Please enter student name !!!")
    return
  }
  let name = document.getElementById("stName").value;
  let marks = document.getElementById("stMarks").value;
  let result = "Student not found ";
  for (let i=0;i<list.length;i++){
    if (list[i].name.toLowerCase()=== searchName.toLowerCase()){
      result = `Found : Name = ${list[i].name} \n Marks = ${list[i].marks}`;
      break
    }
    showAll();
  }
  document.getElementById("searchShow").innerText=result;
}
function showAll(){
  let box = document.getElementById("showData");
  box.innerHTML= "";
  for (let i =0;i<list.length;i++){
    let p = document.createElement("p");
    p.innerText = `Name : ${list[i].name} \n Marks : ${list[i].marks}`
    let btn = document.createElement("button");
    btn.innerText = "DELETE";
    btn.onclick = function(){
      list.splice(i,1)
      localStorage.setItem("students",JSON.stringify(list))
      showAll();
    }
    box.appendChild(p)
    box.appendChild(btn)
  }
}
function changeTheme(){
  document.body.classList.toggle("dark");
}