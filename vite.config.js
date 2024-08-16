import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "watch-frag-vert",
      handleHotUpdate({ file, server }) {
        if (file.endsWith(".frag") || file.endsWith(".vert")) {
          server.ws.send({
            type: "full-reload",
            path: "*",
          });
        }
      },
    },
  ],
});
