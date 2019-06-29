const Auditlog = require("../../models/admin/Auditlog");

/**
 * GET /clients
 * Clients Listing
 */
exports.getAuditlog = function(req, res) {
    Auditlog.find().exec(function(err, auditlog_list) {
    if (err) {
        console.log("error dude");
        return next(err);
    }

    //if successful
    res.render("admin/auditlog", {
        title: "All Audit Logs",
        auditlog: auditlog_list
    });
    });
};

/**
 * POST/INSERT form data
 */
// exports.postAuditlog = (req, res) => {

//     const insertAuditlog = new Auditlog({
//         url: 'hahaha',
//         description: 'what up dude',
//         user: req.user.name,
//         changes: []
//     });

//     insertAuditlog.save(err => {
//     if (err) {
//         console.log(err);
//     }

//     req.flash("success", { msg: "Auditlog information has been added." });
//     res.redirect("Auditlogs");
//     });
// };