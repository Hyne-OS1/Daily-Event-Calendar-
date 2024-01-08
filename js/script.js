//This function will cover the planners current "day/date" but it will also show its current time below it with 1000ms intervals.
//using document ready ensures the page is fully loaded before trying to execute any of the jquery

$(document).ready(function() {
    function updateTime() {
      var dateElement = $('#date');
      var timeElement = $('#time');
      var currentDayElement = $('#currentDay');
  
      var currentDate = new Date();
      var dateChoices = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var currentTime = currentDate.toLocaleTimeString();
      var currentDay = currentDate.toLocaleDateString(undefined, dateChoices);
  
      dateElement.text(currentDay);
      timeElement.text(currentTime);
      currentDayElement.text(`Current Day: ${currentDay}`);
    }


 // Saves all inputs to local storage but only if you click your save button at the end of that section otherwise it will not be saved
$('.saveBtn').on('click', function () {
    var timeID = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();


    localStorage.setItem(timeID, userInput);
  });

  // Retrieves stored information using the description of accompanying html 
  $('.time-block').each(function () {
    var timeID = this.id;
    var storedUserInput = localStorage.getItem(timeID);

    if (storedUserInput) {
      $(this).find('.description').val(storedUserInput);
    }
  });


// this just makes sure the function updates in real time
updateTime() ;
  
// a short real time interval of 1000ms update
setInterval(updateTime, 1000);

});
  