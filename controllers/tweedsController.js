const Tweed = require('../models/tweed');


const tweedsController = {};

tweedsController.index = (req, res) => {
  Tweed.findAll()
    .then(tweeds => {
      res.json({
        message: 'ok',
        data: { tweeds },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

tweedsController.show = (req, res) => {
  Tweed.findById(req.params.id)
    .then(tweed => {
      res.json({
        message: 'ok',
        data: { tweed },
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

tweedsController.create = (req, res) => {
  //let aDay = Date.now();
  Tweed.create({
      tweed: req.body.tweed_text,
      time: Date.now(),
    })
    .then(tweed => {
      res.json({message: 'ok', data: { tweed }});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

module.exports = tweedsController;
