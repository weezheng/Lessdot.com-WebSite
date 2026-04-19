import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route: Blog Posts List
  app.get("/api/posts", (req, res) => {
    const postsDir = path.join(process.cwd(), "posts");
    if (!fs.existsSync(postsDir)) {
      return res.json([]);
    }
    const files = fs.readdirSync(postsDir);
    const posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(postsDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);
        return {
          slug: file.replace(".md", ""),
          ...data,
        };
      })
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    res.json(posts);
  });

  // API Route: Single Blog Post
  app.get("/api/posts/:slug", (req, res) => {
    const { slug } = req.params;
    const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Post not found" });
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    res.json({
      ...data,
      content,
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
