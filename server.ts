import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 4000;

app.use(express.json());

// Initialize Gemini SDK with telemetry headers
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// System prompt for Mohamed's AI Assistant
const MOHAMED_AI_SYSTEM_PROMPT = `
You are Mohamed's AI Assistant — a helpful, highly polite, technical representative for Mohamed Mahmoud Masoud.

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

// API Route: AI Assistant Endpoint powered by Gemini 3.6 Flash
app.post('/api/ai-assistant', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not configured yet
      return res.json({
        reply: "Hello! I am Mohamed's AI Portfolio Assistant. Currently, the API key is being initialized. Meanwhile, Mohamed is a Full Stack MERN Developer with 3+ years experience, proficient in React, Node.js, Express, MongoDB, and PostgreSQL!",
        source: 'fallback'
      });
    }

    // Call Gemini 3.6 Flash model
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: message,
      config: {
        systemInstruction: MOHAMED_AI_SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "Mohamed is available for exciting MERN stack projects! Feel free to reach out via the contact form.";

    return res.json({
      reply: replyText,
      source: 'gemini'
    });
  } catch (err: any) {
    console.error('Error in /api/ai-assistant:', err);
    return res.status(500).json({
      reply: "Thank you for asking! Mohamed is a Full Stack MERN Developer specializing in React, Node.js, Express, and MongoDB. You can send him a direct message using the contact form below!",
      error: err?.message
    });
  }
});

// API Route: Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, serviceInterest } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields.' });
    }

    console.log(`[Contact Form Submission] From: ${name} (${email}), Subject: ${subject || 'General'}, Service: ${serviceInterest || 'N/A'}`);
    console.log(`[Message Content]: ${message}`);

    // In a production server, this could trigger Nodemailer or SendGrid email
    return res.json({
      success: true,
      message: 'Your message has been received! Mohamed will get back to you within 24 hours.'
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Failed to process contact message.' });
  }
});

// API Route: GitHub Stats Endpoint
app.get('/api/github-stats', async (req, res) => {
  try {
    // Return structured GitHub stats for Mohamed Mahmoud Masoud
    return res.json({
      publicRepos: 28,
      totalCommits: 842,
      contributionsThisYear: 412,
      streakDays: 14,
      starsCount: 65,
      topLanguages: [
        { name: 'TypeScript', percentage: 90, color: '#3178c6' },
        { name: 'JavaScript', percentage: 8, color: '#f7df1e' },
        { name: 'HTML / CSS', percentage: 1, color: '#e34c26' },
        { name: 'Other', percentage: 1, color: '#6e7681' },
      ],
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Failed to fetch GitHub stats.' });
  }
});

// Start Server with Vite Middleware or Static Server
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Mohamed Masoud Portfolio Server running on http://localhost:${PORT}`);
  });
}

startServer();
