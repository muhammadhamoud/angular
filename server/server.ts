const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');
// console.log(path.join(__dirname, 'db.json'))

server.use(middlewares);
server.use(jsonServer.bodyParser);

interface User {
  email: string;
  password: string;
  // Add more properties if available
};

server.post('/login', (req: any, res:any, next:any) => { 
  const users = readUsers();
  const user = users.filter(
    (u: User) => u.email === req.body.email && u.password === req.body.password
  )[0];

  if (user) {
    res.send({ ...formatUser(user), token: checkIfAdmin(user) });
  } else {
    res.status(401).send('Incorrect username or password');
  }
});

server.post('/register', (req: any, res: any) => {
  const users = readUsers();
  const user = users.filter(u => u.email === req.body.email)[0];
  console.log(user)
  if (user === undefined || user === null) {
    res.send({
      ...formatUser(req.body),
      token: checkIfAdmin(req.body)
    });
    db.users.push(req.body);
  } else {
    res.status(500).send('User already exists');
  }
});

server.use('/users', (req:any, res:any, next:any) => {
  console.log(isAuthorized(req))
  if (isAuthorized(req) || req.query.bypassAuth === 'true') {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});

function formatUser(user: any) {
  delete user.password;
  user.role = user.email === 'admin'
    ? 'admin'
    : 'user';
  return user;
}

function checkIfAdmin(user:any, bypassToken = false) {
  return user.username === 'admin' || bypassToken === true
    ? 'admin-token'
    : 'user-token';
}

function isAuthorized(req:any) {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.split(' ')[1];
    return authorizationHeader.split(' ')[1] === 'admin-token' ? true : false;
    // req.headers.authorization
  } else {
    return req.headers.authorization === 'admin-token' ? true : false;
  }
  
}

// function readUsers() {
//   const dbRaw = fs.readFileSync('./server/db.json');  
//   const users = JSON.parse(dbRaw).users
//   return users;
// }

function readUsers(): User[] {
  const dbRaw = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
  const users: User[] = JSON.parse(dbRaw).users;
  console.log(users)
  return users;
}