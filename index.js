const express=require('express');
const path=require('path');
const port=8000;
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
var todo=[
    {
        task:"st2",
        date:"18/12/2022"
    },
    {
        task:"dsa",
        date:"18/12/2022"
    }
]
app.get('/',function(req,res){
    return res.render('home',{
        title:"todoapp",
        to_do:todo
    });
});
app.post('/create-task',function(req,res){
    todo.push(req.body);
    return res.redirect('/');
});
app.get('/delete-task',function(req,res){
    let task=req.query.task;
    let todoIndex=todo.findIndex(todo =>todo.task==task);
    if(todoIndex !=-1){
        todo.splice(todoIndex,1);
    }
    return res.redirect('/');
});
app.listen(port,function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log('yup my expressjs server is running on port:',port);
});