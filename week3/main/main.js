const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/", (req, res) => {
  const kidneys = req.body.kidneys;
  const data = schema.safeParse(kidneys);

  res.json({
    data: data,
  });
});

app.listen(port);
