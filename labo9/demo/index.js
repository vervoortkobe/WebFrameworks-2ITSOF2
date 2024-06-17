const express = require("express");
const { statSync } = require("fs");
const app = express();

let people = [
  {
    ID: 1,
    Name: "McEnroe",
    Firstname: "John",
  },
  {
    ID: 2,
    Name: "Smith",
    Firstname: "Will",
  },
];

const router = express.router();
router
  .router("/people")
  .get((res, res) => {
    //res.json(people);
    let query = req.query;
  })
  .post((req, res) => {
    let query = req.query;
    d;
  })
  .delete((req, res) => {
    let query = req.query;
  });

router
  .route("/people/:id")
  .get((req, res) => {
    //res.json(people.filter((person) => person.id === +req.params.id)[0]);
    let id = req.params.id;
    let query = { '_id': ObjectId(id) };
    db.collection("people")
      .find(query)
      .toArray((err, persons) => {
        res.json(persons);
      });
  })
  .put((req, res) => {
    let id = req.params.id;
    let query = { '_id': ObjectId(id) };
    db.collection("people").update(query, req.body, (err, result) => {
      if(err != null) return res.statusCode("500");
      db.collection("people").find(query).toArray((err, people) => {
        if(err != null) return statusCode("500");
        res.json(people);
      });
    });
  })
  .delete((req, res) => {
    let id = req.params.id;
    let query = { '_id': ObjectId(id) };
    db.collection("people").deleteOne(query).toArray((err, persons) => {
      res.end();
    });
  });

app.use("/api", router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
