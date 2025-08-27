const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    // Remove query string and decode URL
    let filePath = decodeURI(req.url.split('?')[0]);
    
    // Default to index.html for root
    if (filePath === '/') {
        filePath = '/index.html';
    }
    
    // Get absolute file path
    const absolutePath = path.join(__dirname, filePath);
    
    // Get file extension
    const ext = path.extname(filePath).toLowerCase();
    
    // Get MIME type
    const contentType = mimeTypes[ext] || 'text/plain';
    
    // Read and serve the file
    fs.readFile(absolutePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>404 - Pagina Non Trovata</title>
                        <style>
                            body { 
                                font-family: Arial, sans-serif; 
                                text-align: center; 
                                padding: 50px; 
                                background: #0a0a0a; 
                                color: white; 
                            }
                            h1 { color: #00f2fe; }
                            a { color: #00f2fe; text-decoration: none; }
                            a:hover { text-decoration: underline; }
                        </style>
                    </head>
                    <body>
                        <h1>404 - Pagina Non Trovata</h1>
                        <p>La pagina richiesta non esiste.</p>
                        <p><a href="/">← Torna alla Home</a></p>
                    </body>
                    </html>
                `);
            } else {
                // Server error
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>500 - Errore Server</title>
                        <style>
                            body { 
                                font-family: Arial, sans-serif; 
                                text-align: center; 
                                padding: 50px; 
                                background: #0a0a0a; 
                                color: white; 
                            }
                            h1 { color: #ff6b6b; }
                        </style>
                    </head>
                    <body>
                        <h1>500 - Errore Server</h1>
                        <p>Si è verificato un errore interno del server.</p>
                    </body>
                    </html>
                `);
            }
            res.end();
            return;
        }
        
        // Serve the file
        res.writeHead(200, { 'Content-Type': contentType });
        res.write(data);
        res.end();
    });
});

server.listen(PORT, () => {
    console.log(`
🚀 Il Movimento - Landing Page Server
    
✅ Server avviato con successo!
🌐 URL: http://localhost:${PORT}
📁 Directory: ${__dirname}

⚡ Il movimento sta per iniziare... Apri il browser e vai su http://localhost:${PORT}
    
Per fermare il server: Ctrl+C
    `);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n🛑 Server fermato. Il movimento continuerà...\n');
    process.exit(0);
});
