const { network, ethers } = require("hardhat");

async function AddPropertyAndMintOneToken () {
    const RealEstateV3 = await ethers.getContractAt("OkaneToken", "0x9a10cA8bb91B9d3696A07f3AF948A750F4e5B390")
    console.log((await RealEstateV3.name()))

    const addFirstProperty = await RealEstateV3.addAPropertyToSell("Avanti Apartment 1", "50000", "Dubai", "ipfs://bafybeieso4siydltys6arekaevn6vya7abxqdutpzp6setbg3izhk6d3d4/")
    console.log(addFirstProperty)

    const mintFirstTokenForFirstProperty = await mint("1000000000000000000", "1000000000000000000")
    console.log(mintFirstTokenForFirstProperty)

    const addSecondProperty = await RealEstateV3.addAPropertyToSell("Aykon City Tower B", "75000", "Dubai", "ipfs://bafybeibyni7bbi3r6ohldsgjbqjq75o27rvra5fqztqskkqz3rtjsj3jqy/")
    console.log(addSecondProperty)

    const mintFirstTokenForSecondProperty = await mint("1000000000000000000", "2000000000000000000")
    console.log(mintFirstTokenForSecondProperty)





}

AddPropertyAndMintOneToken()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
})

// npx hardhat run .\scripts\AddPropertyAndMintOneToken.js --network sepolia