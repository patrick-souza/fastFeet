import app from './index';

app.listen(3333, () => {
  console.info(`Server ${process.env.NODE_ENV} running on port: 3333`);
});
