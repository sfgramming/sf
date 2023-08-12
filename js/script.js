$(document).ready(function () {
  let currentDate = new Date();
  displayCalendar(currentDate);

  function displayCalendar(date) {
    const daysElement = $(".days");
    const monthElement = $(".date h1");

    monthElement.text(new Date(date).toLocaleString("default", { month: "long", year: "numeric" }));

    daysElement.empty();

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      daysElement.append("<div></div>");
    }

    for (let i = 1; i <= lastDate; i++) {
      const dayElement = $("<div>" + i + "</div>");
      dayElement.click(function () {
        openPopup(date.getFullYear(), date.getMonth() + 1, i);
      });
      daysElement.append(dayElement);
    }
  }

  function openPopup(year, month, day) {
      const selectedDate = new Date(year, month - 1, day); // Month is 0-indexed
      const popupContent = $(".popup-content");
    
      // Define an object to map dates to special information
      const specialDates = {
        "1/1": "Happy New Year!",
        "12/25": "Merry Christmas!",
        "7/4": "Happy Independence Day!",
        // Add more special dates and messages here
      };
    
      const key = `${month}/${day}`;
      if (specialDates[key]) {
        popupContent.html(`<h2>${specialDates[key]}</h2>`);
      } else {
        popupContent.html("<h2>No special info for this date.</h2>");
      }
    
      $(".popup").fadeIn();
    }
    $(".close").click(function () {
      $(".popup").fadeOut();
    });
  
    $(".prev").click(function () {
      currentDate.setMonth(currentDate.getMonth() - 1);
      displayCalendar(currentDate);
    });
  
    $(".next").click(function () {
      currentDate.setMonth(currentDate.getMonth() + 1);
      displayCalendar(currentDate);
    });
  });