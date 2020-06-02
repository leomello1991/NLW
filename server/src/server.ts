import express from 'express';

const app = express();

app.get('/users',(request, response)=>{
  console.log('listagem de usuario');

  response.json([
    'Leonardo',
    'Juliana',
    'Maria',
    'Lucilene'
  ])
});

app.listen(3333);