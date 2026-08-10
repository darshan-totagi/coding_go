const { neon } = require("@neondatabase/serverless");
const fs = require("fs");
const path = require("path");

const envLocalPath = path.join(__dirname, "..", ".env.local");
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, "utf-8");
  envContent.split("\n").forEach(line => {
    const match = line.match(/^\s*([^#=]+)\s*=\s*(.*)$/);
    if (match) {
      let key = match[1].trim();
      let val = match[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1);
      }
      process.env[key] = val;
    }
  });
}

console.log("Connecting to:", process.env.DATABASE_URL.split("@")[1]);

const sql = neon(process.env.DATABASE_URL);
sql`SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public';`
  .then(res => {
    console.log("SUCCESS: Public tables found:", res.map(r => r.tablename));
    return sql`SELECT COUNT(*) as count FROM users;`;
  })
  .then(res => {
    console.log("Users count in DB:", res[0].count);
    process.exit(0);
  })
  .catch(err => {
    console.error("FAILURE:", err);
    process.exit(1);
  });
