
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";



const app: Application = express();

// ✅ FIRST → body পার্স করো
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ CORS
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:5000"
    ],
    credentials: true,
}));


// ✅ Test route
app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'API is working',
    });
});



export default app;