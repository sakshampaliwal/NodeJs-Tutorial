const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  return res.send("hello Saksham");
});

app.post("/api/users", (req, res) => {
    return res.send({status : "Pending"})
})

app.route("/api/users/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const user = users.find((user)=> user.id===id);
    return res.send(user.first_name);
})
.patch((req,res)=>{
    return res.json({ status: "Pending" });
})
.delete((req,res)=>{
    return res.json({ status: "Pending" });
})


app.listen(port, () => {
  console.log("Server Started...");
});
