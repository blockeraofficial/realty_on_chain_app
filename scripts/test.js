const { network, ethers } = require("hardhat");

async function test () {
    const okaneToken = await ethers.getContractAt("OkaneToken", "0x56915e26CE0A8245D42B4B62B9706A3D7dA0F58F")
    console.log(await okaneToken.balanceOf("0x57816544f40262053C25531fAe2b37bBb6154cd0"))
}

test()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
})

// npx hardhat run .\scripts\test.js --network sepolia