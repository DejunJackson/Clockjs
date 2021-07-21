//Function is colled upon loading page; Starts the time
function startTime() {

  //Array to hold the days of the week
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //initializes the day module (built-in)
  var today = new Date();

  //saves the hours, minutes, seconds, and day(number) using the .get method
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var cDay = today.getDay();

  //adds/removes currentDay class to highlight day of the week
  $("." + days[cDay]).addClass("currentMode");
  $("." + days[cDay - 1]).removeClass("currentMode");

  //Checks if the time is below 10; calls checkTime and passes minutes and seconds
  m = checkTime(m);
  s = checkTime(s);

  //when document is loaded, checks to see if 12 hours is selected. If so, changes from 24 hour format to 12 and adds pm or am
  $(document).ready(function() {
    if ($(".12hours").hasClass("currentMode")) {
      var am_pm = "a.m.";
      if (h > 12 && h < 24) {
        am_pm = "p.m.";
      }
      h = h % 12;
      return document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + am_pm;

    } else if ($(".24hours").hasClass("currentMode")) {
      return document.getElementById("time").innerHTML = h + ":" + m + ":" + s;

    }
  });

  //updates time every half second
  t = setTimeout(function() {
    startTime()
  }, 500);

}

// add a zero in front of numbers<10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//highlights 12 hour mode if selected
$(".12hours").on("click", function() {
  $(".12hours").addClass("currentMode");
  $(".24hours").removeClass("currentMode");
});

//higlights 24 hour mode if selected
$(".24hours").on("click", function() {
  $(".24hours").addClass("currentMode");
  $(".12hours").removeClass("currentMode");

});
