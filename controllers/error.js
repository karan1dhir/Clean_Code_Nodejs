exports.get404Page = (req, res, next) => {
    res.status(404).render('PageNotFound', {
        pageTitle: 'Page Not Found'
    });
}