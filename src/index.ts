import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.json({ message: 'Hello from Eurobase' }));

app.get('/health', (c) => c.json({ status: 'ok', time: new Date().toISOString() }));

export default app;
