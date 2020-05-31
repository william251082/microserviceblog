const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes} = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
// example posts data structure
// posts === {
//     'werqwe': {
//         id: 'wqwe232',
//         title: 'ygvhbjnk',
//         comments: [
//             id: '12fdge',
//             content: 'comment!'
//         ]
//     }
// }


app.get('/posts', (req, res) => {
    res.send(posts);
});
app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;

        posts[id] = { id, title, comments: []};
    }

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;

        const post = posts[postId];
        post.comments.push({ id, content })
    }
debugger;
    console.log(posts);

    res.send({});
});

app.listen(4002, () => {
    console.log('Listening on 4002 query')
});

