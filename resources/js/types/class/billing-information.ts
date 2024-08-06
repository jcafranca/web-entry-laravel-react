import { IAccounts } from "../accounts";
import { IReferences } from "../references";

export class BillingInformation {
    accounts: IAccounts[];
    references: IReferences;
    instructions: any;
    items: any;

    constructor(accounts: IAccounts[], references: IReferences, instruction: any = [], items: any = []) {
        this.accounts = accounts;
        this.references = references
        this.instructions = instruction
        this.items = items
    }
}
