/**
 * GET /listdocs
 * List documents page.
 */
exports.getListDocs = (req, res) => {
  res.render('listdocs', {
    title: 'List Docs'
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */

