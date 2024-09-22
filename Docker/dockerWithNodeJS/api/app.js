const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Home Route'));

app.listen(PORT, () => console.log(`Server running on potr ${PORT}, http://localhost:${PORT}`));