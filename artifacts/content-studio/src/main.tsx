import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { setAuthTokenGetter } from "@workspace/api-client-react";

const studioKey = import.meta.env.VITE_CONTENT_STUDIO_API_KEY as string | undefined;
if (studioKey) {
  setAuthTokenGetter(() => studioKey);
}

createRoot(document.getElementById("root")!).render(<App />);
