var express = require('express');
var app = express();

app.use (express.urlencoded({extended:true}));
app.use (express.json());

var port = process.env.PORT || 8080

var router = express.Router()
router.get('/',(req,res)=>{
	res.json({message:'Hula! My API works!!!'})
})

router.get('/hello',(req,res)=>{
	res.send("Hello World!");
});

router.get('/goodbye/:name',(req,res)=>{
	res.send('Goodbye '+req.params.name);
});

router.post('/sum', (req,res)=>{
	res.send("The sum is "+(req.body.num1+req.body.num2));
	
});

app.use('/api',router);

app.listen(port);
console.log("Magic happened at port "+port);
