import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  // Find the absolute path of the "json" directory
  const jsonDirectory = path.join(process.cwd(), "json");
  console.log("🚀 ~ handler ~ jsonDirectory:", jsonDirectory);
  // Read the "data.json" file
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  console.log("🚀 ~ handler ~ jsonDirectory:", jsonDirectory);
  // Return the content of the data file in JSON format
  res.status(200).json(JSON.parse(fileContents));
}
