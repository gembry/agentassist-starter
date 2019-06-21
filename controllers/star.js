const Buyer = require("../models/Buyer");

exports.setStar = (req, res) => {

	var result = { result: false };

	if (req.query.collection = 'buyer') {
		// BUYER STAR UPDATE ONLY -- This can be improved I'm sure :)
		Buyer.updateOne(
			{ _id: req.query._id },
			{ $set: { buyer_star: req.query.state }}, 
			(err, updateBuyer) => {
				if (err) {
					console.log(err);
					result = { result: err };
				} else {
					result = { result: true };
				}
				res.json(result);
			}
		);
	}
};
