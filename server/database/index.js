import mongoose from "mongoose";

const connectDatabase = () => {
  const connectString = process.env.CONNECT_STRING;
  return mongoose
    .connect(connectString)
    .then(() => {
      console.log("ket noi thanh cong");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default connectDatabase;
