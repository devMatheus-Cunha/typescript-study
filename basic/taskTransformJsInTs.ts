type IAccountBanking = {
  balance: number,
  deposit: (valor: number) => void
}

type IAccountTholder = {
  name: string
  accountBanking: IAccountBanking,
  contacts: string[]
}

let accountBanking: IAccountBanking = {
  balance: 2000,
  deposit(valor) {
       this.balance += valor
  }
}

let accountholder: IAccountTholder = {
  name: 'Ana Silva',
  accountBanking: accountBanking,
  contacts: ['34567890', '98765432']
}

accountholder.accountBanking.deposit(1200)
console.log(accountholder)