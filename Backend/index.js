const port = require('./config/config').port;
const express = require('express');
const app = express();
app.use(require('cors')());
app.use(require('body-parser').json());

app.use('/tweets', require('./apiTwitter/Controllers/TweetsControllers'));

app.listen(port, () => console.log(`Server running on port ${port}...`));
