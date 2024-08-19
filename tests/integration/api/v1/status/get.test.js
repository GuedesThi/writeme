test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("GET to /api/v1/status should return a updated_at date-time", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  const data = new Date(responseBody.updated_at).toISOString();

  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.updated_at).toEqual(data);
});

test("GET to /api/v1/status should return the database version", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.dependencies.database.version).toBeDefined();
});

test("GET to /api/v1/status should return the database connections", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.dependencies.database.max_connections).toBeDefined();
  expect(responseBody.dependencies.database.opened_connections).toBeDefined();

  expect(typeof responseBody.dependencies.database.max_connections).toBe(
    "number",
  );
  expect(typeof responseBody.dependencies.database.opened_connections).toBe(
    "number",
  );
});
