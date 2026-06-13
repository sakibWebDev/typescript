import app from "./app";

const bootstrap = () => {
    try {
        app.listen(5000, () => {
            console.log(`Server is running on http://localhost:5000`);
        });  // ← Missing closing parenthesis and semicolon for listen()
    } catch (error) {  // ← catch was inside the callback (wrong placement)
        console.error('Failed to start server:', error);
    }
};

bootstrap();