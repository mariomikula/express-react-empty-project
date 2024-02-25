// Import express, cors, helmet and morgan
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import router from './routes';

// Create Express server
const app = express(); // New express instance
const port = 5000; // Port number

// Express configuration
app.use(cors()); // Enable CORS
//app.use(helmet()); // Enable Helmet // TODO: unsafe-inline
app.use(morgan('dev')); // Enable Morgan
app.use(express.json()); // <=== Enable JSON body parser

app.use(express.static(path.join(__dirname, '../public')));

// Use routes
app.use('/', router);

// Start Express server
app.listen(port, () => {
  // Callback function when server is successfully started
  console.log(`Server started at http://localhost:${port}`);
});

// Export Express app
export default app;