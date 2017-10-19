$(document).ready(function() {

  var events_array =  [
    {
      title  : 'Alternative Earnest Money Deadline',
      start  : '2017-10-9 12:30:00',
      end    : '2017-10-9 16:30:00',
      allDay : false,
      tip    : "397 Skyler Street"
    },
    {
      title  : 'Record Title Deadline',
      start  : '2017-10-12 12:30:00',
      end    : '2017-10-12 16:30:00',
      allDay : false,
      tip    : "397 Skyler Street"
    },
    {
        title  : 'Record Title Objection Deadline',
        start  : '2017-10-13 12:30:00',
        end    : '2017-10-13 16:30:00',
        allDay : false,
        tip    : "397 Skyler Street"
    }
  ];

  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay"
    },
    selectable: true,
    events: events_array,
    eventRender: function(event, element) {
      element.attr("title", event.tip);
    }
  });

  $(".fc-prev-button").click({});

  $(".fc-next-button").click({});

});
