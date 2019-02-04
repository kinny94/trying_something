import express from 'express';
import cors from cors;

const app = express();

app.use(cors());

app.get('/files/text.txt', (req, res) => {
  res.send(data);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
