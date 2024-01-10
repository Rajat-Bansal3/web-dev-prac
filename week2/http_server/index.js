const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnHealth = users[0].kidneys;
  let numberOfKidneys = johnHealth.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnHealth.length; i++) {
    if (johnHealth[i].healthy) numberOfHealthyKidneys++;
  }
  let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.send({ msg: "good to go" });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.send({});
});

app.delete("/", (req, res) => {
  const newKidneys = [];
  if (users[0].kidneys.length <= 1) {
    res.json({ msg: "not Enough Kidneys" });
  } else {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.send({ msg: "ok" });
  }
});

app.listen(port);
