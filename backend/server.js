const express= reqire("express");
const app = express();
app.get("/", (req, res)=>{
res.send("Backend mache");
});
app.listen(5000, () => {
    console.log("serveur sou port 5000");
});