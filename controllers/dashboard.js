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
    var myData = [];
    for (i = 0; i < data.length; i++)
    {
      var obj = { 
        title: data[i].buyer_address,
        start: data[i].buyer_contractdate,
        end: data[i].buyer_contractdate,
        allDay: true,
        tip: data[i].buyer_address
      };
      myData.push(obj);
    }

    //if successful
    res.render("dashboard", { title: "Dashboard for", buyersCalendar: JSON.stringify(myData) });
  });
};
