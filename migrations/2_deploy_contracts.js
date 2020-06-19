/* eslint-disable no-undef */
var SocialNetwork = artifacts.require('./SocialNetwork.sol')

// deploying contract

module.exports = function (deployer) {
  deployer.deploy(SocialNetwork)
}
