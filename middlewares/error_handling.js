exports.route_not_found = function (req, res) {
    if (res.status(404)) {
        res.send('Page not found!');
    };
}