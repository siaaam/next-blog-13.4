import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO as any);
  } catch (err) {
    throw new Error("Connection Failed!");
  }
};

export default connect;
