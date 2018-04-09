/**
 * GET model
 */
const Buyer = require("../models/Buyer");

const statesArray = [
  {
    option: "AL",
    value: "Alabama"
  },
  {
    option: "AK",
    value: "Alaska"
  },
  {
    option: "AZ",
    value: "Arizona"
  },
  {
    option: "AR",
    value: "Arkansas"
  },
  {
    option: "CA",
    value: "California"
  },
  {
    option: "CO",
    value: "Colorado"
  },
  {
    option: "CT",
    value: "Connecticut"
  },
  {
    option: "DE",
    value: "Delaware"
  },
  {
    option: "DC",
    value: "District Of Columbia"
  },
  {
    option: "FL",
    value: "Florida"
  },
  {
    option: "GA",
    value: "Georgia"
  },
  {
    option: "HI",
    value: "Hawaii"
  },
  {
    option: "ID",
    value: "Idaho"
  },
  {
    option: "IL",
    value: "Illinois"
  },
  {
    option: "IN",
    value: "Indiana"
  },
  {
    option: "IA",
    value: "Iowa"
  },
  {
    option: "KS",
    value: "Kansas"
  },
  {
    option: "KY",
    value: "Kentucky"
  },
  {
    option: "LA",
    value: "Louisiana"
  },
  {
    option: "ME",
    value: "Maine"
  },
  {
    option: "MD",
    value: "Maryland"
  },
  {
    option: "MA",
    value: "Massachusetts"
  },
  {
    option: "MI",
    value: "Michigan"
  },
  {
    option: "MN",
    value: "Minnesota"
  },
  {
    option: "MS",
    value: "Mississippi"
  },
  {
    option: "MO",
    value: "Missouri"
  },
  {
    option: "MT",
    value: "Montana"
  },
  {
    option: "NE",
    value: "Nebraska"
  },
  {
    option: "NV",
    value: "Nevada"
  },
  {
    option: "NH",
    value: "New Hampshire"
  },
  {
    option: "NJ",
    value: "New Jersey"
  },
  {
    option: "NM",
    value: "New Mexico"
  },
  {
    option: "NY",
    value: "New York"
  },
  {
    option: "NC",
    value: "North Carolina"
  },
  {
    option: "ND",
    value: "North Dakota"
  },
  {
    option: "OH",
    value: "Ohio"
  },
  {
    option: "OK",
    value: "Oklahoma"
  },
  {
    option: "OR",
    value: "Oregon"
  },
  {
    option: "PA",
    value: "Pennsylvania"
  },
  {
    option: "RI",
    value: "Rhode Island"
  },
  {
    option: "SC",
    value: "South Carolina"
  },
  {
    option: "SD",
    value: "South Dakota"
  },
  {
    option: "TN",
    value: "Tennessee"
  },
  {
    option: "TX",
    value: "Texas"
  },
  {
    option: "UT",
    value: "Utah"
  },
  {
    option: "VT",
    value: "Vermont"
  },
  {
    option: "VA",
    value: "Virginia"
  },
  {
    option: "WA",
    value: "Washington"
  },
  {
    option: "WV",
    value: "West Virginia"
  },
  {
    option: "WI",
    value: "Wisconsin"
  },
  {
    option: "WY",
    value: "Wyoming"
  }
];

const titlecompaniesArray = [
  {
    option: "1",
    value: "Land Title Company"
  },
  {
    option: "2",
    value: "Abstract Title Company"
  },
  {
    option: "3",
    value: "Walker Heights Title Company"
  },
  {
    option: "4",
    value: "Golden Title Company"
  },
  {
    option: "5",
    value: "Simpson Title Company"
  }
];

const mortgagelendersArray = [
  {
    option: "1",
    value: "Big Mortgage Company"
  },
  {
    option: "2",
    value: "The Mortgage Company"
  },
  {
    option: "3",
    value: "Barstow Mortgage Pros"
  },
  {
    option: "4",
    value: "Mortgages-R-Us"
  }
];

const sellingagentsArray = [
  {
    option: "1",
    value: "Bobby Bo"
  },
  {
    option: "2",
    value: "Greg Smithenstein"
  },
  {
    option: "3",
    value: "Laura James"
  },
  {
    option: "4",
    value: "Kimber Stocks"
  }
];

const salestypesArray = [
  {
    option: "1",
    value: "N/A"
  },
  {
    option: "2",
    value: "HUD"
  },
  {
    option: "3",
    value: "REO"
  },
  {
    option: "4",
    value: "Short Sale"
  }
];

const docspendingArray = [
  {
    option: "1",
    value: "Sales Contract"
  },
  {
    option: "2",
    value: "Counter-Proposal"
  },
  {
    option: "3",
    value: "Closing Instructions"
  },
  {
    option: "4",
    value: "Earnest Money Receipted"
  },
  {
    option: "5",
    value: "Square Footage Disclosure (*)"
  },
  {
    option: "6",
    value: "Sellers Property Disclosure (*)"
  },
  {
    option: "7",
    value: "Lead Based Paint (Obligations) (pre 1978)"
  },
  {
    option: "8",
    value: "Source of Water Addendum (unless on SPD)"
  },
  {
    option: "9",
    value: "Inspection Objection"
  },
  {
    option: "10",
    value: "Inspection Resolution"
  },
  {
    option: "11",
    value: "Title Commitment"
  },
  {
    option: "12",
    value: "Notice of Termination"
  },
  {
    option: "13",
    value: "Earnest Money Release"
  },
  {
    option: "14",
    value: "Other Documents"
  }
];

const docstitlecompanyArray = [
  {
    option: "1",
    value: "Buyer's Settlement Statement"
  },
  {
    option: "2",
    value: "Buyer's Settlement Statement"
  },
  {
    option: "3",
    value: "Closing Instructions"
  },
  {
    option: "4",
    value: "Power of Attorney"
  },
  {
    option: "5",
    value: "Deed (General/Special/P.R.) (*)"
  },
  {
    option: "6",
    value: "Four Column Summary"
  },
  {
    option: "7",
    value: "Tax Certificate"
  },
  {
    option: "8",
    value: "Water/Sewer/HOA Aggreement & Proration"
  },
  {
    option: "9",
    value: "Bill of Sale"
  },
  {
    option: "10",
    value: "Real Property Transfer Declaration"
  },
  {
    option: "11",
    value: "Pay-Off Information"
  },
  {
    option: "12",
    value: "Final Affidavit and Agreement"
  },
  {
    option: "13",
    value: "Affirmation of Colorado Residency"
  },
  {
    option: "14",
    value: "Commission Disbursement"
  },
  {
    option: "15",
    value: "1099"
  },
  {
    option: "16",
    value: "Other Documents"
  }
];

const docsmiscArray = [
  {
    option: "1",
    value: "Listing Fact Sheet"
  },
  {
    option: "2",
    value: "Mesa County Assessor"
  },
  {
    option: "3",
    value: "Mill Tailings"
  },
  {
    option: "4",
    value: "Receipted Doc's & Disclosures"
  },
  {
    option: "5",
    value: "FHA Amendatory Clause"
  },
  {
    option: "6",
    value: "Occupancy Rental Agreement"
  },
  {
    option: "7",
    value: "Referral Form"
  },
  {
    option: "8",
    value: "Other Documents"
  }
];

// Setup empty object
const defaultBuyer = new Buyer({
  buyer_address: null,
  buyer_city: null,
  buyer_state: null,
  buyer_zip: null,
  buyer_clientIDs: null,
  buyer_purchaseprice: null,
  buyer_earnestprice: null,
  buyer_concession: null,
  buyer_titlecompany: null,
  buyer_mortgagelender: null,
  buyer_sellingagent: null,
  buyer_salestype: null,
  buyer_contractdate: null,
  buyer_closingdate: null,
  buyer_notifications: false
});

/**
 * GET buyer form ready for insert or update
 */
exports.getBuyer = (req, res) => {
  if (req.params.buyer) {
    // find existing buyer
    Buyer.findOne({ _id: req.params.buyer }, (err, updateBuyer) => {
      if (err) {
        console.log(err);
        //return next(err);
      }

      // Render to the pug view - ready for PUT
      res.render("buyer", {
        title: "Update Buyer Offer",
        method: "PUT",
        mapaddress: updateBuyer.buyer_address + ',' + updateBuyer.buyer_city + ',' + updateBuyer.buyer_zip,
        buyer: updateBuyer,
        states: statesArray,
        titlecompanies: titlecompaniesArray,
        mortgagelenders: mortgagelendersArray,
        sellingagents: sellingagentsArray,
        salestypes: salestypesArray,
        docspending: docspendingArray,
        docstitlecompany: docstitlecompanyArray,
        docsmisc: docsmiscArray
      });
    });
  } else {
    // Render to the pug view - ready for POST
    res.render("buyer", {
      title: "Add Buyer Offer",
      method: "POST",
      buyer: defaultBuyer,
      states: statesArray,
      titlecompanies: titlecompaniesArray,
      mortgagelenders: mortgagelendersArray,
      sellingagents: sellingagentsArray,
      salestypes: salestypesArray,
      docspending: docspendingArray,
      docstitlecompany: docstitlecompanyArray,
      docsmisc: docsmiscArray
    });
  }
};

/**
 * POST/INSERT form data
 */
exports.postBuyer = (req, res) => {
  console.log("post buyer");
  // req.assert("buyer_firstname", "First name cannot be blank").notEmpty();
  // req.assert("buyer_lastname", "Last name cannot be blank").notEmpty();
  // req.assert("buyer_email", "Email is not valid").isEmail();
  // const errors = req.validationErrors();

  // if (errors) {
  //   req.flash("errors", errors);
  //   return res.redirect("/buyer");
  // }

  // smaller data will compare faster than larger data
  // Use ids (numeric) for drop-downs ???

  const insertBuyer = new Buyer({
    buyer_address: req.body.buyer_address,
    buyer_city: req.body.buyer_city,
    buyer_state: req.body.buyer_state,
    buyer_zip: req.body.buyer_zip,
    buyer_clientIDs: req.body.buyer_clientIDs,
    buyer_purchaseprice: req.body.buyer_purchaseprice.split(",").join(""),
    buyer_earnestprice: req.body.buyer_earnestprice.split(",").join(""),
    buyer_concession: req.body.buyer_concession.split(",").join(""),
    buyer_titlecompany: req.body.buyer_titlecompany,
    buyer_mortgagelender: req.body.buyer_mortgagelender,
    buyer_sellingagent: req.body.buyer_sellingagent,
    buyer_salestype: req.body.buyer_salestype,
    buyer_contractdate: req.body.buyer_contractdate,
    buyer_closingdate: req.body.buyer_closingdate,
    buyer_notifications: req.body.buyer_notifications ? true : false
  });
  
  insertBuyer.save(err => {
    if (err) {
      console.log(err);
    }

    req.flash("success", { msg: "Buyer information has been added." });
    res.redirect("/buyers");
  });
};

/**
 * PUT/UPDATE form data
 */
exports.putBuyer = (req, res) => {
  // req.assert("buyer_firstname", "First name cannot be blank").notEmpty();
  // req.assert("buyer_lastname", "Last name cannot be blank").notEmpty();
  // req.assert("buyer_email", "Email is not valid").isEmail();

  // const errors = req.validationErrors();

  // if (errors) {
  //   req.flash("errors", errors);
  //   return res.redirect("/buyer");
  // }

  Buyer.findById(req.params.buyer, (err, updateBuyer) => {
    if (err) {
      console.log(err);
      //return next(err);
    }

    updateBuyer.buyer_address = req.body.buyer_address,
    updateBuyer.buyer_city = req.body.buyer_city,
    updateBuyer.buyer_state = req.body.buyer_state,
    updateBuyer.buyer_zip = req.body.buyer_zip,
    updateBuyer.buyer_clientIDs = req.body.buyer_clientIDs,
    updateBuyer.buyer_purchaseprice = req.body.buyer_purchaseprice.split(",").join(""),
    updateBuyer.buyer_earnestprice = req.body.buyer_earnestprice.split(",").join(""),
    updateBuyer.buyer_concession = req.body.buyer_concession.split(",").join(""),
    updateBuyer.buyer_titlecompany = req.body.buyer_titlecompany,
    updateBuyer.buyer_mortgagelender = req.body.buyer_mortgagelender,
    updateBuyer.buyer_sellingagent = req.body.buyer_sellingagent,
    updateBuyer.buyer_salestype = req.body.buyer_salestype,
    updateBuyer.buyer_contractdate = req.body.buyer_contractdate,
    updateBuyer.buyer_closingdate = req.body.buyer_closingdate,
    updateBuyer.buyer_notifications = req.body.buyer_notifications ? true : false;

    updateBuyer.save(err => {
      // if (err) {
      //   if (err.code === 11000) {
      //     req.flash('errors', { msg: 'The email address you have entered is already associated with an account.' });
      //     return res.redirect('/buyers');
      //   }
      //   return next(err);
      // }
      req.flash("success", { msg: "Buyer information has been updated." });
      res.redirect("/buyers");
    });
  });
};
