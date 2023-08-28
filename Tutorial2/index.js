const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  return res.send("hello Saksham");
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html_content = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
  res.send(html_content);
});

app.get("/users/:id", (req, res) => {
  const to_search = Number(req.params.id);
  const ans = users.find((users) => users.id === to_search);
  res.send(ans.first_name);
});

app.listen(port, () => {
  console.log("Server Started...");
});
