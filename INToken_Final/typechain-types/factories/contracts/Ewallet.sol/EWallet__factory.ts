/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EWallet,
  EWalletInterface,
} from "../../../contracts/Ewallet.sol/EWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103a03803806103a0833981810160405281019061003291906100db565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610108565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100a88261007d565b9050919050565b6100b88161009d565b81146100c357600080fd5b50565b6000815190506100d5816100af565b92915050565b6000602082840312156100f1576100f0610078565b5b60006100ff848285016100c6565b91505092915050565b610289806101176000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f14faf6f14610030575b600080fd5b61004a6004803603810190610045919061013a565b61004c565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b81526004016100a9939291906101b7565b602060405180830381600087803b1580156100c357600080fd5b505af11580156100d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100fb9190610226565b5050565b600080fd5b6000819050919050565b61011781610104565b811461012257600080fd5b50565b6000813590506101348161010e565b92915050565b6000602082840312156101505761014f6100ff565b5b600061015e84828501610125565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061019282610167565b9050919050565b6101a281610187565b82525050565b6101b181610104565b82525050565b60006060820190506101cc6000830186610199565b6101d96020830185610199565b6101e660408301846101a8565b949350505050565b60008115159050919050565b610203816101ee565b811461020e57600080fd5b50565b600081519050610220816101fa565b92915050565b60006020828403121561023c5761023b6100ff565b5b600061024a84828501610211565b9150509291505056fea2646970667358221220d8d59fc0fd9610de364ac9e1c47e60708f5059527b4cf7c221c8ad3722d3567b64736f6c63430008090033";

type EWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EWallet__factory extends ContractFactory {
  constructor(...args: EWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EWallet> {
    return super.deploy(_addr, overrides || {}) as Promise<EWallet>;
  }
  override getDeployTransaction(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_addr, overrides || {});
  }
  override attach(address: string): EWallet {
    return super.attach(address) as EWallet;
  }
  override connect(signer: Signer): EWallet__factory {
    return super.connect(signer) as EWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EWalletInterface {
    return new utils.Interface(_abi) as EWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EWallet {
    return new Contract(address, _abi, signerOrProvider) as EWallet;
  }
}