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

console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL);
sql`SELECT NOW();`
  .then(res => {
    console.log("SUCCESS: Connection successful! DB Time:", res[0].now);
    process.exit(0);
  })
  .catch(err => {
    console.error("FAILURE: Connection failed:", err);
    process.exit(1);
  });
