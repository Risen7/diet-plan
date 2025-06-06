// https://www.youtube.com/watch?v=hBbrGFCszU4 - drop down menu
// Diet Tracker JS v1.92
document.addEventListener("DOMContentLoaded", loadData);
document.getElementById("totals").addEventListener("change", totalChange);
document.getElementById("today").addEventListener("change", dateToday);
var selectedRow = null
var selectedRows = null
var food1Prot = 0;
var food1Cal = 0;
var food2Prot = 0;
var food2Cal = 0;
var food3Prot = 0;
var food3Cal = 0;
var drinksProt = 0;
var drinksCal = 0;  
var totalProtein = 0;
var totalCalories = 0;
let dietTracker = document.getElementById("dietTracker");
var dietList = document.getElementById("dietList");
var dietForm2 = document.getElementById("form-2");
const dNow = new Date ();


function onFormSubmit() {
    let text = "Submit record?";
    if (confirm(text) == true) {
        if (validate()) {
            alert("You submitted the Record");
            var formData = readFormData();
            if (selectedRow == null) {
                insertNewRecord(formData);
                
            }else{
                updateRecord(formData);
                
            
            }
            resetForm();
            totalChange();
        };
    
        saveData();
    } else {
        alert("You Cancelled");
    }

}

function saveData() {
    localStorage.setItem("dietDat", dietTracker.innerHTML);
}

function loadData() {
    dietTracker.innerHTML = localStorage.getItem("dietDat");
    dietList.innerHTML = localStorage.getItem("saveHistory");
    totalChange();
}

function readFormData() {
    var formData = {};
    formData["meal"] = document.getElementById("meal").value;
    formData["date"] = document.getElementById("date").value;
    formData["food1"] = document.getElementById("main1").value;
    formData["food2"] = document.getElementById("side1").value;
    formData["food3"] = document.getElementById("desert1").value;
    formData["drinks"] = document.getElementById("drinks1").value;

    //-------------------------------------------------------------------
    var main1 = document.getElementById("main1").value;
    var side1 = document.getElementById("side1").value;
    var desert1 = document.getElementById("desert1").value;
    var drinks1 = document.getElementById("drinks1").value;

    //----------------------------------------SWITCH MAIN DISH-----------------------------------------

    switch (main1) {
        case "Chicken Dish":
            food1Prot = 28;
            food1Cal = 165;
            break;
        case "Century Tuna":
            food1Prot = 21;
            food1Cal = 300;
            break;
        case "Beef Dish":
            food1Prot = 27;
            food1Cal = 250;
            break;
        case "Fried Chicken":
            food1Prot = 23;
            food1Cal = 246;
            break;
        case "Monggo":
            food1Prot = 24;
            food1Cal = 347;
            break;
        case "Pork Dish":
            food1Prot = 25;
            food1Cal = 242;
            break;
        case "Fish Dish":
            food1Prot = 28;
            food1Cal = 132;
            break;
        case "Spanish Style":
            food1Prot = 21;
            food1Cal = 350;
            break;
        case "Sardines":
            food1Prot = 21;
            food1Cal = 125;
            break;
        case "Egg Dish":
            food1Prot = 6;
            food1Cal = 78;
            break;
        case "Champorado":
            food1Prot = 10;
            food1Cal = 113;
            break;
        case  "None":
            food1Prot = 0;
            food1Cal = 0;
    }

     //----------------------------------------SWITCH SIDE DISH-----------------------------------------

    switch (side1) {
        case "1 Rice":
            food2Prot = 5;
            food2Cal = 206;
            break;
        case "1 and 1/2 Rice":
            food2Prot = 7.5;
            food2Cal = 309;
            break;
        case "1/2 Rice":
            food2Prot = 2.5;
            food2Cal = 103;
            break;
        case "Tofu":
            food2Prot = 15;
            food2Cal = 76;
            break;
        case "Egg":
            food2Prot = 6;
            food2Cal = 70;
            break;
        case "Bread":
            food2Prot = 9;
            food2Cal = 265;
            break;
        case "Oat Meal":
            food2Prot = 11.1;
            food2Cal = 68;
            break;
        case  "None":
            food2Prot = 0;
            food2Cal = 0;
    }

    //-----------------------------------------------SWITCH DESERT-----------------------------------------

    switch (desert1) {
        case "Egg":
            food3Prot = 6;
            food3Cal = 70;
            break;
        case "Egg Pie":
            food3Prot = 5.8;
            food3Cal = 220;
            break;
        case "Biscuit":
            food3Prot = 7;
            food3Cal = 353;
            break;
        case "Tofu":
            food3Prot = 15;
            food3Cal = 76;
            break;
        case "Taho":
            food3Prot = 15;
            food3Cal = 150;
            break;
        case "Bread":
            food3Prot = 9;
            food3Cal = 265;
            break;
        case "Chocolate":
            food3Prot = 4.9;
            food3Cal = 535;
            break;
        case "Hopia 2pcs":
            food3Prot = 6;
            food3Cal = 270;
            break;
        case "Ice Cream":
            food3Prot = 3.5;
            food3Cal = 207;
            break;
        case  "None":
            food3Prot = 0;
            food3Cal = 0;
    }

    //----------------------------------------SWITCH DRINKS--------------------------------------------

    switch (drinks1) {
        case "Milk":
            drinksProt = 5;
            drinksCal = 100;
            break;
        case "Water":
            drinksProt = 0;
            drinksCal = 0;
            break;
        case "Vitamilk":
            drinksProt = 8;
            drinksCal = 270;
            break;
        case "Yakult":
            drinksProt = 1;
            drinksCal = 60;
            break;
        case "Softdrinks":
            drinksProt = 0;
            drinksCal = 139;
            break;
        case "Soy Secretz":
            drinksProt = 7;
            drinksCal = 182;
            break;
        case "Gatorade":
            drinksProt = 0;
            drinksCal = 140;
            break;
        case "Whey Protein":
            drinksProt = 35;
            drinksCal = 120;
            break;
        case  "None":
            drinksProt = 0;
            drinksCal = 0;
    }

    //--------------------------------------------------------------------

    formData.totalProtein = food1Prot + food2Prot + food3Prot + drinksProt;
    formData.totalCalories = food1Cal + food2Cal + food3Cal + drinksCal;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    let today = document.getElementById("today");
    const yyyy = dNow.getFullYear();
    let mm = dNow.getMonth() + 1;
    let dd = dNow.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const dateFormat = yyyy + '-' + mm + '-' + dd;

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.meal;
    cell2 = newRow.insertCell(1);
    if(today.checked == true) {
        cell2.innerHTML = `<div class="dataDat">${dateFormat}</div>`;
        console.log("date ngayon");
    } else {
        cell2.innerHTML = `<div class="dataDat">${data.date}</div>`;
        console.log("date na napili");
    }
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `${data.food1}<span class="tool tipOne">Protein-${food1Prot}<br>Calories-${food1Cal}</span>`;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `${data.food2}<span class="tool tipTwo">Protein-${food2Prot}<br>Calories-${food2Cal}</span>`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `${data.food3}<span class="tool tipThree">Protein-${food3Prot}<br>Calories-${food3Cal}</span>`;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `${data.drinks}<span class="tool tipFour">Protein-${drinksProt}<br>Calories-${drinksCal}</span>`;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<span class="protein">${data.totalProtein}</span>
    <span class="calories">${data.totalCalories}</span>`;
    cell7 = newRow.insertCell(7);   
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>
                       <input type="checkbox" name="day" class="day">`;

    // cell8 = newRow.insertCell(8);
    // cell8.innerHTML = `<span>Protein${food1Prot} Calories${food1Cal}</span>`;
                       
    // console.log(data.food1 + "--protein" + "-->" + food1Prot);
    // console.log(data.food1 + "--calories" + "-->" + food1Cal);  
    // console.log(data.food2 + "--protein" + "-->" + food2Prot);
    // console.log(data.food2 + "--protein" + "-->" + food2Cal);
    // console.log(data.food3 + "--protein" + "-->" + food3Prot);
    // console.log(data.food3 + "--calories" + "-->" + food3Cal);
    // console.log(data.drinks + "--protein" + "-->" + drinksProt);
    // console.log(data.drinks + "--calories" + "-->" + drinksCal);
}

function resetForm() {
    document.getElementById("meal").value = "";
    document.getElementById("date").value = "";
    document.getElementById("main1").value = "";
    document.getElementById("side1").value = "";
    document.getElementById("desert1").value = "";
    document.getElementById("drinks1").value = "";
    document.getElementById("today").checked = false;   
    // document.getElementById("protein").value = "";
    selectedRow = null;
}

function onEdit(td) {
    // selectedRows = td.parentElement.parentElement;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("meal").value = selectedRow.cells[0].innerHTML;
    document.getElementById("date").value = selectedRow.cells[1].innerHTML;
    document.getElementById("main1").value = selectedRow.cells[2].innerHTML;
    document.getElementById("side1").value = selectedRow.cells[3].innerHTML;
    document.getElementById("desert1").value = selectedRow.cells[4].innerHTML;
    document.getElementById("drinks1").value = selectedRow.cells[5].innerHTML;
        console.log(selectedRow.cells[0].innerHTML);
        console.log(selectedRow.cells[1].innerHTML);
        console.log(selectedRow.cells[2].innerHTML);
        console.log(selectedRow.cells[3].innerHTML);    
        console.log(selectedRow.cells[4].innerHTML);
        console.log(selectedRow.cells[5].innerHTML);
    // document.getElementById("protein").value = selectedRow.cells[6].innerHTML;
}

// function updateRecord(formData) {
//     selectedRows.cells[0].innerHTML = formData.meal;
//     selectedRows.cells[1].innerHTML = formData.date;
//     selectedRow.cells[2].innerHTML = `${food1} <span class="protein">${formData.food1}</span>`;
//     selectedRow.cells[3].innerHTML = `${food2} <span class="protein">${formData.food2}</span>`;
//     selectedRow.cells[4].innerHTML = `${food3} <span class="protein">${formData.food3}</span>`;
//     selectedRow.cells[5].innerHTML = `${drinks} <span class="protein">${formData.drinks}</span>`;
//     selectedRow.cells[6].innerHTML = `<span class="protein">${formData.totalProtein}</span>`;
// }

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.meal;
    selectedRow.cells[1].innerHTML = formData.date;
    selectedRow.cells[2].innerHTML = formData.food1;
    selectedRow.cells[3].innerHTML = formData.food2;
    selectedRow.cells[4].innerHTML = formData.food3;
    selectedRow.cells[5].innerHTML = formData.drinks
    selectedRow.cells[6].innerHTML = `<span class="protein">${formData.totalProtein}</span>
    <span class="calories">${formData.totalCalories}</span>`;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
        saveData();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("meal").value == "") {
        isValid = false;
        document.getElementById("mealValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("mealValidationError").classList.contains("hide"))
            document.getElementById("mealValidationError").classList.add("hide");
    }
    return isValid;
}

function totalChange() {
    let totals = document.getElementById("totals");
    if(totals.value == "Total Protein") {
        var protein = document.getElementsByClassName("protein");
        var calories = document.getElementsByClassName("calories");
        for (var i=0;i<protein.length;i+=1){
            protein[i].style.display = "block";
            calories[i].style.display = "none";
        }
    } else if(totals.value == "Total Calories") {
        var protein = document.getElementsByClassName("protein");
        var calories = document.getElementsByClassName("calories");
        for (var i=0;i<protein.length;i+=1){
            protein[i].style.display = "none";
            calories[i].style.display = "block";
        }
    }
}

function dateToday() {
    let today = document.getElementById("today");
    let selectDate = document.getElementById("date");
    const yyyy = dNow.getFullYear();
    let mm = dNow.getMonth() + 1;
    let dd = dNow.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const dateFormat = yyyy + '-' + mm + '-' + dd;
    if(today.checked == true) {
        // selectDate.disabled = true;
        selectDate.value = dateFormat;
    } else {
        // selectDate.disabled = false;
    }
    console.log(dNow);
}

function clearChk() {
    var checkCell = document.getElementsByClassName("day");
    for (var i=0;i<checkCell.length;i+=1){
        checkCell[i].checked = false;
    }
}

function addTotal() {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var overallProtein = 0;
    var overallCalories = 0;
    var protein = document.getElementsByClassName("protein");
    var calories = document.getElementsByClassName("calories");
    var checkCell = document.getElementsByClassName("day");
    let today = document.getElementById("today");
    const yyyy = dNow.getFullYear();
    let mm = dNow.getMonth() + 1;
    let dd = dNow.getDate();
    var dataDat = document.getElementsByClassName("dataDat");
    var dateEncode;
    let checkCellCount = 0;

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const dateFormat = yyyy + '-' + mm + '-' + dd;
    for (var i=0;i<protein.length;i+=1){
        
        // overallProtein += parseInt(protein[i].innerHTML) 
        if(checkCell[i].checked == true) {
            // console.log("checked");
            overallProtein += parseInt(protein[i].innerHTML) 
            overallCalories += parseInt(calories[i].innerHTML) 
            dateEncode = dataDat[i].textContent;
            checkCell[i].style.display = "none";
        } else {
            // console.log("not checked");
            dateEncode = null;
        }
        console.log(`${dateEncode}`);
    }
    console.log("Protein -" + overallProtein);
    console.log("Calories -" + overallCalories);
    // cell8 = newRow.insertCell(0);    //-------------------------------\ Working
    // cell8.innerHTML = `${dateFormat} to ${dateFormat}`; //------------/
    cell8 = newRow.insertCell(0);   
    cell8.innerHTML = "";
    cell8.style.background = "black";
    cell8.style.border = "black";
    cell9 = newRow.insertCell(1);  
    cell9.innerHTML = "";
    cell9.style.background = "black";
    cell10 = newRow.insertCell(2);   
    cell10.innerHTML = "";
    cell10.style.background = "black ";
    cell11 = newRow.insertCell(3);   
    cell11.innerHTML = "";
    cell11.style.background = "black";
    cell12 = newRow.insertCell(4);   
    cell12.innerHTML = "DATE";
    cell12.style.background = "black";
    cell12.style.color = "white";
    cell13 = newRow.insertCell(5);   
    cell13.innerHTML = `${dateFormat}`;
    cell13.style.background = "black";
    cell13.style.color = "white";
    cell14 = newRow.insertCell(6);   
    cell14.innerHTML = `DAILY<br>Total Protein - ${overallProtein}<br>
    Total Calories - ${overallCalories}`;
    cell14.style.background = "black";
    cell14.style.color = "white";
    cell14.style.lineHeight = "1.5";
    cell15 = newRow.insertCell(7);   
    cell15.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
    cell15.style.background = "black";
    cell15.style.color = "white";
    clearChk();
    saveData();
}
saveAll();
function saveAll() {
    var saveList = document.getElementById("employeeList");
    localStorage.setItem("saveRecord", saveList.innerHTML);
};

function saveHist() {
    localStorage.setItem("saveHistory", dietList.innerHTML);
}


function addToHistory() {
    let text = "It will clear the transaction data and move to history. Are you sure you want to save?"
    var saveList = document.getElementById("employeeList");
    const dietDiet = localStorage.getItem("saveRecord");
    const yyyy = dNow.getFullYear();
    let mm = dNow.getMonth() + 1;
    let dd = dNow.getDate();
    var dataDat = document.getElementsByClassName("dataDat");

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const dateFormat = yyyy + '-' + mm + '-' + dd;

    if(confirm(text) == true) {
        const li = document.createElement('history'); 
        const titleIn = document.createElement('h1'); 
        let dietBG = document.getElementById("dietHistory");
        li.appendChild(titleIn);
        li.innerHTML = `<div id="titleDiv">
        <div id="btnSpanX"><h1>${dateFormat}</h1><div id="btnXX"><p>x</p><span id="drop"></div></div></span>
        </div>${dietForm2.innerHTML}`;
        dietList.appendChild(li);
        // dietBG.style.background = "white";
        dietTracker.innerHTML = "";
        saveData();
        saveAll();
        saveHist();
        alert("Data moved to History");
    } else {
        alert("Data not moved.");
    }
}

dietList.addEventListener("click", function(e) {
    if(e.target.tagName === "SPAN") {
        e.target.parentElement.parentElement.parentElement.parentElement.children[1].classList.toggle("active");
    } else if (e.target.tagName === "P") {
        let text = prompt('This will delete your record! Type "CONFIRM"');
        if(text == "CONFIRM") {
        alert("Delete Sucessful");
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
        } else {
            alert("Not Deleted");
        }    
    }
    saveAll();
    saveHist();
})
