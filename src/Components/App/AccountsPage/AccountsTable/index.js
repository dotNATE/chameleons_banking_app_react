import React from "react"
import AccountRecord from "./AccountRecord"
import TableHead from "./TableHead"
import './accountsTable.css'

class AccountsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: []
        }
    }

    async componentDidMount() {
        let data = await fetch('http://localhost:3001/accounts')
        let json = await data.json()
        this.setState({
            accounts: json.data
        })
    }

    render() {
        return (
            <table>
                <TableHead />
                <tbody className="accountsTableBody">
                { this.state.accounts.length >= 1 ? this.state.accounts.map(account => (
                    <AccountRecord id={account._id} name={account.name} balance={account.balance}/>
                )) : <AccountRecord name="You have no accounts!" /> }
                </tbody>
            </table>
        )
    }
}

export default AccountsTable