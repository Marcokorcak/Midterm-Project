const Pool = require("pg").Pool;
//const DATABASE_URL = "postgres://avtzxcqvqboxyy:cd2229bf6bb4dab2d170a236ceabf6693d9cb7ab1d7d85304e4732e99662948f@ec2-34-205-46-149.compute-1.amazonaws.com:5432/de3i1qjcqnaunj";

const pool = new Pool({
  user: "justinzaluk",
  password: "8934",
  host: "localhost",
  port: 5432,
  database: "bank",
});

//  const pool = new Pool({
//    connectionString: process.env.DATABASE_URL,
//    ssl: {
//      rejectUnauthorized: false
//    },
//    User: "avtzxcqvqboxyy",
//    Password: "cd2229bf6bb4dab2d170a236ceabf6693d9cb7ab1d7d85304e4732e99662948f",
//    Host: "ec2-34-205-46-149.compute-1.amazonaws.com",
//    Database: "de3i1qjcqnaunj"
//  });

let currentUser = 1; //placeholder variable for current user id

//users table functions//
//create a user
const signup = async (req, res) => {
  //signup page
  try {
    const { username, email, passwd } = req.body;
    let errors = {};

    const isEmailInUse = await pool.query(
      "SELECT * FROM users WHERE email = $1", //checks if email is in use
      [email]
    );

    if (isEmailInUse.rows.length > 0) {
      errors.email = "Email is already in use";
    }

    const isUsernameInUse = await pool.query(
      "SELECT * FROM users WHERE username = $1", //checks if email is in use
      [username]
    );

    if (isUsernameInUse.rows.length > 0) {
      errors.username = "Username is already in use";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const newUser = await pool.query(
      "INSERT INTO users (username, email, passwd) VALUES ($1, $2, $3) RETURNING *", //inserts data into users table
      [username, email, passwd]
    );

    res.json({ sucess: true, data: newUser.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//login

const login = async (req, res) => {
  //validates user with users table
  try {
    const { username, passwd } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (user.rows.length === 0) {
      return res.status(404).json({
        error: {
          message: "User not found", //checks user and displays message if not found
        },
      });
    }
    if (!(passwd === user.rows[0].passwd)) {
      return res.status(401).json({
        error: {
          message: "Incorrect password", //checks if password is incorrect and prints message
        },
      });
    }
    currentUser = user.rows[0].user_id; //grab current user id when logging in, used for joint table
    console.log(currentUser);
    res.status(200).json({ success: true }); //user logged in successfully
  } catch (err) {
    res.status(500).send("Server Error"); //server error
  }
};

//Account functions//
const randNumRouting = Math.floor(100000 + Math.random() * 900000);

//CONNECTED WITH JOINT
const addCheckingAccount = async (req, res) => {
  try {
    //1 is checking account, 2 is savings
    const randNumAccount = Math.floor(100000 + Math.random() * 900000);

    const balance = 1000;
    const account_number = randNumAccount;
    const routing_number = randNumRouting;
    const type_account = 1;

    const newCheckingAccount = await pool.query(
      "INSERT INTO account (balance, account_number, routing_number, type_account) VALUES($1, $2, $3, $4) RETURNING *",
      [balance, account_number, routing_number, type_account]
    );

    const newJointAccount = await pool.query(
      "INSERT INTO joint (user_id_FK, account_id_FK) VALUES ($1, $2)",
      [currentUser, account.rows[0].account_id]
    );

    console.log(currentUser);
    res.json(newrows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const addSavingsAccount = async (req, res) => {
  try {
    //1 is checking account, 2 is savings
    const randNumAccount = Math.floor(100000 + Math.random() * 900000);

    const balance = 100;
    const account_number = randNumAccount;
    const routing_number = randNumRouting;
    const type_account = 2;

    const newCheckingAccount = await pool.query(
      "INSERT INTO account (balance, account_number, routing_number, type_account) VALUES($1, $2, $3, $4) RETURNING *",
      [balance, account_number, routing_number, type_account]
    );

    const newJointAccount = await pool.query(
      "INSERT INTO joint (user_id_FK, account_id_FK) VALUES ($1, $2)",
      [currentUser, account.rows[0].account_id]
    );

    console.log(currentUser);
    res.json(newrows[0]);
  } catch (err) {
    console.error(err.message);
  }
};
const getCheckingAccount = async (req, res) => {
  try {
    const getJointAccount = await pool.query(
      "SELECT account_id_FK FROM joint WHERE user_id_FK = $1",
      [currentUser]
    );

    let jointAccountLength = getJointAccount.rows.length;

    let array = [];
    let array2 = [];

    for (let i = 0; i < jointAccountLength; i++) {
      array[i] = getJointAccount.rows[i].account_id_fk;
      // console.log(array[i]);
    }

    let arrString = array.toString();

    console.log(arrString);

    const getAllUserAccount = await pool.query(
      "SELECT * FROM account WHERE type_account = 1 AND account_id IN (" +
        arrString +
        ") "
    );

    res.json(getAllUserAccount.rows);
    console.log(array);
    console.log(array2);
  } catch (err) {
    console.error(err.message);
  }
};

const getSavingsAccount = async (req, res) => {
  try {
    const getJointAccount = await pool.query(
      "SELECT account_id_FK FROM joint WHERE user_id_FK = $1",
      [currentUser]
    );

    let jointAccountLength = getJointAccount.rows.length;

    let array = [];
    let array2 = [];

    for (let i = 0; i < jointAccountLength; i++) {
      array[i] = getJointAccount.rows[i].account_id_fk;
    }

    let arrString = array.toString();

    console.log(arrString);

    const getAllUserAccount = await pool.query(
      "SELECT * FROM account WHERE type_account = 2 AND account_id IN (" +
        arrString +
        ") "
    );

    res.json(getAllUserAccount.rows);
    console.log(array);
    console.log(array2);
  } catch (err) {
    console.error(err.message);
  }
};

const incrementAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { balance } = req.body;
    await pool.query(
      "UPDATE account SET balance = (balance + $1) WHERE account_id = $2",
      [balance, id]
    );
    const account = await pool.query(
      "SELECT * FROM account WHERE account_id = $1",
      [id]
    );
    res.json(account.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const decrementAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { balance } = req.body;

    const account = await pool.query(
      "SELECT * FROM account WHERE account_id = $1",
      [id]
    );

    const newBal = account.rows[0].balance - balance;

    if (newBal < 0) {
      return res.status(401).json({
        error: {
          message: "You do not Have Sufficient Funds for this Withdrawal.", //checks if password is incorrect and prints message
        },
      });
    } else {
      await pool.query(
        "UPDATE account SET balance = (balance - $1) WHERE account_id = $2",
        [balance, id]
      );
    }
    res.json(account.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const updateSettings = async (req, res) => {
  try {
    const { username, email, passwd } = req.body;


   
      await pool.query(
        "UPDATE users SET username = $1, email = $2, passwd = $3 WHERE user_id = $4",
        [username, email, passwd, currentUser]
      );

      res.status(200).json({ success: true });
    
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  signup,
  login,
  addCheckingAccount,
  addSavingsAccount,
  getCheckingAccount,
  getSavingsAccount,
  incrementAccount,
  decrementAccount,
  updateSettings,
  pool,
}; //export all modules
