var _ = require('underscore');


var musicians = [
  { 
    name: 'Robert Cray', 
    discography: [  
      { id: 1, title: "Strong Persuader", year: "1986", picture: "#" },
      { id: 2, title: "Don´t be Afraid of the Dark", year: "1988", picture: "#" },
      { id: 3, title: "4 nights of 40 years Live", year: "2015", picture: "#" }
    ]
  },
  {
    name: 'Steve Ray Vaughan',
    discography: [  
      { id: 1, title: "Texas Flood", year: "1983", picture: "#" },
      { id: 2, title: "Couldn´t Stand The Weather", year: "1984", picture: "#" },
      { id: 3, title: "The Essencial", year: "2002", picture: "#" }
    ]
  },
  {
    name: 'BB King',
    discography: [  
      { id: 1, title: "Riding  with the king", year: "200", picture: "#" },
      { id: 2, title: "Live at the Regal", year: "1965", picture: "#" },
      { id: 3, title: "One kinf Favor", year: "2008", picture: "#" }
    ]
  }
];


exports.index = function(req, res) {
  var names = musicians.map(function(p) { return p.name; });
  res.render('index', { musicians: names })
};


exports.musician = function(req, res) {
  var discography = _(musicians).detect(function (p) { 
    return p.name == req.params.name;
  }).discography;
  res.json(discography);
}

exports.addMusician = function(req, res) {
  musicians.push({
    name: req.body.name,
  })

  for (var i = 0; i < musicians.length; i++) {
    if (musicians[i].name === req.body.name) {
      musicians[i].discography = [];
      for (var j = 0; j < req.body.discography.length; j++) {
        musicians[i].discography.push(req.body.discography[j]);
      }
    }
  }
  

  res.json({status: 'ok' });
}
