// var marks = [
// //   +prompt("Enter phy marks")+
// //   +prompt("Enter pst marks")+
// //   +prompt("Enter comp marks")+
// //   +prompt("Enter isl marks")+
// //   +prompt("Enter maths marks")+
// //   +prompt("Enter urdu marks")
// // ];
// ]
var marks = [90,80,70,60,50]
var sumOfMarks = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] 
var totalMarks=550;
var maxMarks = 100
var result=  (sumOfMarks/totalMarks) * 100
result = result.toFixed(2)
var headings = ["Subject","Max marks","Obtained marks","Percentage","Grade"]
var subjects = ["Maths","Physic","Isl","Urdu","PST"]
console.log(result)
var studGrade;
function Grade(){

if(result>=80){
    studGrade = "A+"
}
else if(result>=70){
    studGrade = "A"
}
else if(result >=60){
    studGrade = "B"
}
else if(result>=50){
    studGrade = "C"

}
else if(result>=40){
    studGrade = "D"
}
else(studGrade = "fail")
return studGrade
}
var mainDiv = document.getElementById("first")
var table = document.createElement("table")
mainDiv.appendChild(table)


var tableRowth =document.createElement("tr")
table.appendChild(tableRowth)
for (let i = 0; i < 5; i++) {
    
    var tableHead=document.createElement("th")
    tableRowth.appendChild(tableHead)
    if(i===0){tableHead.innerText = headings[i]}
    if(i===1){tableHead.innerText = headings[i]}
    if(i===2){tableHead.innerText = headings[i]}
    if(i===3){tableHead.innerText = headings[i]}
    if(i===4){tableHead.innerText = headings[i]}

}


for (let i = 0; i < 5; i++) {
    
    var tableRow =document.createElement("tr")
    table.appendChild(tableRow)
    for (let j = 0; j < 5; j++) {
        
        var tableData =document.createElement("td")
        tableRow.appendChild(tableData)
        
        if(j===0){tableData.innerText = subjects[i]}
        if(j===1){tableData.innerText = maxMarks}
        if(j===2){tableData.innerText = marks[i]}
        if(j===3){tableData.innerText = "-"}
        if(j===4){tableData.innerText = "-"}
        
    }
        
}
var tabRowLast = document.createElement("tr")
table.appendChild(tabRowLast)
for (let i = 0; i < 5; i++) {
   var tabDataLast = document.createElement("td")
   tabRowLast.appendChild(tabDataLast)
   if(i===2){tabDataLast.innerText = sumOfMarks}
   if(i===3){tabDataLast.innerText = result}
   if(i===4){tabDataLast.innerText = Grade()}
}