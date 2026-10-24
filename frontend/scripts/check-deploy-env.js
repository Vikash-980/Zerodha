const requiredVariables = ["REACT_APP_API_URL"];

if (process.env.VERCEL === "1") {
  const missingVariables = requiredVariables.filter(
    (variable) => !process.env[variable]
  );

  if (missingVariables.length > 0) {
    console.error(
      `Missing Vercel environment variables: ${missingVariables.join(", ")}`
    );
    process.exit(1);
  }
}
