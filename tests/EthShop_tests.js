const Ethshop = artifacts.require("Ethshop");
const expect = require("chai").expect;

contract("Ethshop", (account) => {
  [owner, client] = account;

  // Instance the contract
  let EthshopInstance;
  beforeEach(async () => {
    EthshopInstance = await Ethshop.new({ from: owner });
  });

  // Address owner has to be public to test the following function:
  context("Constructor", async () => {
    it("Owner", async () => {
      const Owner = await EthshopInstance.Owner();
      expect(Owner).to.equal(owner);
    });
  });

  // This code executes after the contract is created
  context("Execution", async () => {
    it("Should deposits to contract", async () => {
      await instance.send(web3.toWei(10, "ether"));
      balance = await EthshopInstance.balance;
      console.log(balance);
      //expect(balance).to.equal(10);
    });
  });
});
