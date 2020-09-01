const express = require('express')
const router = express.Router();
const News = require ('../models/news')
router.get('/',  async (req, res)=>{
    const news = await News.find({})
    console.log(news)
    res.render('news',{news: news})
})

module.exports = router;