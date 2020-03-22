const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);
/*Mongoose supports this connect method,
which takes the URL as the first parameter.
So once we have established this,
then we simply say connect then.
Note that since we are already using promises,
we can just say connect then and then this will take
a function as the parameter
and inside here we can now connect to the database
*/ 
connect.then((db) => {

    console.log('Connected correctly to server');

    var newDish = Dishes({
        name: 'Chilli Chicken',
        description: 'Chineese'
    });

    newDish.save()
        .then((dish) => {
            console.log(dish);

            return Dishes.find({}); // finding and returning all dishes
        })
        .then((dishes) => {
            console.log(dishes);

            return Dishes.remove({}); // removing all dishes
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });

});