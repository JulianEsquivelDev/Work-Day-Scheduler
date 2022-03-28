// todays date displayed at the top of the project using jquery and moment.js
var todaysDate = moment(new Date()).format("MM/DD/YYYY");
$("#todaysDate").text(todaysDate);
// function to identify time with colors
function timeBlockHour() {
    var hour = moment().hours();
    // using the given css to have the time slots change color
    $(".time-block").each(function() {
        var timeSlot = parseInt($(this).attr("id"));
        // add present,future, and past to the if else statements from the CSS given.
        if (timeSlot > hour) {
            $(this).addClass("future");
        } else if (timeSlot === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
// call the function to be executed
timeBlockHour();
// Identify variable for the class saveBtn
var saveBtn = $(".saveBtn");
// save users input value when they click the save icon next to the task
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var task = $(this).siblings(".todo").val();

    localStorage.setItem(time, task);
});
// use localStorage to save the users task
function saveTask() {
    $(".hour").each(function() {
        var timeSlot = $(this).text();
        var currentTask = localStorage.getItem(timeSlot);

        if(currentTask !== null) {
            $(this).siblings(".todo").val(currentTask);
        }
    })
};
// call the function so it can be executed 
saveTask();