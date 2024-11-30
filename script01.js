var selectedRow = null

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

if(document.getElementById("food1") = "chicken breast") {
    const food1 = 25;
} else if(document.getElementById("food1") = "tuna in can") {
    const food1 = 21;
}


if(document.getElementById("food2") = "rice") {
    const food1 = 5;
} else if(document.getElementById("food1") = "half rice") {
    const food1 = 2.5;
}


function readFormData() {
    var formData = {};
    formData["meal"] = document.getElementById("meal").value;
    formData["date"] = document.getElementById("date").value;
    formData["food1"] = document.getElementById("food-1").value;
    formData["food2"] = document.getElementById("food-2").value;
    formData["food3"] = document.getElementById("food-3").value;
    formData["drinks"] = document.getElementById("drinks").value;
    // document.getElementById("prtein").value = 5;
    formData.totalProtein = food1 + food2;
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
}

function resetForm() {
    document.getElementById("meal").value = "";
    document.getElementById("date").value = "";
    document.getElementById("food-1").value = "";
    document.getElementById("food-2").value = "";
    document.getElementById("food-3").value = "";
    document.getElementById("drinks").value = "";
    document.getElementById("protein").value = "";
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
    document.getElementById("protein").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.meal;
    selectedRow.cells[1].innerHTML = formData.date;
    selectedRow.cells[2].innerHTML = formData.food1;
    selectedRow.cells[3].innerHTML = formData.food2;
    selectedRow.cells[4].innerHTML = formData.food3;
    selectedRow.cells[5].innerHTML = formData.drinks;
    selectedRow.cells[6].innerHTML = formData.protein;
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