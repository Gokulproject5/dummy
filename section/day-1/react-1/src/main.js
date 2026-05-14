import './style.css'

const elementArr = ["HTML","CSS","JAVASCRIPT","REACT"]

const renderDiv = document.querySelector("#app");

const divEl = document.createElement("div");
divEl.className = "bg-white p-5 space-x-3 space-y-13 rounded mx-auto "

const headingEl = document.createElement("h1");
headingEl.textContent = `Learning React !`
headingEl.className ="text-5xl text-center "

const commentEl = document.createComment("My tech skills");

const ulEl = document.createElement("ul");
ulEl.className = "flex items-center justify-center gap-5 mt-5";

elementArr.map((item)=>{
  const liEl = document.createElement("li");
  liEl.textContent = `${item}`
  switch (liEl.textContent) {
    case "HTML":
      liEl.className = "bg-blue-600 rounded px-2 py-1 text-white"
      break;
    case "CSS":
       liEl.className = "bg-red-600 rounded px-2 py-1 text-white"
      break;
    case "JAVASCRIPT":
       liEl.className = "bg-yellow-600 rounded px-2 py-1 text-white"
      break;
    case "REACT":
       liEl.className = "bg-green-600 rounded px-2 py-1 text-white"
      break;
    
   
  } 

  ulEl.append(liEl)
})

divEl.append(headingEl , ulEl);
renderDiv.append(divEl);