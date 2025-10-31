import fs from "fs";
import csv from "csv-parser";
import fetch from "node-fetch";

const isDocker = fs.existsSync("/.dockerenv"); // Detect if running inside Docker
const host = process.env.BACKEND_HOST || (isDocker ? "backend" : "localhost");

const API_URL = `http://${host}:8080/api/signs`;
const AUTH = "Basic " + Buffer.from("admin:secret").toString("base64");

const HEADERS = ["latitude", "longitude", "heading", "type", "signValue"];

fs.createReadStream("Coding Challenge Sign Data.csv")
  .pipe(csv({ headers: HEADERS}))
  .on("data", async (row) => {
    const sign = {
      latitude: parseFloat(row.latitude),
      longitude: parseFloat(row.longitude),
      heading: parseFloat(row.heading),
      type: row.type,
      signValue: row.signValue
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": AUTH
        },
        body: JSON.stringify(sign)
      });
      console.log("Uploaded:", sign.type, sign.signValue, res.status);
    } catch (err) {
      console.error("Error uploading", sign, err.message);
    }
  })
  .on("end", () => {
    console.log("All observations uploaded successfully!");
  });