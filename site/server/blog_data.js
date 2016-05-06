/**
 * Created by djamr on 5/5/2016.
 */

/*
 * Each blog entry has its own data in this file. Easier to maintain than a database
 * The name of the object correlates with the name of the url id and the file name
 */

module.exports.blog_data = {

    test: {
        title: 'The First Sample Article',
        timestamp: 'May 6th, 2016',
        image_name: 'rock_skip.jpg',
        id: 'test'
    },

    linear_regression_tensorflow: {
        title: 'Simple Linear Regression with TensorFlow',
        timestamp: 'May 6th, 2016',
        image_name: 'rock_skip.jpg',
        id: 'linear_regression_tensorflow'
    }

};
