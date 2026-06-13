import app from "./app";
import { envVars } from "./app/config/env";

const bootstrap = () => {
    try {
        app.listen(envVars.PORT, () => {
            console.log(`Server is running on http://localhost:${envVars.PORT}`);
            console.log(`Press CTRL + C to stop the server`, envVars.PORT,  envVars.NODE_ENV, envVars.DATABASE_URL);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}

bootstrap();