const express=require('express')
const app=express();
const port=process.env.PORT || 5000;
const cors=require('cors');//ei server side er port(5000) theke client side er port(3000) a access krte chaile ei cors use krte hbe
app.use(cors());
const courses=require('./Data/Courses.json');//Category.json 1 no file setup.
const courseDetails=require('./Data/CourseDetails.json');//All types of news News.json 2 no file setup.
app.get('/',(req,res)=>{
    res.send('Course API is Running');
})
//1 no file Category.json used and send response to client side.
app.get('/courses',(req,res)=>{//left side nav bar a news category name gula ke show krar jnno.
    res.send(courses); 
})
app.get('/courses/:id',(req,res)=>{
    const id=req.params.id;
    const selected_course=courses.filter(n=>n.id===id);//1 ta news category er moddhe onk news thkbe tai ekhane filter use kra hoyce,
    res.send(selected_course);
    
})
//2 no file News.json used and send response to client side.
app.get('/courseDetails',(req,res)=>{//sob gula news amra client side er home a send krteci..it means web site a home a click krle sob gula news show krbe.
    res.send(courseDetails);
})
app.get('/courseDetails/:id',(req,res)=>{//je id te je news ace sei id te click krle sei news show krbe.
    const id=req.params.id;
    const courseDe=courseDetails.find(n=>n.category_id==id);//it means id onujayy news web a show krbe specific 1 ta news item ke show krbe.a jnno find
    res.send(courseDe);
})

app.listen(port, ()=>{
    console.log('Assignment-10 Server running on port',port);
})