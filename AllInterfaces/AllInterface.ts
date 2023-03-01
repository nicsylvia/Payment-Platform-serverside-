export interface UserData {
    name: string,
    email: string,
    password: string,
    accountNumber: number,
    phoneNumber: number,
    userName: string,
    verified: boolean,
    wallet: {}[],
    history: {}[]
};

export interface WalletData {
    Owner: string,
    Balance: number;
    credit: number,
    debit: number;
    quickSave: {}[];
	saveLock: {}[];
	Target: {}[];
}

export interface HistoryData {
    message: string;
    transactionReference: number;
    transactionType: string
}

export interface QuickSaveData {
    amount: number;
    autosave: boolean;
    dateTime: number | string;
    interest: number
}

export interface LocksData {
    amount: number;
    PayBackTime: string;
    interest: number;
    lock: boolean;
    title: string;
}

export interface TargetData {
    amount: number;
    fixedAmount: number;
    interest: number;
    dateTime: string;
    title: string;
    targetValue: boolean;
}