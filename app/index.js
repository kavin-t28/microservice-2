const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello from service1!'));

app.listen(PORT, () => console.log(`Service running on port ${PORT}`));
