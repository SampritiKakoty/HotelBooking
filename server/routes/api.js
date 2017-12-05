const express = require('express');
app = module.exports = express();
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;



// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/HotelReservation', (err, db) => {
        if (err) return console.log(err);
       // console.log("Sucess");

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/hotels', (req, res) => {
  
  //  console.log("==============:"+req.query.location);
    connection((db) => {
        db.collection('hotel')
            .find({$or:[{address:req.query.location},{location:req.query.location}]})
            .toArray()
            .then((hotel) => {
                response.data = hotel;
                res.json(response);

           //     console.log(hotel)
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/getHotelDetail', (req, res) => {
    
     console.log("==============:"+req.query);
      connection((db) => {
          db.collection('hotel')
              .find({_id:{$eq:req.query.id}})
              .toArray()
              .then((hotel) => {
                  response.data = hotel;
                  res.json(response);
  
                 console.log(hotel)
              })
              .catch((err) => {
                  sendError(err, res);
              });
      });
  });

module.exports = router;