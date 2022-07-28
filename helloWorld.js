var express = require('express');
var app = express();
var router = express.Router()

router.get('/hello',(req,res)=>{
	res.send("Hello World!!")
});

router.post('/number', function(req,res){
	res.send("The number is "+req.body.num);
});

app.use('/api',router);
app.listen(3000);