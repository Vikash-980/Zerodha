const {Schema} = require("mongoose");

const OrdersSchema = Schema({
    name: String,
    qty : Number,
    price: Number,
    mode: String
});

module.exports = {OrdersSchema};