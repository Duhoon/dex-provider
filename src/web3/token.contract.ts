import { Contract, Provider, formatUnits, parseUnits } from 'ethers';
import * as abi from './ERC20ABI.json';
import { Token } from 'src/types';

export class TokenContract {
  readonly contract: Contract;
  readonly symbol: string;
  readonly decimals: number;

  constructor(token: Token, provider: Provider) {
    this.contract = new Contract(token.address, abi, provider);
    this.symbol = token.symbol;
    this.decimals = token.decimals;
  }

  async balance(address: string): Promise<string> {
    const balanceRaw = (await this.contract.balance(address)) as bigint;
    return formatUnits(balanceRaw, this.decimals);
  }

  async approve(spender: string, amount: number): Promise<void> {
    const amountFormated = parseUnits(amount.toString(), this.decimals);
    await this.contract.approve(spender, amountFormated);
  }

  async transfer(
    from: string,
    to: string,
    amount: number,
    callback?: (...args: any[]) => any,
  ) {
    await this.contract.transfer(from, to, amount);

    if (callback) callback();
  }

  getContract(): Contract {
    return this.contract;
  }
}
