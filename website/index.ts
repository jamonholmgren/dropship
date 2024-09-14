import { serve } from "bun";

const PORT = 3000;

console.log(`Starting server on port ${PORT}`);

export function startServer() {
  serve({
    port: PORT,
    async fetch(req, server) {
      const url = new URL(req.url);

      if (url.pathname === "/") {
        return serveHtmlPage();
      }

      if (url.pathname === "/styles.css") {
        return serveStylesheet();
      }

      if (url.pathname === "/favicon.svg") {
        return serveFavicon();
      }

      return new Response("Not Found", { status: 404 });
    },
  });
}

async function serveHtmlPage() {
  return new Response(await Bun.file("index.html").text(), {
    headers: { "Content-Type": "text/html" },
  });
}

async function serveStylesheet() {
  return new Response(await Bun.file("styles.css").text(), {
    headers: { "Content-Type": "text/css" },
  });
}

async function serveFavicon() {
  return new Response(await Bun.file("favicon.svg").text(), {
    headers: { "Content-Type": "image/svg+xml" },
  });
}

startServer();
