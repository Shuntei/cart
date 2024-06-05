import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import db from "./utils/mysql2-connect.js";
import bcrypt from "bcryptjs";

const app = express();
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    callback(null, true);
  },
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  const auth = req.get("Authorization");
  console.log("auth: ", auth);
  if (auth && auth.indexOf("Bearer ") === 0) {
    const token = auth.slice(7);
    console.log(token);
    try {
      req.my_jwt = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
      console.log("error: ", e);
    }
  }

  next();
});

app.post("/login-jwt", async (req, res) => {
  let { account, password } = req.body || {};
  console.log(account, password);

  const output = {
    success: false,
    error: "",
    code: 0,
    data: {
      id: 0,
      account: "",
      password: "",
      token: "",
    },
  };

  if (!account || !password) {
    output.error = "欄位資料不足";
    output.code = 400;
    return res.json(output);
  }

  account = account.trim();
  password = password.trim();

  const sql = "SELECT * FROM `mb_user` WHERE username=?";
  const [rows] = await db.query(sql, [account]);
  // console.log(rows);

  if (!rows.length) {
    output.error = "帳號或密碼錯誤";
    output.code = 420;
    return res.json(output);
  }

  const row = rows[0];
  const result = await bcrypt.compare(password, row.password);
  console.log(result);

  if (result) {
    output.success = true;

    const token = jwt.sign(
      {
        id: row.id,
        account: row.username,
      },
      process.env.JWT_SECRET
    );

    output.data = {
      id: row.id,
      email: row.email,
      username: account,
      token,
      cartItems: req.body,
    };
  } else {
    output.error = "帳號或密碼錯誤";
    output.code = 450;
  }
  // console.log("output data: ", output.data);
  res.json(output);
});

app.post("/api/cart", async (req, res) => {
  console.log(req.body);
});

const port = process.env.WEB_PORT || 3002;
app.listen(port, () => {
  console.log(`伺服器啟動,使用通訊埠${port}`);
});
