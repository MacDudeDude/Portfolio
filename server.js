const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = 8000;

// Enable compression middleware (handles both gzip and deflate)
app.use(compression());

// For Brotli files (.br), set proper headers
app.use((req, res, next) => {
  if (req.path.endsWith('.br')) {
    // Determine the content type based on the original file
    if (req.path.includes('.js.br')) {
      res.setHeader('Content-Encoding', 'br');
      res.setHeader('Content-Type', 'application/javascript');
    } else if (req.path.includes('.data.br')) {
      res.setHeader('Content-Encoding', 'br');
      res.setHeader('Content-Type', 'application/octet-stream');
    } else if (req.path.includes('.wasm.br')) {
      res.setHeader('Content-Encoding', 'br');
      res.setHeader('Content-Type', 'application/wasm');
    }
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Open http://localhost:${PORT}/speed-creators.html to test`);
});
