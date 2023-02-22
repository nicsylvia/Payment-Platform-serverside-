export interface UserData {
    name: string,
    email: string,
    password: string,
    accountNumber: number,
    phoneNumber: Number,
    userName: string,
    verified: boolean,
    wallet: {}[],
    history: {}[]
};

export interface WalletData {
    Balance: number;
    credit: number,
    debit: number
}

export interface HistoryData {
    message: string;
    transactionReference: string;
    transactionType: boolean
}