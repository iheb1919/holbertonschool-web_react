var std1 = {
    firstName: "iheb",
    lastName: "mejri",
    age: 26,
    location: "tunisia"
};
var std2 = {
    firstName: "iheb",
    lastName: "mejri",
    age: 26,
    location: "tunisia"
};
var tab = [std1, std2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var th1 = document.createElement('td');
var th2 = document.createElement('td');
th1.innerHTML = 'firstName';
th2.innerHTML = 'location';
body.append(table);
table.append(thead);
table.append(tbody);
thead.append(tr);
tr.append(th1);
tr.append(th2);
tab.forEach(function (element) {
    var trTb = document.createElement('tr');
    tbody.append(trTb);
    var td = document.createElement('td');
    td.innerHTML = element.firstName;
    trTb.append(td);
    td = document.createElement('td');
    td.innerHTML = element.location;
    trTb.append(td);
});
