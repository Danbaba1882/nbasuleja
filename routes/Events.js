const express = require ('express');
 const router = express.Router();
 const Events = require ('../models/events')

 router.post('/', (req, res)=>{
     console.log('events route is working')
     console.log(req.body)
   const events = new Events ({
        title: req.body.title,
        content: req.body.content
    })
    Events.create(events).then((events, err)=>{
        console.log('events ', events)
        if (err){
            res.send(err);
        }
        else {
            res.send({success: true});
        }
    }) 
 })

 module.exports = router;