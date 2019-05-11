/**
 * GET models
 */
const Buyer = require("../models/Buyer");
const Dropdowns = require("../models/admin/Dropdowns");
const Documents = require("../models/admin/Documents");

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
  buyer_listingagent: null,
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

    Promise.all([
      Buyer.findOne({ _id: req.params.buyer }),
      Dropdowns.find({ dropdownname: 'TITLECOMP' }).sort({ "optionvalue": 1 }),
      Dropdowns.find({ dropdownname: 'MORTGLEND' }).sort({ "optionvalue": 1 }),
      Dropdowns.find({ dropdownname: 'LISEAGENT' }).sort({ "optionvalue": 1 }),
      Dropdowns.find({ dropdownname: 'SALESTYPE' }).sort({ "optionvalue": 1 }),
      Documents.find({ doctype: 'BUYERPENDI' }).sort({ "docname": 1 })
      //, Documents.find({ dropdownname: 'SALESTYPE' }).sort({ "optionvalue": 1 })
    ]).then( ([ qrybuyer, qrytitlecomps, qrymortglends, qryliseagents, qrysalestypes, qrydocspending ]) => {
      res.render("buyer", {
        title: "Update Buyer Offer",
        method: "PUT",
        buyer: qrybuyer,
        mapaddress: qrybuyer.buyer_address + ',' + qrybuyer.buyer_city + ',' + qrybuyer.buyer_zip,
        states: statesArray,
        titlecompanies: qrytitlecomps,
        mortgagelenders: qrymortglends,
        listingagents: qryliseagents,
        salestypes: qrysalestypes,
        docspending: qrydocspending,
        docstitlecompany: docstitlecompanyArray,
        docsmisc: docsmiscArray
      });
    });

  } else {

    Promise.all([
      Dropdowns.find({ dropdownname: 'TITLECOMP' }).sort({ "optionvalue": 1 }),
      Dropdowns.find({ dropdownname: 'MORTGLEND' }).sort({ "optionvalue": 1 }),
      Dropdowns.find({ dropdownname: 'LISEAGENT' }).sort({ "optionvalue": 1 }),
      Dropdowns.find({ dropdownname: 'SALESTYPE' }).sort({ "optionvalue": 1 }),
      Documents.find({ doctype: 'BUYERPENDI' }).sort({ "docname": 1 })
    ]).then( ([ qrytitlecomps, qrymortglends, qryliseagents, qrysalestypes, qrydocspending ]) => {
      res.render("buyer", {
        title: "Add Buyer Offer",
        method: "POST",
        buyer: defaultBuyer,
        states: statesArray,
        titlecompanies: qrytitlecomps,
        mortgagelenders: qrymortglends,
        listingagents: qryliseagents,
        salestypes: qrysalestypes,
        docspending: qrydocspending,
        docstitlecompany: docstitlecompanyArray,
        docsmisc: docsmiscArray
      });
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
    buyer_listingagent: req.body.buyer_listingagent,
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
    updateBuyer.buyer_listingagent = req.body.buyer_listingagent,
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

/**
 * Push file to DropBox
 */
// exports.pushDropbox = (req, res) => {

//   const request = require('request');
//   const fs = require('fs');
//   const access_token = "RWsH3v07wC8AAAAAAAABvVZCWzK18WLGP-Tx6_QwkuQCOdIH7R0nlqrjplLEy3K3";
//   const srcfile = 'test.png';
//   const srclocation = 'uploads';
//   const content = fs.readFileSync(srclocation + '\/' + srcfile);

//   console.log('---- req ----');
//   console.log(req.body);

//   options = {
//     method: "POST",
//     url: 'https://content.dropboxapi.com/2/files/upload',
//     headers: {
//       "Content-Type": "application/octet-stream",
//       "Authorization": "Bearer " + access_token,
//       "Dropbox-API-Arg": "{\"path\": \"/monkey/"+srcfile+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
//     },
//     body:content
//   };

//   request(options, function(err, res, body){
//     // console.log("Err : " + err);
//     // console.log("res : " + res);
//     console.log("body : " + body);
//   })

//   res.end("File is uploaded");

// };
