const controller = {};

controller.hijosDeUnPadre = () => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM hijo', (err, hijo) => {
            if (err) {
                res.json(err);
            }
            res.render('hijo', {
                data: hijo
            });
        });
    });
};

module.exports = controller;
