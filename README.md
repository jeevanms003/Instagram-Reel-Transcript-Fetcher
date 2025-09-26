# Instagram Reel Transcript Fetcher

Instagram Reel Transcript Fetcher is a simple Node.js application built with Express.js that retrieves transcripts for Instagram Reels using the `@supadata/js` library.  
The application exposes a RESTful API endpoint to fetch transcripts in specified languages (English and Hindi by default) for a given Instagram Reel URL.

---

## Features

- Fetch Instagram Reel transcripts in multiple languages (English and Hindi by default).  
- Returns transcript data as JSON including:
  - `content` → the transcript text  
  - `lang` → language code  
  - `availableLangs` → list of available languages  
- Handles cases where transcripts are unavailable for a specified language.  
- Simple and lightweight Express.js server.

---

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v16 or higher recommended)  
- npm (Node Package Manager)  
- A valid **Supadata API Key**  

---

## Installation

1. **Clone the repository** (or create a new project directory):

```bash
git clone <Instagram-Reel-Transcript-Fetcher>
cd Instagram-Reel-Transcript-Fetcher
```
2. **Install dependencies:**

```bash
npm install express @supadata/js dotenv typescript @types/express @types/node
```

3. **Set up TypeScript:**

- Ensure a tsconfig.json file exists in the project root. If not, create one with the following content:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["*.ts"],
  "exclude": ["node_modules"]
}
```

4. **Create .env file in the root directory:**
```env
SUPADATA_API_KEY=your_api_key_here
PORT=3000
```

5. **Save the application code as index.ts in the project directory.**

---

##Usage

**Start the server**

- Compile the TypeScript code and run the server:

```cmd
npx ts-node index.ts
```

**The server will start at:**
```cmd
http://localhost:3000
```
---

##Fetch a transcript

**Make a GET request to the /transcript endpoint with a url query parameter.**

-Example:

```cmd
curl "http://localhost:3000/transcript?url=https://www.instagram.com/reel/REEL_ID/"
```

**Replace REEL_ID with a valid Instagram Reel ID (e.g., https://www.instagram.com/reel/DEDbGqpyfkT/).**

---

##Response format

**The API returns a JSON object with the Reel URL and transcript data for each language:**

```json
{
  "url": "https://www.instagram.com/reel/DEDbGqpyfkT/",
  "transcripts": {
    "en": { "content": "These stretchy metals can cool their surroundings...", "lang": "en", "availableLangs": ["en"] },
    "hi": "Transcript not available in hi"
  }
}
```
---

##Error handling

**If url is not provided, the API returns a 400 status code:**

```json
{ "error": "url query parameter is required" }
```

**If a transcript is unavailable for a language, the response includes:**

```json
"Transcript not available in <lang>"
```
---

##API Endpoint
```cmd
- GET /transcript
```
---

##Query Parameter

**url (string, required) – The full Instagram Reel URL.**

- Example:

```cmd
curl "http://localhost:3000/transcript?url=https://www.instagram.com/reel/DEDbGqpyfkT/"
```

- Example Response

```json
{
  "url": "https://www.instagram.com/reel/DEDbGqpyfkT/",
  "transcripts": {
    "en": { "content": "These stretchy metals can cool their surroundings...", "lang": "en", "availableLangs": ["en"] },
    "hi": "Transcript not available in hi"
  }
}
```