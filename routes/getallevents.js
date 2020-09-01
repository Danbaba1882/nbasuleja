const express = require('express')
const router = express.Router();
const Events = require ('../models/events')
router.get('/', async (req, res)=>{
    const events = await Events.find({})
    console.log(events)
    for (var i =0; i<events.length; i++){
        console.log(events.title)
    }
    res.render('events',{events: events})
})

module.exports = router;