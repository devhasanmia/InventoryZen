import express, {Application, Request, Response} from 'express';
import cors from 'cors';
const app: Application = express()

// Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

// Routes

// Health endpoint
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is healthy',
    });
});


export default app;