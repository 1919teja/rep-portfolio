import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";

// ES Module replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          error: "Failed to submit contact form" 
        });
      }
    }
  });
  app.use('/attached_assets', express.static('attached_assets'));

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const filePath = path.join(__dirname, "../attached_assets/Saiteja_Kottapally_Resume.pdf");
    res.download(filePath, "Saiteja_Kottapally_Resume.pdf");
  });
  

  const httpServer = createServer(app);
  return httpServer;
}
