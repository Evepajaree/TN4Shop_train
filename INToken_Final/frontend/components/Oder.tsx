import React ,{useEffect,useState}from "react";
import { INToken__factory, Lock__factory ,INToken } from "../typechain-types";
import { Wallet as WalletContractType } from "../../typechain-types/contracts/wallet.sol/Wallet"
import {
  getProvider,
  getSigner,
  connectWallet
} from "../services/wallet-service";
import Collect from "./Collect";
import axios from "axios";
import { ethers, Wallet } from "ethers";
import {
  Web3Provider,
  JsonRpcSigner,
  JsonRpcProvider,
} from "@ethersproject/providers";

import Swal from 'sweetalert2';
import { TIMEOUT } from "dns";

let token = "0x0ea4a246ACCdD4662E8F294cFf62d049a3049065";
let signer: JsonRpcSigner | Wallet;




const apiEndpoint = 'http://localhost:8000'
const  Oder = (props) => {
  const [Datas,setDatas] = useState([])
  const [doNate, setDonate] = useState("");

  // async function donates() {
  
  //   const walletContract = new ethers.Contract(
  //     token,
  //     INToken__factory.abi,
  //     signer
  //   ) as WalletContractType;
  
  //   const tx = await walletContract.donate(doNate);
  //   console.log(tx.wait(), "-------donate");
  // }
  // donates()
  async function fetchDatas(){

  let tmp = await axios.get(apiEndpoint)
  // console.log('tmp',tmp.data);

  setDatas(tmp.data)      
 }

 async function putDatas(id:any){

  // console.log(id);
  // { favorite: true }
  await axios.put(`${apiEndpoint}/${id}`)

  await fetchDatas()
  
 }

 const addressContract = "0xF3808CC074cB025363b7cd44aDBF719C227913dF";
  
 const getLock = async () => {
   const signer = getSigner();
   const LockContract = Lock__factory.connect(addressContract,getProvider()).connect(signer);
   console.log(LockContract);
   LockContract.withdraw();
   
   //await swapContract.swapAforC("120")
 }

 const transactionParameters = {
  gasPrice: '0x035', // customizable by user during MetaMask confirmation.
  gas: '0x035', // customizable by user during MetaMask confirmation.
  to: '0xc62Fc418170A17c36191efC8e1b58a70Bda6cBf6', // Required except during contract publications.
  from: props.address, // must match user's active address.
  value: '0x00', // Only required to send ether to the recipient from the initiating external account.
  data:
    '0x0ea4a246ACCdD4662E8F294cFf62d049a3049065', // Optional, but used for defining smart contract creation and interaction.
  chainId: '0x4', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
};

const transaction = async(price)=>{
  console.log("Hello",price);
  const hexString = price.toString(16);
  console.log(hexString)
  function deley(){
    Swal.fire(
      'success'
    )
  }
  try {
    await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
  } catch (error) {
    console.log(error);
    
  }
  //setTimeout(deley,3000);
  
  
}


  useEffect(()=>{
  
    fetchDatas()

  },[])

  return (
<div className="flex justify-center  bg-gray-400 pt-6 pb-6">

    <div className="flex flex-row">
        
        {/* Card Section From Datas[] */}
        <div className="flex flex-row">
          {Datas.map((_contex,idx)=>(
            <div key={idx} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <div>
              {/* <img src={_contex.image} onClick={()=>getLock()}/> */}
              <img src={_contex.image} onClick={(e) => transaction(_contex.price)}/>
              </div>
              <div>Obj Id: {_contex.id}</div>
              <div>{_contex.favorite.toString()}</div>
              <div>Price: {_contex.price}</div>
              <button onClick={(e)=>putDatas(_contex.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
              </button>
              <input type="text" onChange={(e) => setDonate(e.target.value)} />
            </div>
          ))}
        </div>
            {/* End Card from Datas[] */}
        
        {/* <img
          className=" h-96  w-96 "
          src="/a1.jpg"
        />
        <img
         className=" h-96  w-96"
         src="/a2.jpg"
        
       />
       <img
         className=" h-96  w-96"
         src="/a3.jpg"
        
       /> */}

    </div>

</div>
  );
};

export default Oder;