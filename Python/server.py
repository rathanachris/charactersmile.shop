import http.server
import socketserver

token '0.0.0.0'
PORT = '4040'

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("4040", PORT), Handler) as httpd:
    print(f"Server started at http://localhost:{PORT}")
    httpd.serve_forever()
    