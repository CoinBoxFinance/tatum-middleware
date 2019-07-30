module.exports = {
  USDT: [{
    constant: true, inputs: [], name: 'name', outputs: [{name: '', type: 'string'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_upgradedAddress', type: 'address'}], name: 'deprecate', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: '_spender', type: 'address'}, {name: '_value', type: 'uint256'}], name: 'approve', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'deprecated', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_evilUser', type: 'address'}], name: 'addBlackList', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'totalSupply', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_from', type: 'address'}, {name: '_to', type: 'address'}, {name: '_value', type: 'uint256'}], name: 'transferFrom', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'upgradedAddress', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [{name: '', type: 'address'}], name: 'balances', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'decimals', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'maximumFee', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: '_totalSupply', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [], name: 'unpause', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{name: '_maker', type: 'address'}], name: 'getBlackListStatus', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [{name: '', type: 'address'}, {name: '', type: 'address'}], name: 'allowed', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'paused', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [{name: 'who', type: 'address'}], name: 'balanceOf', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [], name: 'pause', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'getOwner', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'owner', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'symbol', outputs: [{name: '', type: 'string'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_to', type: 'address'}, {name: '_value', type: 'uint256'}], name: 'transfer', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'newBasisPoints', type: 'uint256'}, {name: 'newMaxFee', type: 'uint256'}], name: 'setParams', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'amount', type: 'uint256'}], name: 'issue', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'amount', type: 'uint256'}], name: 'redeem', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{name: '_owner', type: 'address'}, {name: '_spender', type: 'address'}], name: 'allowance', outputs: [{name: 'remaining', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'basisPointsRate', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [{name: '', type: 'address'}], name: 'isBlackListed', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_clearedUser', type: 'address'}], name: 'removeBlackList', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'MAX_UINT', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'newOwner', type: 'address'}], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: '_blackListedUser', type: 'address'}], name: 'destroyBlackFunds', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    inputs: [{name: '_initialSupply', type: 'uint256'}, {name: '_name', type: 'string'}, {name: '_symbol', type: 'string'}, {name: '_decimals', type: 'uint256'}], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, {
    anonymous: false, inputs: [{indexed: false, name: 'amount', type: 'uint256'}], name: 'Issue', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: false, name: 'amount', type: 'uint256'}], name: 'Redeem', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: false, name: 'newAddress', type: 'address'}], name: 'Deprecate', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: false, name: 'feeBasisPoints', type: 'uint256'}, {indexed: false, name: 'maxFee', type: 'uint256'}], name: 'Params', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: false, name: '_blackListedUser', type: 'address'}, {indexed: false, name: '_balance', type: 'uint256'}], name: 'DestroyedBlackFunds', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: false, name: '_user', type: 'address'}], name: 'AddedBlackList', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: false, name: '_user', type: 'address'}], name: 'RemovedBlackList', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'owner', type: 'address'}, {indexed: true, name: 'spender', type: 'address'}, {indexed: false, name: 'value', type: 'uint256'}], name: 'Approval', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'from', type: 'address'}, {indexed: true, name: 'to', type: 'address'}, {indexed: false, name: 'value', type: 'uint256'}], name: 'Transfer', type: 'event',
  }, {
    anonymous: false, inputs: [], name: 'Pause', type: 'event',
  }, {
    anonymous: false, inputs: [], name: 'Unpause', type: 'event',
  }],
  LEO: [{
    constant: true, inputs: [], name: 'name', outputs: [{name: '', type: 'string'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_spender', type: 'address'}, {name: '_amount', type: 'uint256'}], name: 'approve', outputs: [{name: 'success', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'creationBlock', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'totalSupply', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_from', type: 'address'}, {name: '_to', type: 'address'}, {name: '_amount', type: 'uint256'}], name: 'transferFrom', outputs: [{name: 'success', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'decimals', outputs: [{name: '', type: 'uint8'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_newController', type: 'address'}], name: 'changeController', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{name: '_owner', type: 'address'}, {name: '_blockNumber', type: 'uint256'}], name: 'balanceOfAt', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'version', outputs: [{name: '', type: 'string'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_cloneTokenName', type: 'string'}, {name: '_cloneDecimalUnits', type: 'uint8'}, {name: '_cloneTokenSymbol', type: 'string'}, {name: '_snapshotBlock', type: 'uint256'}, {name: '_transfersEnabled', type: 'bool'}], name: 'createCloneToken', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{name: '_owner', type: 'address'}], name: 'balanceOf', outputs: [{name: 'balance', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'parentToken', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_owner', type: 'address'}, {name: '_amount', type: 'uint256'}], name: 'generateTokens', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'symbol', outputs: [{name: '', type: 'string'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [{name: '_blockNumber', type: 'uint256'}], name: 'totalSupplyAt', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_to', type: 'address'}, {name: '_amount', type: 'uint256'}], name: 'transfer', outputs: [{name: 'success', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'transfersEnabled', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'parentSnapShotBlock', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_spender', type: 'address'}, {name: '_amount', type: 'uint256'}, {name: '_extraData', type: 'bytes'}], name: 'approveAndCall', outputs: [{name: 'success', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: '_owner', type: 'address'}, {name: '_amount', type: 'uint256'}], name: 'destroyTokens', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{name: '_owner', type: 'address'}, {name: '_spender', type: 'address'}], name: 'allowance', outputs: [{name: 'remaining', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'tokenFactory', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_transfersEnabled', type: 'bool'}], name: 'enableTransfers', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'controller', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    inputs: [{name: '_tokenFactory', type: 'address'}, {name: 'initialOwner', type: 'address'}], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, {payable: true, stateMutability: 'payable', type: 'fallback'}, {
    anonymous: false, inputs: [{indexed: true, name: '_token', type: 'address'}, {indexed: true, name: '_controller', type: 'address'}, {indexed: false, name: '_amount', type: 'uint256'}], name: 'ClaimedTokens', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: '_from', type: 'address'}, {indexed: true, name: '_to', type: 'address'}, {indexed: false, name: '_amount', type: 'uint256'}], name: 'Transfer', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: '_cloneToken', type: 'address'}, {indexed: false, name: '_snapshotBlock', type: 'uint256'}], name: 'NewCloneToken', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: '_owner', type: 'address'}, {indexed: true, name: '_spender', type: 'address'}, {indexed: false, name: '_amount', type: 'uint256'}], name: 'Approval', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'previousControler', type: 'address'}, {indexed: true, name: 'newController', type: 'address'}], name: 'ControlTransferred', type: 'event',
  }],
  LINK: [{
    constant: true, inputs: [], name: 'name', outputs: [{name: '', type: 'string'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_spender', type: 'address'}, {name: '_value', type: 'uint256'}], name: 'approve', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'totalSupply', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_from', type: 'address'}, {name: '_to', type: 'address'}, {name: '_value', type: 'uint256'}], name: 'transferFrom', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'decimals', outputs: [{name: '', type: 'uint8'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_to', type: 'address'}, {name: '_value', type: 'uint256'}, {name: '_data', type: 'bytes'}], name: 'transferAndCall', outputs: [{name: 'success', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: '_spender', type: 'address'}, {name: '_subtractedValue', type: 'uint256'}], name: 'decreaseApproval', outputs: [{name: 'success', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{name: '_owner', type: 'address'}], name: 'balanceOf', outputs: [{name: 'balance', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'symbol', outputs: [{name: '', type: 'string'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: '_to', type: 'address'}, {name: '_value', type: 'uint256'}], name: 'transfer', outputs: [{name: 'success', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: '_spender', type: 'address'}, {name: '_addedValue', type: 'uint256'}], name: 'increaseApproval', outputs: [{name: 'success', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{name: '_owner', type: 'address'}, {name: '_spender', type: 'address'}], name: 'allowance', outputs: [{name: 'remaining', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'from', type: 'address'}, {indexed: true, name: 'to', type: 'address'}, {indexed: false, name: 'value', type: 'uint256'}, {indexed: false, name: 'data', type: 'bytes'}], name: 'Transfer', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'owner', type: 'address'}, {indexed: true, name: 'spender', type: 'address'}, {indexed: false, name: 'value', type: 'uint256'}], name: 'Approval', type: 'event',
  }],
  MKR: [{
    constant: true, inputs: [], name: 'name', outputs: [{name: '', type: 'bytes32'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [], name: 'stop', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'guy', type: 'address'}, {name: 'wad', type: 'uint256'}], name: 'approve', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'owner_', type: 'address'}], name: 'setOwner', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'totalSupply', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'src', type: 'address'}, {name: 'dst', type: 'address'}, {name: 'wad', type: 'uint256'}], name: 'transferFrom', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'decimals', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'guy', type: 'address'}, {name: 'wad', type: 'uint256'}], name: 'mint', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'wad', type: 'uint256'}], name: 'burn', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'name_', type: 'bytes32'}], name: 'setName', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{name: 'src', type: 'address'}], name: 'balanceOf', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'stopped', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'authority_', type: 'address'}], name: 'setAuthority', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'owner', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'symbol', outputs: [{name: '', type: 'bytes32'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'guy', type: 'address'}, {name: 'wad', type: 'uint256'}], name: 'burn', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'wad', type: 'uint256'}], name: 'mint', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'dst', type: 'address'}, {name: 'wad', type: 'uint256'}], name: 'transfer', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'dst', type: 'address'}, {name: 'wad', type: 'uint256'}], name: 'push', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'src', type: 'address'}, {name: 'dst', type: 'address'}, {name: 'wad', type: 'uint256'}], name: 'move', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [], name: 'start', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'authority', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'guy', type: 'address'}], name: 'approve', outputs: [{name: '', type: 'bool'}], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{name: 'src', type: 'address'}, {name: 'guy', type: 'address'}], name: 'allowance', outputs: [{name: '', type: 'uint256'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'src', type: 'address'}, {name: 'wad', type: 'uint256'}], name: 'pull', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    inputs: [{name: 'symbol_', type: 'bytes32'}], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'guy', type: 'address'}, {indexed: false, name: 'wad', type: 'uint256'}], name: 'Mint', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'guy', type: 'address'}, {indexed: false, name: 'wad', type: 'uint256'}], name: 'Burn', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'authority', type: 'address'}], name: 'LogSetAuthority', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'owner', type: 'address'}], name: 'LogSetOwner', type: 'event',
  }, {
    anonymous: true, inputs: [{indexed: true, name: 'sig', type: 'bytes4'}, {indexed: true, name: 'guy', type: 'address'}, {indexed: true, name: 'foo', type: 'bytes32'}, {indexed: true, name: 'bar', type: 'bytes32'}, {indexed: false, name: 'wad', type: 'uint256'}, {indexed: false, name: 'fax', type: 'bytes'}], name: 'LogNote', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'from', type: 'address'}, {indexed: true, name: 'to', type: 'address'}, {indexed: false, name: 'value', type: 'uint256'}], name: 'Transfer', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'owner', type: 'address'}, {indexed: true, name: 'spender', type: 'address'}, {indexed: false, name: 'value', type: 'uint256'}], name: 'Approval', type: 'event',
  }],
  USDC: [{
    constant: false, inputs: [{name: 'newImplementation', type: 'address'}], name: 'upgradeTo', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'newImplementation', type: 'address'}, {name: 'data', type: 'bytes'}], name: 'upgradeToAndCall', outputs: [], payable: true, stateMutability: 'payable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'implementation', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'newAdmin', type: 'address'}], name: 'changeAdmin', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'admin', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    inputs: [{name: '_implementation', type: 'address'}], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, {payable: true, stateMutability: 'payable', type: 'fallback'}, {
    anonymous: false, inputs: [{indexed: false, name: 'previousAdmin', type: 'address'}, {indexed: false, name: 'newAdmin', type: 'address'}], name: 'AdminChanged', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: false, name: 'implementation', type: 'address'}], name: 'Upgraded', type: 'event',
  }],
  BAT: [{
    constant: true, inputs: [], name: 'batFundDeposit', outputs: [{name: '', type: 'address'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'name', outputs: [{name: '', type: 'string'}], payable: false, type: 'function',
  }, {
    constant: false, inputs: [{name: '_spender', type: 'address'}, {name: '_value', type: 'uint256'}], name: 'approve', outputs: [{name: 'success', type: 'bool'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'totalSupply', outputs: [{name: '', type: 'uint256'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'batFund', outputs: [{name: '', type: 'uint256'}], payable: false, type: 'function',
  }, {
    constant: false, inputs: [{name: '_from', type: 'address'}, {name: '_to', type: 'address'}, {name: '_value', type: 'uint256'}], name: 'transferFrom', outputs: [{name: 'success', type: 'bool'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'decimals', outputs: [{name: '', type: 'uint256'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'tokenExchangeRate', outputs: [{name: '', type: 'uint256'}], payable: false, type: 'function',
  }, {
    constant: false, inputs: [], name: 'finalize', outputs: [], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'version', outputs: [{name: '', type: 'string'}], payable: false, type: 'function',
  }, {
    constant: false, inputs: [], name: 'refund', outputs: [], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'tokenCreationCap', outputs: [{name: '', type: 'uint256'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [{name: '_owner', type: 'address'}], name: 'balanceOf', outputs: [{name: 'balance', type: 'uint256'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'isFinalized', outputs: [{name: '', type: 'bool'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'fundingEndBlock', outputs: [{name: '', type: 'uint256'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'symbol', outputs: [{name: '', type: 'string'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'ethFundDeposit', outputs: [{name: '', type: 'address'}], payable: false, type: 'function',
  }, {
    constant: false, inputs: [{name: '_to', type: 'address'}, {name: '_value', type: 'uint256'}], name: 'transfer', outputs: [{name: 'success', type: 'bool'}], payable: false, type: 'function',
  }, {
    constant: false, inputs: [], name: 'createTokens', outputs: [], payable: true, type: 'function',
  }, {
    constant: true, inputs: [], name: 'tokenCreationMin', outputs: [{name: '', type: 'uint256'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [], name: 'fundingStartBlock', outputs: [{name: '', type: 'uint256'}], payable: false, type: 'function',
  }, {
    constant: true, inputs: [{name: '_owner', type: 'address'}, {name: '_spender', type: 'address'}], name: 'allowance', outputs: [{name: 'remaining', type: 'uint256'}], payable: false, type: 'function',
  }, {inputs: [{name: '_ethFundDeposit', type: 'address'}, {name: '_batFundDeposit', type: 'address'}, {name: '_fundingStartBlock', type: 'uint256'}, {name: '_fundingEndBlock', type: 'uint256'}], payable: false, type: 'constructor'}, {
    anonymous: false, inputs: [{indexed: true, name: '_to', type: 'address'}, {indexed: false, name: '_value', type: 'uint256'}], name: 'LogRefund', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: '_to', type: 'address'}, {indexed: false, name: '_value', type: 'uint256'}], name: 'CreateBAT', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: '_from', type: 'address'}, {indexed: true, name: '_to', type: 'address'}, {indexed: false, name: '_value', type: 'uint256'}], name: 'Transfer', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: '_owner', type: 'address'}, {indexed: true, name: '_spender', type: 'address'}, {indexed: false, name: '_value', type: 'uint256'}], name: 'Approval', type: 'event',
  }],
  TUSD: [{
    constant: true, inputs: [], name: 'proxyOwner', outputs: [{name: 'owner', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'pendingProxyOwner', outputs: [{name: 'pendingOwner', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'implementation', type: 'address'}], name: 'upgradeTo', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'implementation', outputs: [{name: 'impl', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [], name: 'claimProxyOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'newOwner', type: 'address'}], name: 'transferProxyOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, {payable: true, stateMutability: 'payable', type: 'fallback'}, {
    anonymous: false, inputs: [{indexed: true, name: 'previousOwner', type: 'address'}, {indexed: true, name: 'newOwner', type: 'address'}], name: 'ProxyOwnershipTransferred', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: false, name: 'currentOwner', type: 'address'}, {indexed: false, name: 'pendingOwner', type: 'address'}], name: 'NewPendingOwner', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: true, name: 'implementation', type: 'address'}], name: 'Upgraded', type: 'event',
  }],
  PAX: [{
    constant: false, inputs: [{name: 'newImplementation', type: 'address'}], name: 'upgradeTo', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{name: 'newImplementation', type: 'address'}, {name: 'data', type: 'bytes'}], name: 'upgradeToAndCall', outputs: [], payable: true, stateMutability: 'payable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'implementation', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{name: 'newAdmin', type: 'address'}], name: 'changeAdmin', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'admin', outputs: [{name: '', type: 'address'}], payable: false, stateMutability: 'view', type: 'function',
  }, {
    inputs: [{name: '_implementation', type: 'address'}], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, {payable: true, stateMutability: 'payable', type: 'fallback'}, {
    anonymous: false, inputs: [{indexed: false, name: 'previousAdmin', type: 'address'}, {indexed: false, name: 'newAdmin', type: 'address'}], name: 'AdminChanged', type: 'event',
  }, {
    anonymous: false, inputs: [{indexed: false, name: 'implementation', type: 'address'}], name: 'Upgraded', type: 'event',
  }],
};
