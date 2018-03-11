$(document).ready(function() {
  // Data Stuff
  var events_object = [
    {
      title: "23 Deadlines",
      start: "2017-11-10 12:30:00",
      end: "2017-11-10 16:30:00",
      allDay: true,
      tip: "You have 23 deadlines today"
    },
    {
      title: "XYZ Earnest Money Deadline",
      start: "2017-10-9 0 8:00:01",
      end: "2017-10-9 08:00:00",
      allDay: true,
      tip: "397 Skyler Street"
    },
    {
      title: "Money Deadline",
      start: "2017-10-9 12:30:00",
      end: "2017-10-9 16:30:00",
      allDay: false,
      tip: "397 Skyler Street"
    },
    {
      title: "Money 33 Deadline",
      start: "2017-10-9 12:30:00",
      end: "2017-10-9 16:30:00",
      allDay: false,
      tip: "397 Skyler Street"
    },
    {
      title: "Money 44 Deadline",
      start: "2017-10-9 12:30:00",
      end: "2017-10-9 16:30:00",
      allDay: false,
      tip: "397 Skyler Street"
    },
    {
      title: "blah Money Deadline",
      start: "2017-10-9 12:30:00",
      end: "2017-10-9 16:30:00",
      allDay: false,
      tip: "397 Skyler Street"
    },
    {
      title: "Blah Blah Money Deadline",
      start: "2017-10-9 12:30:00",
      end: "2017-10-9 16:30:00",
      allDay: false,
      tip: "397 Skyler Street"
    },
    {
      title: "Record Title Deadline",
      start: "2017-10-12 12:30:00",
      end: "2017-10-12 16:30:00",
      allDay: false,
      tip: "397 Skyler Street"
    },
    {
      title: "Record Title Objection Deadline",
      start: "2017-10-13 12:30:00",
      end: "2017-10-13 16:30:00",
      allDay: false,
      tip: "397 Skyler Street"
    }
  ];

  // Full Calendar configurations
  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay"
    },
    selectable: true,
    events: events_object,
    eventRender: function(event, element) {
      element.attr("title", event.tip);
    }
  });
  $(".fc-prev-button").click({});
  $(".fc-next-button").click({});

  // Delete button action
  $("#confirm-delete").on("show.bs.modal", function(e) {
    $(this).find(".btn-ok").attr("href", $(e.relatedTarget).data("href"));
  });

  // All Input Masks
  $("input#client_cellphone, input#client_homephone").inputmask(
    "(999) 999-9999"
  );
  $("input#client_zip").inputmask("99999[-9999]", { greedy: false });

  // may not even need this.. keep for now
  // come up w/ better naming so you don't have to use NOT on other class
  $('[id^=tab]:not(.nav.nav-tabs)').click(function(e){
    var clickedTab = $('a', this).attr('href');
    switch (clickedTab) { 
      case '#tabInformation': 
        console.log('tabInformation');
        break;
      case '#tabClient': 
        console.log('tabClient');
        break;
      case '#tabAdditional': 
        console.log('tabAdditional');
        break;		
      case '#tabDatesDeadlines': 
        console.log('tabDatesDeadlines');
        break;
      case '#tabNotes': 
        console.log('tabNotes');
        break;
      default:
        console.log('default.');
    }
  });
  
  // Buyer Contract
  var $input = $('input#buyer_search');
  var $result = $('input#buyer_IDs');
  var updateValue = function ($target) {
      $target.each(function () {
          $result.val($input.val());
      });
  };
  updateValue($input);
  $input
      .on('select:flexdatalist', function () {
          // console.log('Value selected!');
      })
      .on('change:flexdatalist', function (e, set) {
          // console.log('Set value: ' + set.value);
          // console.log('Set text: ' + set.text);
          updateValue($(this));
      });

});


// LOOK INTO THIS -- ADDED TO Package.json
// function cleanStackTrace(reason) {
//   return require('callsite-record')({
//       forError: reason
//   }).renderSync({
//       stackFilter(frame) {
//           return !frame.getFileName().includes('node_modules');
//       }
//   });
// }

//$("input[id=client_address]").blur(function(){
//$(this).css("background-color", "#ffffff");
//alert('hello');
//});

var client_address_complete = document.getElementById("wrapper");
$(client_address_complete).on("change", "input", function(event) {
  // Does some stuff and logs the event to the console
  //alert("hello");
});
