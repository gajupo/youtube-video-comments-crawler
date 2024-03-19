import config from './config';
import app from './app';

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
