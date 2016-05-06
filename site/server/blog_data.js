/**
 * Created by djamr on 5/5/2016.
 */

/*
 * Each blog entry has its own data in this file. Easier to maintain than a database
 * The name of the object correlates with the name of the url id and the file name
 */

module.exports.blog_data = {

    linear_regression_tensorflow: {
        previewText: "For this blog post, it's assumed that the reader has a limited knowledge of machine learning and TensorFlow. The simple example of a linear regression formula is a good pathway to learning both fields. In this article, I'll go through the finished code a section at a time and explain (to a newbie like me) what is happening.",
        title: 'Simple Linear Regression with TensorFlow',
        timestamp: 'May 6th, 2016',
        image_name: 'rock_skip.jpg',
        id: 'linear_regression_tensorflow'
    },

    setting_up_express_handlebars: {
        title: 'Setting up express handlebars',
        timestamp: 'May 6th, 2016',
        image_name: 'rock_skip.jpg',
        id: 'setting_up_express_handlebars',
        previewText: "This blog post is meant to teach how to set up express-handlebars in an express and nodejs environment. For more advanced express-handlebars topics, such as if statements, loops, and helper functions, there should be a part 2 to this article soon."
    },

    ng_csv_for_csv_download: {
        title: 'Using ng-csv to download csv files',
        timestamp: 'May 6th, 2016',
        image_name: 'rock_skip.jpg',
        id: 'ng_csv_for_csv_download',
        previewText: "Covering how to use an AngularJS package to serve a csv download using JSON or array data. The only dependency that this package requires is ng-santize and ..."
    }

};
