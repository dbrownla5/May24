import { type Request, type Response, type NextFunction } from "express";

const STUDIO_KEY = process.env["CONTENT_STUDIO_API_KEY"];

export function requireStudioKey(req: Request, res: Response, next: NextFunction): void {
  if (!STUDIO_KEY) {
    res.status(503).json({ error: "Content Studio not configured" });
    return;
  }

  const auth = req.headers["authorization"] ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";

  if (token !== STUDIO_KEY) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  next();
}
