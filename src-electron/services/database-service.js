const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");
db.run("CREATE TABLE drives (name TEXT)");

export async function storeDrives(drives) {
  await db.run("DELETE FROM drives");

  for (let i = 0; i < drives.length; i++) {
    await db.run(
      "INSERT INTO drives VALUES (?)",
      `${drives[i].displayName || drives[i].device} - ${drives[i].description}`
    );
  }
}

export async function getDrives() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM drives", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}
