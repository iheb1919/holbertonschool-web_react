var $ = require( "jquery" );
const _ = require('lodash');
$(function() {
	$('body').append('<p>Holberton Dashboard</p>');
	$('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="#btn">Click here to get started</button>');
    $('body').append("<p id='count'></p>");
	$('body').append('<p>Copyright - Holberton School</p>');
    $('button').on('click', _.debounce(updateCounter));

let count = 0;
function updateCounter(){
    count += 1;
	$('#count').html(`${count} clicks on the button`);
};
});
