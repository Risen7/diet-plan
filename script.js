var selectedRow = null
// var fud1 = document.getElementById("food-1").value;
// var fud2 = document.getElementById("food-2").value;
var food1 = 0;
var food2 = 0;
var food3 = 0;
var drinks = 0;
var totalProtein = 0;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }

}


//   if (document.getElementById("food-2") == "rice") {
//     food2 = 21;
//   } else if(document.getElementById("food-1") == "tofu") {
//     food2 = 26
//   }

// if(fud1 = "chicken breast") {
//     food1 = 25;
// } else if(fud1 = "pork") {
//     food2 = 27;
// }



// totalz = food1 + food2;




function readFormData() {
    var formData = {};
    formData["meal"] = document.getElementById("meal").value;
    formData["date"] = document.getElementById("date").value;
    formData["food1"] = document.getElementById("food-1").value;
    formData["food2"] = document.getElementById("food-2").value;
    formData["food3"] = document.getElementById("food-3").value;
    formData["drinks"] = document.getElementById("drinks").value;

    //-------------------------------------------------------------------
    var fud1 = document.getElementById("food-1").value;
    var fud2 = document.getElementById("food-2").value;
    var fud3 = document.getElementById("food-3").value;
    var bev = document.getElementById("drinks").value;

    if(fud1 == "chicken breast"){
        food1 = 28;
    } else if(fud1 == "century tuna") {
        food1 = 22;
    } else if(fud1 == "beef dish") {
        food1 = 27;
    } else if(fud1 == "fried chicken") {
        food1 = 23;
    } else if(fud1 == "monggo") {
        food1 = 25;
    } else if(fud1 == "pork dish") {
        food1 = 25;
    } else if(fud1 == "fish dish") {
        food1 = 28;
    } else if(fud1 == "spanish style") {
        food1 = 24;
    } else if(fud1 == "sardines") {
        food1 = 24;
    } else {
        food1 = 0;
    }

    if(fud2 == "one rice"){
        food2 = 5;
    } else if(fud2 == "half rice") {
        food2 = 2.5;
    } else if(fud2 == "one & half rice") {
        food2 = 7.5;
    } else if(fud2 == "bread") {
        food2 = 3;
    } else {
        food2 = 0;
    }

    if(fud3 == "tofu"){
        food3 = 15;
    } else if(fud3 == "egg pie") {
        food3 = 6;
    } else if(fud3 == "bread") {
        food3 = 3;
    } else if(fud3 == "egg") {
        food3 = 6;
    } else if(fud3 == "taho") {
        food3 = 15;
    } else if(fud3 == "peanuts") {
        food3 = 10;
    } else {
        food3 = 0;
    }

    if(bev == "water"){
        drinks = 0;
    } else if(bev == "softdrinks") {
        drinks = 0;
    } else if(bev == "milk") {
        drinks = 5;
    } else if(bev == "vitamilk") {
        drinks = 8;
    } else if(bev == "soy secretz") {
        drinks = 7;
    } else if(bev == "yakult") {
        drinks = 0.9;
    } else if(bev == "juice") {
        drinks = 0.2;
    } else if(bev == "protein shake") {
        drinks = 30;
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
    cell3.innerHTML = data.food1;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.food2;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.food3;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.drinks;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.totalProtein;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

  
    console.log(totalProtein);
}

function resetForm() {
    document.getElementById("meal").value = "";
    document.getElementById("date").value = "";
    document.getElementById("food-1").value = "";
    document.getElementById("food-2").value = "";
    document.getElementById("food-3").value = "";
    document.getElementById("drinks").value = "";
    // document.getElementById("protein").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("meal").value = selectedRow.cells[0].innerHTML;
    document.getElementById("date").value = selectedRow.cells[1].innerHTML;
    document.getElementById("food-1").value = selectedRow.cells[2].innerHTML;
    document.getElementById("food-2").value = selectedRow.cells[3].innerHTML;
    document.getElementById("food-3").value = selectedRow.cells[4].innerHTML;
    document.getElementById("drinks").value = selectedRow.cells[5].innerHTML;
    // document.getElementById("protein").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.meal;
    selectedRow.cells[1].innerHTML = formData.date;
    selectedRow.cells[2].innerHTML = formData.food1;
    selectedRow.cells[3].innerHTML = formData.food2;
    selectedRow.cells[4].innerHTML = formData.food3;
    selectedRow.cells[5].innerHTML = formData.drinks;
    // selectedRow.cells[6].innerHTML = formData.protein;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
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
