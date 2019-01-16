const router = require("express").Router();
const sequelize = require("sequelize");

// import our pg client
const client = require("./client");
module.exports = router;

router.get("/input", (req, res) => {
    // use our client to get all of our input from our database 
    // by creating raw sql query to be passed to query method
  client.query("select * from input", (err, data) => {
      // log any errors that you encounter
    if (err) return console.log(err);
    // map over the array of returned rows and log them into your console
    data.rows.forEach(rowObject => {
      console.log(rowObject);
    });
    // send back via http response body the data
    res.send(data.rows);
  });
  return;
});

router.get("/input/:inputID", (req, res) => {
    var id = req.params.inputID;
    client.query(`select * from input where id='${id}'`, (err, data) => {
        
        if (err) return console.log(err);

        data.rows.forEach(rowObject => {
            console.log(rowObject);
        });
        res.send(data.rows);
    });
    return;
});

router.post("/input", (req, res) => {
    console.log('request from browser', req.body);
    // destructure the values you will need off of your response body
  const { input, length } = req.body;

//   client.query(
//       // use string interpolation to create sql query to insert values into db
//     `insert into input (input, length) values ('${input}', 
//     '${length}')`,
//     (err, data) => {
//       if (err) return console.error(err);
//       console.log(data);
//       // once successful, use query to get updated row from table
//       client.query(`select * from input where input='${input}'`, (err, data) => {
//         data.rows.forEach(rowObject => {
//           console.log(rowObject);
//         });
//         // send updated row back with 201 code
//         res.status(201).send(data.rows);
//       });
//     }
//   );

    res.send('hit post route for input')
  return;
});

router.delete("/input/:inputID", (req, res) => {
    var id = req.params.inputID;
    client.query(`delete from input where id='${id}'`, (err, data) => {
        if (err) return console.log(err);

        client.query("select * from input", (err, data) => {
            data.rows.forEach(rowObject => {
                console.log(rowObject);
            });
            res.send(data.rows);
        });
    }

    );
    return;
});