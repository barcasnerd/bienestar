const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM padre', (err, padre) => {
            if (err) {
                res.json(err);
            }
            res.render('formConsulta1', {
                data: padre
            });
        });
    });
};


controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM hijo WHERE hijode = ?", [id], (err, rows) => {
            console.error('consulta:')
            console.log(rows[1].id)
            res.render('resConsulta1', {
                data: rows
            })
        });
    });
};



module.exports = controller;
