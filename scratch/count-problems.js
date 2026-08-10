const { neon } = require("@neondatabase/serverless");

const url = "postgresql://neondb_owner:npg_ZuN7iebk2VLS@ep-rough-dew-aw69anu4-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const sql = neon(url);
sql`SELECT COUNT(*) as count FROM problems;`
  .then(res => {
    console.log("Problems count in DB:", res[0].count);
    process.exit(0);
  })
  .catch(err => {
    console.error("FAILURE:", err);
    process.exit(1);
  });
