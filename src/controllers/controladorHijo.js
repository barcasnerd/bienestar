const controller = {};

controller.list = (req, res) => {
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

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    if (data.hijode.length == 0) {
      conn.query(`INSERT INTO hijo set id=${data.id},nom='${data.nom}',hijode=NULL`, (err, hijo) => {
        if (err) {
          res.redirect('/hijo')
        } else {
          res.redirect('/hijo')
        }
      });
    } else {
      conn.query(`INSERT INTO hijo set id=${data.id},nom='${data.nom}',hijode=${data.hijode}`, (err, hijo) => {
        if (err) {
          res.redirect('/hijo')
        } else {
          res.redirect('/hijo')
        }
      });
    }

  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM hijo WHERE id = ?", [id], (err, rows) => {
      res.render('hijo_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newHijo = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE hijo set ? where id = ?', [newHijo, id], (err, rows) => {
      res.redirect('/hijo');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM hijo WHERE id = ?', [id], (err, rows) => {
      res.redirect('/hijo');
    });
  });
}

module.exports = controller;
