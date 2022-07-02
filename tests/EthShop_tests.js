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
    it("Should deposit to contract", async () => {
      const balance_sent = Math.trunc(Math.random() * 1000000000).toString();
      await EthshopInstance.send(balance_sent);
      const balance = await web3.eth.getBalance(EthshopInstance.address);
      expect(balance).to.equal(balance_sent);
    });
  });
});
