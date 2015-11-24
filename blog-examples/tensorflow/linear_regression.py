
import tensorflow as tf 
import numpy as np
import matplotlib.pyplot as plt  # used to show a graph of the data

# random data to find a formula from
trainX = np.asarray(np.linspace(0, 2, 30))
trainY = 2 * trainX + np.random.randn(trainX.shape[0]) * 0.33

# used in operations later
X = tf.placeholder("float")
Y = tf.placeholder("float")

# also used in operation later
m = tf.Variable(0., name="slope")		# some people call this 'weight'
b = tf.Variable(0., name="intercept")	# also, some people call this 'bias'

# this is just mX + b as defined in an operation
predicted_value = tf.add(tf.mul(X, m), b)

# trainX.shape[0] is the number of values in trainX
cost = tf.reduce_sum(tf.pow(predicted_value - Y, 2)) / (2 * trainX.shape[0]) # avg distance squared

learning_rate = .01
minimizer = tf.train.GradientDescentOptimizer(learning_rate).minimize(cost)

init = tf.initialize_all_variables()

with tf.Session() as sess:

    sess.run(init)

    for i in range(2500):
        for(x, y) in zip(trainX, trainY):
            sess.run(minimizer, feed_dict={X: x, Y: y})

    print "m = ", sess.run(m) 
    print "b = ", sess.run(b)

    #Display graph
    plt.plot(trainX, trainY, 'ro')
    plt.plot(trainX, sess.run(m) * trainX + sess.run(b))

    plt.show()

