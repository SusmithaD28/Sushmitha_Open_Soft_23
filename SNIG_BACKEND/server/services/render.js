exports.homeRoutes = (req, res) => {
    axios.get("http://localhost:9000/api/users")
      .then(function(response) {
        res.render('index', { users: response.data });
      })
      .catch(err => {
        res.send(err);
      });
  }
  
  exports.add_user = (req, res) => {
    res.render('add_user');
  }
  
  exports.update_user = (req, res) => {
    axios.get("http://localhost:9000/api/users")
      .then(function(response) {
        res.render('update_user');
      })
      .catch(err => {
        res.send(err);
      });
  }
  