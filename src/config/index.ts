import dotenv from "dotenv";

// Load .env file
dotenv.config();

// Validate essential variables
const requiredEnvVars = ["MONGODB_URI", "REDIS_URL"];

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
};

// Optional: Freeze the config object to prevent modification
Object.freeze(config);
