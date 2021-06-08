import React from "react"
import AccountRecord from "./AccountRecord"
import TableHead from "./TableHead"
import './accountsTable.css'

const AccTable = () => (
    <table>
        <TableHead />
        <tbody className="accountsTableBody">
            <AccountRecord id="165168946951*86jklhjv" name="Nathaniel" balance="10420" />
            <AccountRecord id="165168946951*86jklhjv" name="Izzy" balance="25469" />
            <AccountRecord id="165168946951*86jklhjv" name="Imy" balance="413" />
            <AccountRecord id="165168946951*86jklhjv" name="Maria" balance="-403" />
        </tbody>
    </table>
)

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
        console.log(this.state.accounts)
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