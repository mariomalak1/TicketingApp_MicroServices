import mongoose from "mongoose"


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect((process.env.MONGO_URI) as string)

    console.info(`MongoDB Connected on host: ${conn.connection.host} - Database: ${conn.connection.name}`)

    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`)
    })

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected')
    })

    mongoose.connection.on('reconnected', () => {
      console.info('MongoDB reconnected')
    })

    process.on('SIGINT', async () => {
      await mongoose.connection.close()
      console.info('MongoDB connection closed through app termination')
      process.exit(0)
    })
  } catch (error: any) {
    console.error(`Database connection failed: ${error.message}`)

    // More specific error handling for cloud databases
    if (error.name === 'MongoNetworkError') {
      console.error('Network error - check your internet connection and MongoDB Atlas whitelist')
    } else if (error.name === 'MongoParseError') {
      console.error('Connection string error - check your MONGO_URI format')
    } else if (error.name === 'MongoServerSelectionError') {
      console.error('Server selection error - check MongoDB Atlas cluster status')
    }

    // Don't exit in development mode - continue without database
    if (process.env.NODE_ENV === 'production') {
      process.exit(1)
    }
  }
}

export default mongoose;
