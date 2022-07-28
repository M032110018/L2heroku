var express = require('express');
var app = express();

app.use (express.urlencoded({extended:true}));
app.use (express.json());

var port = process.env.PORT || 8080

var router = express.Router()
router.get('/',(req,res)=>{
	res.json({message:'Hula! My API works!!!'})
})

app.use('/api',router);

app.listen(port);
console.log("Magic happened at port "+port);