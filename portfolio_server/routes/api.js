const express = require('express');
const views = require('../models/views');
const rate = require('../models/rate');


const router = express.Router();



//GET RATES
router.get('/rateget', (req, res) => {
    rate.find({}).then(rating => {
        res.status(200).json(rating)
    }).catch(error => {
        if (error) {
            res.status(500).json({
                erros:'error occurred'
          })
        }
    })

})

router.put('/viewput', (req, res, next) => {
   
    const newViews = new views(req.body);
    
    console.log('backdata',req.body)
    newViews.save((error) => {
        if (error) {
            res.status(500).json({
                erros:'error occurred on save view'
          })
        }else{
            views.find({}).then(view => {
                res.status(200).json(view)
            }).catch(error => {
                if (error) {
                    res.status(500).json({
                        erros:'error occurred on find views'
                  })
                }
            })

        }
    })
})

router.post('/ratepost', (req, res, next) => {
    
    const newRate = new rate(req.body);
  
    newRate.save((error) => {
        if (error) {
            res.status(500).json({
                erros:'error occurred on save rate'
          })
        }else{

    rate.find({}).then(rating => {
            res.status(200).json(rating)
        }).catch(error => {
            if (error) {
                res.status(500).json({
                    erros:'error occurred on find rate'
              })
            }
        })

        }


    })

})


module.exports = router;
