const Ethshop = artifacts.require("Ethshop");

module.exports = function (deployer) {
  deployer.deploy(Ethshop);
};