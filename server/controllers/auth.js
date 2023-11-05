// import bcrypt from "bcrypt";
// import { db } from "../connect.js"; // Import the database connection object

// export const register = (req, res) => {
//   // Check if the user already exists
//   const checkUserQuery = "SELECT * FROM users WHERE username = ?";
//   const username = req.body.username;

//   db.query(checkUserQuery, [username], (err, data) => {
//     if (err) {
//       return res.status(500).json(err);
//     }

//     if (data.length) {
//       return res.status(409).json("User already exists!");
//     }

//     // Create a new user
//     const saltRounds = 10;
//     bcrypt.genSalt(saltRounds, (saltErr, salt) => {
//       if (saltErr) {
//         return res.status(500).json(saltErr);
//       }

//       bcrypt.hash(req.body.password, salt, (hashErr, hashedPassword) => {
//         if (hashErr) {
//           return res.status(500).json(hashErr);
//         }

//         const insertUserQuery =
//           "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";

//         const userValues = [req.body.username, req.body.email, hashedPassword];

//         db.query(insertUserQuery, userValues, (insertErr, userData) => {
//           if (insertErr) {
//             return res.status(500).json(insertErr);
//           }

//           return res.status(200).json("User has been created.");
//         });
//       });
//     });
//   });
// };

import bcrypt from "bcrypt";
import { db } from "../connect.js"; // Import the database connection object

export const register = (req, res) => {
  // Check if the user already exists
  const checkUserQuery = "SELECT * FROM users WHERE username = ?";
  const username = req.body.username;

  db.query(checkUserQuery, [username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.length) {
      return res.status(409).json("User already exists!");
    }

    // Create a new user
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (saltErr, salt) => {
      if (saltErr) {
        return res.status(500).json(saltErr);
      }

      bcrypt.hash(req.body.password, salt, (hashErr, hashedPassword) => {
        if (hashErr) {
          return res.status(500).json(hashErr);
        }

        const insertUserQuery =
          "INSERT INTO users (username, email, salt, password_hash) VALUES (?, ?, ?, ?)";

        const userValues = [
          req.body.username,
          req.body.email,
          salt,
          hashedPassword,
        ];

        db.query(insertUserQuery, userValues, (insertErr, userData) => {
          if (insertErr) {
            return res.status(500).json(insertErr);
          }

          return res.status(200).json("User has been created.");
        });
      });
    });
  });
};
