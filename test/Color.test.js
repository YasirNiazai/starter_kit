// const { Item } = require("react-bootstrap/lib/Breadcrumb")

const { networks } = require("../truffle-config")

const Color = artifacts.require("./Color.sol")

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract('Color',(accounts) => {
    let contract

    describe('deployment',async() => {
        it('deploys Successfully',async()=>{

            contract = await Color.deployed()
            const address = contract.address
            // console.log(networks)
            console.log(address)
        })
    })
})
