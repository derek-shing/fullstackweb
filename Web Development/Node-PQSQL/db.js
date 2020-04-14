console.log("Oracle");
const oracledb = require('oracledb');

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection(  {
      user          : "system",
      password      : "",
      connectString : "localhost:1521"
    });

    const result = await connection.execute(
      'SELECT * from employee'
 // bind value for :id
    );
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();
