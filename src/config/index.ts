// Validate essential variables
const requiredEnvVars = ["MONGODB_URI"];
const excludedViewIps = (process.env.VIEW_TRACKING_EXCLUDED_IPS || "")
  .split(",")
  .map((ipAddress) => ipAddress.trim())
  .filter(Boolean);

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`Error: Missing required environment variable: ${varName}`);
    process.exit(1); // Exit if essential config is missing
  }
});

export const config = {
  mongoDB: {
    uri: process.env.MONGODB_URI!,
  },
  nodeEnv: process.env.NODE_ENV || "development",
  viewTracking: {
    excludedIps: excludedViewIps,
  },
};

// Optional: Freeze the config object to prevent modification
Object.freeze(config);
