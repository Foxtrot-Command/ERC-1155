import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Ownable, OwnableInterface } from "../../utils/Ownable";
declare type OwnableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Ownable__factory extends ContractFactory {
    constructor(...args: OwnableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Ownable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Ownable;
    connect(signer: Signer): Ownable__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600080547fffffffffffffffffffffffff000000000000000000000000000000000000000016331780825560405173ffffffffffffffffffffffffffffffffffffffff9190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36102ac8061008e6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b1461006c575b600080fd5b6100436100a1565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61009f6004803603602081101561008257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100bd565b005b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff16331461012d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806102516026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610199576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610227602a913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c49445f414444524553534f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f545f4f574e4552a264697066735822122086e6b5488ca99d8aec3156a46b0a147e33bc55a01ba8cee404012c5472c01a8264736f6c63430007040033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): OwnableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ownable;
}
export {};
