function createAccount(pin, amount = 0) {

    const account = {

        checkBalance: (enteredPin)=>{
            if(enteredPin === pin){
                return `$${amount}`;
            }
            return "Invalid PIN."
        },
        deposit: (enteredPin, depositAmount)=>{

            if(enteredPin === pin){

                amount = amount + depositAmount;
                return `Successfully deposited $${depositAmount}. Current balance: $${amount}.`

            }

            return "Invalid PIN."

        },
        withdraw: (enteredPin, withdrawAmount)=>{

            if(enteredPin === pin){

                if(withdrawAmount > amount){
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }

                amount = amount - withdrawAmount;

                return `Successfully withdrew $${withdrawAmount}. Current balance: $${amount}.`

            }

            return "Invalid PIN."

        },
        changePin: (enteredPin, newPin)=>{
            if(enteredPin === pin){

                pin = newPin;
                return "PIN successfully changed!"

            }
            return "Invalid PIN."
        }

    }

    return account;

}

module.exports = { createAccount };
