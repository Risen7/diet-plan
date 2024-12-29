@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
    background-image: linear-gradient(to bottom right, rgb(9, 122, 252), rgb(255, 40, 244));
    font-family: 'Poppins', sans-serif;
    width: 100wv;
    height: 97.8vh;
    /* height: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
}

body > table{
    width: 90%;
}

tbody {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

table.list tbody {
    box-shadow: none;
}

tbody tr {
    background: white;
    /* border: 3px solid gray; */
}

table{
    border-collapse: collapse;
}
table.list{
    width:100%;
}

td h1 {
    padding-block: 10px;
    text-wrap: nowrap;
    background: rgb(236, 236, 236);
    font-weight: 600;
    letter-spacing: -1px;
    color: rgb(36, 147, 238);
    transition: all 0.4s;
}

td h1:hover {
    background: linear-gradient(45deg, royalblue, pink);
    color: #000;
}

td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;  
    margin-inline: 0px ; 
}

td.form-1 {
    padding-inline: 35px;
}

td.form-2 {
    border:none;
    padding: 0;
    margin-right: 0;
}

td.form-1 form div {
    text-align: left;
    margin-bottom: 10px;
}

form div label {
    color: rgb(61, 61, 61);
}

tr:nth-child(even),table.list thead>tr {
    background-color: rgb(236, 236, 236);
    color: rgb(0, 0, 0);
}

/* thead tr {
    background-color: #000;
} */

/* tr {
    background-color: black;
} */

td.form-1 {
    background-color: rgb(255, 255, 255);
    letter-spacing: 1px;
}

input[type=text], input[type=number], input[type=date] {
    width: 100%;
    padding: 1em;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit]{
    width: 30%;
    background-color: #ddd;
    color: #000;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: none;
}

input[type=submit]:hover {
    background: linear-gradient(45deg, royalblue, pink);
}

form div.form-action-buttons{
    text-align: right;
}

a{
    background: rgb(36, 147, 238);
    font-size: 0.8rem;
    font-weight: 600;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
    margin-right: 4px;
    border-radius: 5px;
}

a:hover {
    background-color: #000000;
    color: rgb(36, 147, 238);
}

label.validation-error{
    color:   red;
    margin-left: 5px;
}

td:nth-child(2) {
    display: flex;
}

.hide{
    display:none;
}

form div label, thead tr th{
    font-size: 1rem;
    text-transform: capitalize;
}

form div input {
    font-size: 1rem;
    text-transform: none;
    transition: all .4s;
}

form div input[type=text]:hover,form div input[type=number]:hover,form div input[type=date]:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

table.list thead tr {
    background-color: #000;
    color: white;
}

thead tr th {
    font-weight: 400;
}

thead tr th:hover {
    background: linear-gradient(45deg, royalblue, pink);
}

div.form-action-buttons input {
    background: rgb(0, 0, 0);
    color: white;
    font-size: 1.2rem;
}

@media screen and (max-width: 1098px) {
    td.form-1 {
        padding-inline: 20px;
    }
  }

/* ---------------------------------------------------------DROPDOWN SECTION---------------------------------------------------------------------- */

.dropdown {
    min-width: 15em;
    position: relative;
    /* margin: 2em; */
}

.dropdown * {
    box-sizing: border-box;
}

.select {
    background: #ffffff;
    color: #0c0c0c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px #ccc solid;
    border-radius: 0.25em;
    padding: 1em;
    cursor: pointer;
    transition: background 0.3s;
}

.selected-clicked {
    border: 2px #26489a solid;
    box-shadow: 0 0 0.8em #26489a;
}

.select:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

.caret {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #fff;
    transition: 0.3s;
}

.caret-rotate {
    transform: rotate(180deg);
}

.menu {
    list-style: none;
    padding: 0.2em 0.5em;
    background: #ffffff;
    border: 1px #ccc solid;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
    border-radius: 0.25em;
    color: #0c0c0c;
    position: absolute;
    top: 3em;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    opacity: 0;
    display: none;
    transition: 0.2s;
    z-index: 1;
}

.menu li {
    padding: 0.7em 0.5em;
    margin: 0.3em 0;
    border-radius: 0.25em;
    cursor: pointer;
}

.menu li:hover {
    background: #4f7de7;
}

.active {
    background: #4f7de7;
}

.menu-open {
    display: block;
    opacity: 1;
}

td.form-1 form div.caret {
    margin-bottom: 0px;
}
