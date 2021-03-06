$(document).ready(function() {
  // Data Stuff
  var caldashboardArray = [
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
    events: caldashboardArray,
    eventRender: function(event, element) {
      element.attr("title", event.tip);
    }
  });

  // Delete button action
  $("#confirm-delete").on("show.bs.modal", function(e) {
    $(this).find(".btn-ok").attr("href", $(e.relatedTarget).data("href"));
  });

  // All Input Masks
  $("input#client_cellphone, input#client_homephone").inputmask( "(999) 999-9999" );
  $("input#client_zip, input#buyer_zip").inputmask("99999", { greedy: false }); // removed +4 "99999[-9999]"
  $('input#buyer_purchaseprice, input#buyer_earnestprice, input#buyer_concession')
    .maskMoney({precision: 0, allowEmpty: true, allowNegative: false, thousands:','}).trigger('mask.maskMoney');

// may not even need this.. keep for now
  // come up w/ better naming so you don't have to use NOT on other class
  $('[id^=tab]:not(.nav.nav-tabs)').click(function(e){
    var clickedTab = $('a', this).attr('href');
    switch (clickedTab) { 
      case '#tabInformation': 
        console.log('tabInformation');
        break;
      case '#tabAdditional': 
        console.log('tabAdditional');
        break;		
      default:
        console.log('default.');
    }
  });  

  // var tz = jstz.determine();
  // var tzname = tz.name();

  // var dt = new timezoneJS.Date('12/27/2010', tzname);
  // alert(dt.getTimezone());

  // function toTimeZone(time) {
  //   var format = 'YYYY/MM/DD HH:mm:ss ZZ';
  //   return moment(time, format).tz(zone).format(format);
  // }

  // Enable popovers everywhere
  $('[data-toggle="popover"]').popover()


  // *** --------- ***
  // *** LISTENERS ***
  // *** --------- ***

  // $("#upload_link").on('click', function(e){
  //   e.preventDefault();
  //   $("#upload:hidden").trigger('click');
  // });

  // If buyer info exists, then user can hit upload file icons
  $('input#buyer_address, input#buyer_zip').change(function() {
    var buyer_address = $('input#buyer_address').val();
    var buyer_zip = $('input#buyer_zip').val();

    if ( buyer_address.length && buyer_zip.length ) {
      $('form input#folder').val( buyer_zip + '_' + buyer_address);
    }
  });

  // Used for AuditLogging
  // var map = {};
  // $("#buyerform").find(':input').on("change paste", function() {
  //   // console.log( $(this).attr('id') + " - "+ $(this).val() );
  //   map[$(this).attr("name")] = $(this).val();
  // });


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


// *** --------- ***
// *** FUNCTIONS ***
// *** --------- ***

// Determine if upload button is available.
function canUpload() {
  if ( $("#buyerform input#buyer_address").val().length == 0 ||  $("#buyerform input#buyer_zip").val().length == 0) {
    event.preventDefault();
  };
}

// function isDate( dateVal ) {
//   var d = new Date(dateVal);
//   return d.toString() === 'Invalid Date' ? false: true;
// }

// $('#buyerform').find(':input').each(function() {
//   var huh = $(this).data('formValues', $(this).val());
//   console.log(huh);
// });


// $("#myTextBox").bind("change paste keyup", function() {
//   alert($(this).val()); 
// });

function toggleStar(x) {

  var starValues = x.getAttribute("value").split(",");
  var collection = starValues[0];
  var _id = starValues[1];
  var state = true;

  if ( x.classList.contains("fa-star") ) {
    state = false;
    x.classList.replace( "fa-star", "fa-star-o" );
  } else {
    x.classList.replace( "fa-star-o", "fa-star" );
  }
  
  $.ajax({
    type: 'GET',
    url: '/star',
    data: {
      collection: collection,
      _id: _id,
      state: state
    },
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      // whatever you wanna do, go nuts!            
    },
    error: function(xhr) {
      console.log('fail');
      // $('nav').next().prepend(`<div class="alert alert-dismissable alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> Error ${xhr.statusCode().status}: ${xhr.statusCode().statusText} ${xhr.responseText} </div>`)
    }
  })

    // No real reason for this, could just include token in buyer.pug form
    // $.ajax({
    //     type: "GET",
    //     url: '/token',
    //     success: function (data) {
    //         dbxToken = data.trim();
    //     }, 
    //     async: false // <- this turns it into synchronous
    // });


}
