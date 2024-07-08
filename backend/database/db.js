import { connect } from "mongoose";

const connectToMongo = async () => {
    try {
        await connect('mongodb+srv://techiesarjun1978:12345@cluster0.lyauklx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            dbName: "paymentGateway",
        });
        console.log("---***Database Connected Successfully***---")
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;