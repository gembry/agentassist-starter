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

  $('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
  });

  // All Input Masks
  $("input#client_cellphone, input#client_homephone").inputmask('(999) 999-9999');
  $("input#client_zip").inputmask("99999[-9999]", { greedy: false });

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