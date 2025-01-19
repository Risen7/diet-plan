// https://www.youtube.com/watch?v=hBbrGFCszU4 - drop down menu
document.addEventListener("DOMContentLoaded", loadData);
var selectedRow = null
var food1 = 0;
var food2 = 0;
var food3 = 0;
var drinks = 0;
var totalProtein = 0;
let dietTracker = document.getElementById("dietTracker");


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
    saveData();
}

function saveData() {
    localStorage.setItem("dietDat", dietTracker.innerHTML);
}

function loadData() {
    dietTracker.innerHTML = localStorage.getItem("dietDat");
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

    //----------------------------------------MAIN DISH-----------------------------------------

    if(main1 == "Chicken Dish"){
        food1 = 28;
    } else if(main1 == "Century Tuna") {
        food1 = 21;
    } else if(main1 == "Beef Dish") {
        food1 = 27;
    } else if(main1 == "Fried Chicken") {
        food1 = 23;
    } else if(main1 == "Monggo") {
        food1 = 24;
    } else if(main1 == "Pork Dish") {
        food1 = 25;
    } else if(main1 == "Fish Dish") {
        food1 = 28;
    } else if(main1 == "Spanish Style") {
        food1 = 21;
    } else if(main1 == "Sardines") {
        food1 = 21;
    } else if(main1 == "Egg Dish") {
        food1 = 6;
    } else if(main1 == "Champorado") {
        food1 = 10;
    } else {
        food1 = 0;
    }

    //----------------------------------------SIDE DISH-----------------------------------------

    if(side1 == "1 Rice"){
        food2 = 5;
    } else if(side1 == "1 and 1/2 Rice") {
        food2 = 7.5;
    } else if(side1 == "1/2 Rice") {
        food2 = 2.5;
    } else if(side1 == "Tofu") {
        food2 = 15;
    } else if(side1 == "Egg") {
        food2 = 6;
    } else if(side1 == "Bread") {
        food2 = 9;
    } else if(side1 == "Oat Meal") {
        food2 = 11.1;
    } else {
        food2 = 0;
    }


    //----------------------------------------DESERT-----------------------------------------

    if(desert1 == "Egg"){
        food3 = 6;
    } else if(desert1 == "Egg Pie") {
        food3 = 5.8;
    } else if(desert1 == "Biscuit") {
        food3 = 7;
    } else if(desert1 == "Tofu") {
        food3 = 15;
    } else if(desert1 == "Taho") {
        food3 = 15;
    } else if(desert1 == "Bread") {
        food3 = 9;
    } else if(desert1 == "Chocolate") {
        food3 = 4.9;
    } else if(desert1 == "Hopia 2pcs") {
        food3 = 6;
    } else if(desert1 == "Ice Cream") {
        food3 = 3.5;
    } else {
        food3 = 0;
    }


    //----------------------------------------DRINKS-----------------------------------------

    if(drinks1 == "Milk"){
        drinks = 5;
    } else if(drinks1 == "Water") {
        drinks = 0;
    } else if(drinks1 == "Vitamilk") {
        drinks = 8;
    } else if(drinks1 == "Yakult") {
        drinks = 1;
    } else if(drinks1 == "Softdrinks") {
        drinks = 0;
    } else if(drinks1 == "Soy Secretz") {
        drinks = 7;
    } else if(drinks1 == "Gatorade") {
        drinks = 0;
    } else if(drinks1 == "Whey Protein") {
        drinks = 35;
    } else {
        drinks = 0;
    }

    //--------------------------------------------------------------------

    formData.totalProtein = food1 + food2 + food3 + drinks;
    
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.meal;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.date;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `${data.food1} <span class="protein">${food1}</span>`;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `${data.food2} <span class="protein">${food2}</span>`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `${data.food3} <span class="protein">${food3}</span>`;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `${data.drinks} <span class="protein">${drinks}</span>`;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<span class="protein">${data.totalProtein}</span>`;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    console.log(data.food1 + "-" + food1);
    console.log(data.food2 + "-" + food2);
    console.log(data.food3 + "-" + food3);
    console.log(data.drinks + "-" + drinks);
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
    selectedRow = td.parentElement.parentElement;
    document.getElementById("meal").value = selectedRow.cells[0].innerHTML;
    document.getElementById("date").value = selectedRow.cells[1].innerHTML;
    document.getElementById("main1").value = selectedRow.cells[2].innerHTML;
    document.getElementById("side1").value = selectedRow.cells[3].innerHTML;
    document.getElementById("desert1").value = selectedRow.cells[4].innerHTML;
    document.getElementById("drinks1").value = selectedRow.cells[5].innerHTML;
    // document.getElementById("protein").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.meal;
    selectedRow.cells[1].innerHTML = formData.date;
    selectedRow.cells[2].innerHTML = `${formData.food1} <span class="protein">${food1}</span>`;
    selectedRow.cells[3].innerHTML = `${formData.food2} <span class="protein">${food2}</span>`;
    selectedRow.cells[4].innerHTML = `${formData.food3} <span class="protein">${food3}</span>`;
    selectedRow.cells[5].innerHTML = `${formData.drinks} <span class="protein">${drinks}</span>`;
    selectedRow.cells[6].innerHTML = `<span class="protein">${formData.totalProtein}</span>`;
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
