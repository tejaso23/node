
const reqFilter = (req,res,next) =>{
    
        if(!req.query.age){
            res.send('<h1>Provide age</h1>');
        }else if(req.query.age > 18){
               next();
        }else{
            res.send('<h1>age is not supported</h1>');
            
        }
        
    }
    module.exports = reqFilter;