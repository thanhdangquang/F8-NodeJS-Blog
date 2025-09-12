module.exports={
    //ham xu ly array
    MultipleMongooseToObject: function (mongooseArrays) {
        return mongooseArrays.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}