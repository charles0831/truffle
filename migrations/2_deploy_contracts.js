const GLDToken = artifacts.require("GLDToken");
module.exports = function (deployer) {
  deployer.deploy(GLDToken, "GLDToken", "GLD", 5000);
  // Additional contracts can be deployed here
};
