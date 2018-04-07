// Get Buyer Model
const Buyer = require("../models/Buyer");

exports.getDashboard = function(req, res) {
  // Get Buyer Calendar Events
  Buyer.find({
    $or: [
      {
        $and: [
          {
            buyer_contractdate: {
              $gte: new Date("2018-03-01T00:00:00.000Z"),
              $lt: new Date("2018-04-30T00:00:00.000Z")
            }
          }
        ]
      },
      {
        $and: [
          {
            buyer_closingdate: {
              $gte: new Date("2018-03-01T00:00:00.000Z"),
              $lt: new Date("2018-04-30T00:00:00.000Z")
            }
          }
        ]
      }
    ]
  }).exec(function(err, buyersCalendar) {
    if (err) {
      console.log("error dude");
      return next(err);
    }

    data = buyersCalendar;
    var buyersEvents = [];
    for (i = 0; i < data.length; i++)
    {
      if (data[i].buyer_contractdate) {
        var obj = { 
          title: data[i].buyer_address,
          description: '<b>Contract Date:</b><br>' + data[i].buyer_address + '<br>' + data[i].buyer_city + ', ' + data[i].buyer_state + ' ' + data[i].buyer_zip,
          id: data[i]._id,
          start: data[i].buyer_contractdate,
          end: data[i].buyer_contractdate,
          allDay: true,
          tip: data[i].buyer_address,
          color: 'rgba(74, 216, 74, 0.70)',
          textColor: 'rgba(0, 0, 0, 0.99)',
          editable: false,
          durationEditable: false,
          fakeEvent: false,
          textEscape: false,
          url: "/buyer/" + data[i]._id
        };
        buyersEvents.push(obj);
      }

      if (data[i].buyer_closingdate) {
        var obj = { 
          title: data[i].buyer_address,
          description: '<b>Closing Date:</b><br>' + data[i].buyer_address + '<br>' + data[i].buyer_city + ', ' + data[i].buyer_state + ' ' + data[i].buyer_zip,
          id: data[i]._id,
          start: data[i].buyer_closingdate,
          end: data[i].buyer_closingdate,
          allDay: true,
          tip: data[i].buyer_address,
          color: 'rgba(216, 74, 145, 0.70)',
          //textColor: 'rgba(63, 191, 191, 0)',
          editable: false,
          durationEditable: false,
          fakeEvent: false,
          textEscape: false,
          url: "/buyer/" + data[i]._id
        };
        buyersEvents.push(obj);
      }
    }

    //if successful
    res.render("dashboard", { title: "Dashboard for", buyersCalendar: JSON.stringify(buyersEvents), dataset: buyersCalendar });
  });
};
