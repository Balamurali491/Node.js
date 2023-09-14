const express = require ("express");
const app = express();
const PORT = 4000;
app.get("/home",(req,res)=>{
    res.send("hi bala!!!");
});
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});
