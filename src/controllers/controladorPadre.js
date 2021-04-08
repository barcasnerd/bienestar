const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM padre', (err, padre) => {
      if (err) {
        res.json(err);
      }
      res.render('padre', {
        data: padre
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query(`INSERT INTO padre set id=${data.id},nom='${data.nom}'`, (err, padre) => {
      if (err) {
        res.redirect('/padre')
      } else {
        res.redirect('/padre')
      }
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM padre WHERE id = ?", [id], (err, rows) => {
      res.render('padre_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newPadre = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE padre set ? where id = ?', [newPadre, id], (err, rows) => {
      res.redirect('/padre');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM padre WHERE id = ?', [id], (err, rows) => {
      res.redirect('/padre');
    });
  });
}

module.exports = controller;
