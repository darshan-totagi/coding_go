const { neon } = require("@neondatabase/serverless");

// Use the global environment variable DATABASE_URL
const url = "postgresql://neondb_owner:npg_IDQxH2uNTX4o@ep-purple-dream-airowkgo-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

console.log("Connecting to:", url.split("@")[1]);

const sql = neon(url);
sql`SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public';`
  .then(res => {
    console.log("SUCCESS: Public tables found:", res.map(r => r.tablename));
    if (res.some(r => r.tablename === 'users')) {
      return sql`SELECT id, name, email FROM users;`;
    }
    return [];
  })
  .then(users => {
    console.log("Users in DB:", users);
    process.exit(0);
  })
  .catch(err => {
    console.error("FAILURE:", err);
    process.exit(1);
  });
