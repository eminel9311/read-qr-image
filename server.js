const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

// Thiết lập tệp tĩnh để phục vụ tệp HTML
app.use(express.static(path.join(__dirname)));

// Định tuyến cho tệp index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
