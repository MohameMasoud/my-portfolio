var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = 4e3;
app.use(import_express.default.json());
var getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new import_genai.GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
};
var MOHAMED_AI_SYSTEM_PROMPT = `
You are Mohamed's AI Assistant \u2014 a helpful, highly polite, technical representative for Mohamed Mahmoud Masoud.

About Mohamed Mahmoud Masoud:
- Role: Full Stack MERN Developer, Front-End Developer, Freelancer, Programming Instructor.
- Location: Egypt (Available for Remote work worldwide).
- Experience: 2+ Years of professional web development experience.
- Students Mentored: 150+ students in web development (React, Node, Express, MongoDB, JS).
- Projects Delivered: 15+ production-ready web applications.
- Key Tech Stack: React.js, Next.js, Redux Toolkit, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, Tailwind CSS, RESTful APIs, WebSockets (Socket.io), Docker, Git.
- Services Offered: Full Stack Web Development, Front-End UI/UX Engineering, Backend & Database API Optimization, 1-on-1 Mentorship & Code Reviews.
- Core Values: Quality Over Speed, User-Centric Thinking, Continuous Learning, Clean Code & SOLID principles.

Instructions for your responses:
- Respond accurately, professionally, and warmly.
- Keep answers clear, structured, and informative.
- If asked about hiring or rates, invite them to fill out the contact form or message Mohamed on WhatsApp or email (mohamed.masoud.dev@example.com).
- Support both English and Arabic depending on the language the user speaks to you in.
`;
app.post("/api/ai-assistant", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        reply: "Hello! I am Mohamed's AI Portfolio Assistant. Currently, the API key is being initialized. Meanwhile, Mohamed is a Full Stack MERN Developer with 3+ years experience, proficient in React, Node.js, Express, MongoDB, and PostgreSQL!",
        source: "fallback"
      });
    }
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: message,
      config: {
        systemInstruction: MOHAMED_AI_SYSTEM_PROMPT,
        temperature: 0.7
      }
    });
    const replyText = response.text || "Mohamed is available for exciting MERN stack projects! Feel free to reach out via the contact form.";
    return res.json({
      reply: replyText,
      source: "gemini"
    });
  } catch (err) {
    console.error("Error in /api/ai-assistant:", err);
    return res.status(500).json({
      reply: "Thank you for asking! Mohamed is a Full Stack MERN Developer specializing in React, Node.js, Express, and MongoDB. You can send him a direct message using the contact form below!",
      error: err?.message
    });
  }
});
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message, serviceInterest } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required fields." });
    }
    console.log(`[Contact Form Submission] From: ${name} (${email}), Subject: ${subject || "General"}, Service: ${serviceInterest || "N/A"}`);
    console.log(`[Message Content]: ${message}`);
    return res.json({
      success: true,
      message: "Your message has been received! Mohamed will get back to you within 24 hours."
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to process contact message." });
  }
});
app.get("/api/github-stats", async (req, res) => {
  try {
    return res.json({
      publicRepos: 28,
      totalCommits: 842,
      contributionsThisYear: 412,
      streakDays: 14,
      starsCount: 65,
      topLanguages: [
        { name: "TypeScript", percentage: 90, color: "#3178c6" },
        { name: "JavaScript", percentage: 8, color: "#f7df1e" },
        { name: "HTML / CSS", percentage: 1, color: "#e34c26" },
        { name: "Other", percentage: 1, color: "#6e7681" }
      ]
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch GitHub stats." });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\u{1F680} Mohamed Masoud Portfolio Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
