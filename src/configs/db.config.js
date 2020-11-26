import mongoose from 'mongoose';

const mongoConnection = (url) => {
	mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
		.then(() => console.log(`Database ${process.env.MONGODB_URI} connected`))
		.catch((err) => console.log(err));
}

export default mongoConnection;