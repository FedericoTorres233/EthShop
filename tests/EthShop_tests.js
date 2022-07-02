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
    // First test
    it("Should deposit to contract", async () => {
      const balance_sent = Math.trunc(Math.random() * 1000000000).toString();
      await EthshopInstance.send(balance_sent);
      const balance = await web3.eth.getBalance(EthshopInstance.address);
      expect(balance).to.equal(balance_sent);
    });

    // Second test
    it("Should withdraw all funds from contract", async () => {
      await EthshopInstance.send(
        Math.trunc(Math.random() * 1000000000).toString()
      );
      const balance_before = await web3.eth.getBalance(EthshopInstance.address);
      await EthshopInstance.withdrawFunds(
        await web3.eth.getBalance(EthshopInstance.address),
        { from: owner }
        );
      const balance_after = await web3.eth.getBalance(EthshopInstance.address);
      expect(+balance_after).to.equal(0);
      expect(+balance_before).to.be.above(0);
    });
  });
});
