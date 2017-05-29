function getPass (req,res,next)  {

    const { api_key } = req.query

    if ( api_key === '12345' ) {
      next()
    }
    else {
      res.json({ msg: `You don't have permission`})
    }
  }
  
module.exports = getPass