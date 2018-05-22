const article = document.querySelector("#main");
let missionStatementDiv = document.createElement("h2"); 
let missionStatementContent = document.createTextNode("FUCK YOU FOR BEING POOR");
missionStatementDiv.appendChild(missionStatementContent);
article.appendChild(missionStatementDiv);


const congressionalDistAttr = document.createAttribute("congressional-district");
congressionalDistAttr.value = "5";
article.setAttribute(congressionalDistAttr);