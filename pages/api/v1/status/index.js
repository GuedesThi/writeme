import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const versionRes = await database.query("SHOW server_version;");
  const maxRes = await database.query("SHOW max_connections;");
  const openRes = await database.query(
    "SELECT count(*) FROM pg_stat_activity WHERE datname = 'local_db';",
  );

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        max_connections: parseInt(maxRes.rows[0].max_connections),
        opened_connections: parseInt(openRes.rows[0].count),
        version: versionRes.rows[0].server_version,
      },
    },
  });
}

export default status;
