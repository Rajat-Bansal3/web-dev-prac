import pg from "pg";
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'pass123',
});
async function insertData() {
  
    try {
      await client.connect();
      const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
      const res = await client.query(insertQuery);
      console.log('Insertion success:', res);
    } catch (err) {
      console.error('Error during the insertion:', err);
    } finally {
      await client.end();
    }
  }
  async function getUser(email:String) {
    try {
        await client.connect()
        const getQuery = "select * from users where email = $1"
        const res = await client.query(getQuery , [email])
        console.log(res.rows)
    } catch (error) {
        console.log(error)
    }finally{
        client.end()
    }
  }
//   insertData();
getUser("RAJJOBHAI123@gmail.com")