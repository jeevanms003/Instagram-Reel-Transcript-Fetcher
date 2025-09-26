import express from "express";
import * as dotenv from "dotenv";
import { Supadata } from "@supadata/js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const supadata = new Supadata({ apiKey: process.env.SUPADATA_API_KEY! });

// List of languages you want to fetch
const desiredLanguages = ["en", "hi"];

app.get("/transcript", async (req, res) => {
  const url = req.query.url as string;

  if (!url) {
    return res.status(400).json({ error: "url query parameter is required" });
  }

  const results: Record<string, any> = {};

  for (const lang of desiredLanguages) {
    try {
      const transcript = await supadata.transcript({
        url,
        lang,
        text: true,
        mode: "auto",
      });
      results[lang] = transcript;
    } catch (error: any) {
      results[lang] = `Transcript not available in ${lang}`;
    }
  }

  res.json({ url, transcripts: results });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
