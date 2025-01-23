// https://www.youtube.com/watch?v=hBbrGFCszU4 - drop down menu
document.addEventListener("DOMContentLoaded", loadData);
document.getElementById("totals").addEventListener("change", totalChange);
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

function onFormSubmit() {
    if (validate()) {
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
}

function saveData() {
    localStorage.setItem("dietDat", dietTracker.innerHTML);
}

function loadData() {
    dietTracker.innerHTML = localStorage.getItem("dietDat");
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

    //----------------------------------------SIDE DISH-----------------------------------------

    // if(side1 == "1 Rice"){
    //     food2Prot = 5;
    //     food2Cal = 206;
    // } else if(side1 == "1 and 1/2 Rice") {
    //     food2Prot = 7.5;
    //     food2Cal = 309;
    // } else if(side1 == "1/2 Rice") {
    //     food2Prot = 2.5;
    //     food2Cal = 103;
    // } else if(side1 == "Tofu") {
    //     food2Prot = 15;
    //     food2Cal = 76;
    // } else if(side1 == "Egg") {
    //     food2Prot = 6;
    //     food2Cal = 70;
    // } else if(side1 == "Bread") {
    //     food2Prot = 9;
    //     food2Cal = 265;
    // } else if(side1 == "Oat Meal") {
    //     food2Prot = 11.1;
    //     food2Cal = 68;
    // } else {
    //     food2Prot = 0;
    //     food2Cal = 0;
    // }

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

    //----------------------------------------DESERT-----------------------------------------

    if(desert1 == "Egg"){
        food3Prot = 6;
        food3Cal = 70;
    } else if(desert1 == "Egg Pie") {
        food3Prot = 5.8;
        food3Cal = 220;
    } else if(desert1 == "Biscuit") {
        food3Prot = 7;
        food3Cal = 353;
    } else if(desert1 == "Tofu") {
        food3Prot = 15;
        food3Cal = 76;
    } else if(desert1 == "Taho") {
        food3Prot = 15;
        food3Cal = 150;
    } else if(desert1 == "Bread") {
        food3Prot = 9;
        food3Cal = 265;
    } else if(desert1 == "Chocolate") {
        food3Prot = 4.9;
        food3Cal = 535;
    } else if(desert1 == "Hopia 2pcs") {
        food3Prot = 6;
        food3Cal = 270;
    } else if(desert1 == "Ice Cream") {
        food3Prot = 3.5;
        food3Cal = 207;
    } else {
        food3Prot = 0;
        food3Cal = 0;
    }


    //----------------------------------------DRINKS-----------------------------------------

    if(drinks1 == "Milk"){
        drinksProt = 5;
        drinksCal = 100;
    } else if(drinks1 == "Water") {
        drinksProt = 0;
        drinksCal = 0;
    } else if(drinks1 == "Vitamilk") {
        drinksProt = 8;
        drinksCal = 270;
    } else if(drinks1 == "Yakult") {
        drinksProt = 1;
        drinksCal = 60;
    } else if(drinks1 == "Softdrinks") {
        drinksProt = 0;
        drinksCal = 139;
    } else if(drinks1 == "Soy Secretz") {
        drinksProt = 7;
        drinksCal = 182;
    } else if(drinks1 == "Gatorade") {
        drinksProt = 0;
        drinksCal = 140;
    } else if(drinks1 == "Whey Protein") {
        drinksProt = 35;
        drinksCal = 120;
    } else {
        drinksProt = 0;
        drinksCal = 0;
    }

    //--------------------------------------------------------------------

    formData.totalProtein = food1Prot + food2Prot + food3Prot + drinksProt;
    formData.totalCalories = food1Cal + food2Cal + food3Cal + drinksCal;
    
    return formData;
}

// function insertNewRecord(data) {
//     var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.meal;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.date;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = `${food1} <span class="protein">${data.food1}</span>`;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = `${food2} <span class="protein">${data.food2}</span>`;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = `${food3} <span class="protein">${data.food3}</span>`;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = `${drinks} <span class="protein">${data.drinks}</span>`;
//     cell7 = newRow.insertCell(6);
//     cell7.innerHTML = `<span class="protein">${data.totalProtein}</span>`;
//     cell7 = newRow.insertCell(7);
//     cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
//                        <a onClick="onDelete(this)">Delete</a>`;
//     console.log(data.food1 + "-" + food1);
//     console.log(data.food2 + "-" + food2);
//     console.log(data.food3 + "-" + food3);
//     console.log(data.drinks + "-" + drinks);
// }

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.meal;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.date;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.food1;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.food2;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.food3;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.drinks;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<span class="protein">${data.totalProtein}</span>
    <span class="calories">${data.totalCalories}</span>`;
    cell7 = newRow.insertCell(7);   
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    console.log(data.food1 + "--protein" + "-->" + food1Prot);
    console.log(data.food1 + "--calories" + "-->" + food1Cal);
    console.log(data.food2 + "--protein" + "-->" + food2Prot);
    console.log(data.food2 + "--protein" + "-->" + food2Cal);
    console.log(data.food3 + "--protein" + "-->" + food3Prot);
    console.log(data.food3 + "--calories" + "-->" + food3Cal);
    console.log(data.drinks + "--protein" + "-->" + drinksProt);
    console.log(data.drinks + "--calories" + "-->" + drinksCal);
}

function resetForm() {
    document.getElementById("meal").value = "";
    document.getElementById("date").value = "";
    document.getElementById("main1").value = "";
    document.getElementById("side1").value = "";
    document.getElementById("desert1").value = "";
    document.getElementById("drinks1").value = "";
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
        console.log("pasok protein")
        var protein = document.getElementsByClassName("protein");
        var calories = document.getElementsByClassName("calories");
        for (var i=0;i<protein.length;i+=1){
            protein[i].style.display = "block";
            calories[i].style.display = "none";
        }
    } else if(totals.value == "Total Calories") {
        console.log("pasok calories");
        var protein = document.getElementsByClassName("protein");
        var calories = document.getElementsByClassName("calories");
        for (var i=0;i<protein.length;i+=1){
            protein[i].style.display = "none";
            calories[i].style.display = "block";
        }
        console.log(protein.length);
    }
}
