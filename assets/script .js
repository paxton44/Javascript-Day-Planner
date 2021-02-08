//Tests

//checking if Js file linked to html
console.log("hello");
//moment is the time relative to me (GMT) and making sure clock works 
var m = moment();
//logging the date and time to the console 
console.log(m.toString());
//display date and times using tokens dddd is for day of the week 
console.log(m.format("dddd MMM Mo YYYY"));
//syncing clock (tutor showed me cool moment syncing features during session wednesday)
const eventMoment = moment().add(2, "Hours");


//make variables


//time

var currentTime = moment().format("hh:mm a");
console.log(currentTime);

//date

var currentDate = moment().format("MMM Do YYYY");
console.log(currentDate);

//day

var currentDayOfTheWeek = moment().format("dddd");
console.log(currentDayOfTheWeek);



//the current hour

var currentHour = moment().format("H");

//array for each row in the day planner 

var timeBlock = [
    "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm",
    "4:00 pm", "5:00 pm"
]; //it displays all of these unless I comment them out, i tried starting at 12:00am-12:00 pm but it only displayed in that order so starting 9-5 works for now 1/29/21
// "6:00 pm", // "7:00 pm", // "8:00 pm", // "9:00 pm", // "10:00 pm", // "11:00 pm", // "12:00 am", // "1:00 am", // "2:00 am", // "3:00 am", // "4:00 am", // "5:00 am", // "6:00 am", // "7:00 am", // "8:00 am"



//I need to figure out how to add rows and columns using jquery instead of making another grid system with bootstrap its already done in the html in the container class. 

//make for loop to add time blocks 9-5 and have it exclude non working hours 

for (var i = 0; i < timeBlock.length; i++) {

    //use the jQuery <div> selector to make sure all divs are looped through in for loop 

    var workHour = $("<div>");

    //use dayHours for looping the 9 (8 but the 8th hour goes into the beginning of the 9th from 5-6pm ) hours in the day  

    var dayHours = i + 9;

    // use the jQuery <p> select all to make sure all p tags are included in loop 

    var pTag = $("<p>");


    //*** REMEMBER!!! you don't need to use commas to add the hour class row class and time-block class from css
    workHour.addClass("time-block hour row");

    //this uses the attr to loop through the time blocks from 9-5 and prints it with the .text & .addClass jQuery method. we don't need to use the $ at the beginning of .addClass because workHour is actually defined above 

    workHour.attr("data-hour", timeBlock[i]);

    //after hours of searching using the inspector i learned that the text area class is col-md-9 and the div class is col-md-2 col-sm-1 
    pTag.text(timeBlock[i]).addClass("col-md-2 col-sm-1");


    // i need to make conditionals that make the "THEN each time block is color-coded to indicate whether it is in the past, present, or future" requirement met. 

    // we need to use the parseInt method to take the string and make it a number. we have it say:
    // 1.) if the dayHours are greater than the current hour add the .future css line 55
    // 2.) if the dayHours are less than the currentHour add the .past css line 45
    // 3.) select the .present class css line 50 on the appropriate time for the day 


    // 2.) if the dayHours are less than the currentHour add the .past css line 45 using the parse Integer method 
    if (dayHours < parseInt(currentHour)) {
        workHour.addClass("past");

        // 1.) if the dayHours are greater than the current hour add the .future css line 55
    } else if (dayHours > parseInt(currentHour)) {
        workHour.addClass("future")

        // 3.) select the .present class css line 50 on the appropriate time for the day 
    } else {
        workHour.addClass("present")
    }

    //make a text area that the user can fill in their daily schedule to with jQuery
    var scheduleText = $("<textarea>").addClass("col-md-9");

   

    //the saveBtn in jQuery is added at the end not beginning. Ive messed with this and found that unless its last it wont display the time text and save. 1/29/21 
    var saveBtn = $("<div>").addClass("col-md-1 saveBtn").text("Save");
   


    workHour.append(pTag, scheduleText, saveBtn);
    $(".container").append(workHour);
    var task = localStorage.getItem(timeBlock[i]);
    scheduleText.val(task);

}

//use line 60 in css to identify the save button and make an on click event to save the user input into the schedule. 
$(".saveBtn").on("click", function (event) {
    //we need to use prevent default method to make sure the save button doesn't auto save the user input to the local memory 
    event.preventDefault();
    //disable button
    $(".saveBtn").attr("disabled", false);




    //use this instead of for the save button to return time and task values using key values concept 
    var time = $(this).siblings("p").text();
    var textBlockInput = $(this).siblings("textarea").val();
    localStorage.setItem(time, textBlockInput)

    return false;
})




// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//display date and time in html using jQuery i used the activity 3 jQuery generators line 20 to add to the empty html
// // //OOPS forgot to display current date & time in header so now is better than never  
var currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDay);
var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
var currentHour = moment().hour();