import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config();

export const checkBalance = async():Promise<any>=>{
try {
    
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.rpcRinkebyURL));
const addressBalance = await web3.eth.getBalance(process.env.walletAddress);
console.log("Address Balance:",addressBalance);

} catch (error) {
    console.log("Error: ", error);
}

    
}
checkBalance().catch((error)=>{
console.log("Error: ", error);
process.exitCode=1;
})

