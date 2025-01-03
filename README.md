<tbody id="dietTracker" class="dietTracker"> <---------------------------for HTML class

document.addEventListener("DOMContentLoaded", loadData);   <-------------call this to load the data from local storage

function onFormSubmit() {  
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
    saveData();  <---------------------------------------------------------call this to save to locate storage
}

function saveData() {  <---------------------------------------------------function for saving the data to local storage
    localStorage.setItem("dietDat", dietTracker.innerHTML);
}

function loadData() {  <---------------------------------------------------function for loading the data to tbody HTML
    dietTracker.innerHTML = localStorage.getItem("dietDat");
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
        saveData(); <------------------------------------------------------call this to save the data on local storage after deleting to delete the data on local storage
    }
}
