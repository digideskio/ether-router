// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_n","type":"uint256"}],"name":"store","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getStored","outputs":[{"name":"","type":"uint256"}],"type":"function"}],
    binary: "6060604052603b8060106000396000f3606060405260e060020a60003504636057361d81146024578063e1f7ec5a14602e575b005b6004356001556022565b6001546060908152602090f3",
    unlinked_binary: "6060604052603b8060106000396000f3606060405260e060020a60003504636057361d81146024578063e1f7ec5a14602e575b005b6004356001556022565b6001546060908152602090f3",
    address: "0xaf6764ae35a3e1582b19f7d2efa3e7fce09fc9ec",
    generated_with: "2.0.9",
    contract_name: "SimpleStore"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("SimpleStore error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("SimpleStore error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("SimpleStore error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("SimpleStore error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.SimpleStore = Contract;
  }

})();
