// const R = require('ramda');

// var square = n => n * n;

// R.maxBy(square, -3, 2); //=> -3

// const result = R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
// const result1 = R.reduce(R.maxBy(square), 0, []);
 
// console.log(result);
// console.log(result1);

// const http = require('http');
// const host = '127.0.0.1';
// const port = 8000;


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Test http-server');
// });

// server.listen(port, host, (err) => {
//     console.log(`Server running at http://${host}:${port}`)
// })


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let following = require('./data')


app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Welcome to fake Json API'))
app.get('/api/following', function(req, res){
    res.send(following)
})

const addFollowing = (list, item) => {
    list.push(item)
    return list
}

app.post('/api/following', (req, res) =>{
    const newFollowing = req.body
    const newItemFollowing = addFollowing(following, newFollowing)
    following = newItemFollowing
    res.send(following)
})

app.listen(3000,() => console.log('App listen in port 3000'))