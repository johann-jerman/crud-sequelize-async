const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(methodOverride('_method'));

app.use(mainRoutes);
app.use('/product', productRoutes);
// app.use('/user', userRoutes);

app.listen(PORT, ()=>{
    console.log(
        `server corriendo en http://localhost:${PORT}`
    );
});