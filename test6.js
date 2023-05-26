const solc = require('solc');

const solidityCode = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract testContract {
    uint256 public number = 12057689;
    string name;
    address owneraddres;
    mapping (string nameofperson => uint256 numberofperson) public contactBook;

    function changeNumber (uint256 newnumber) public {
        number = newnumber;
    }

    function addContact (string memory _name_of_person , uint256 _number) public {
        contactBook[_name_of_person] = _number;
    }
}`;

function compileSolidityCode(solidityCode) {
  const input = {
    language: 'Solidity',
    sources: {
      'contract.sol': {
        content: solidityCode,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['abi', 'evm.bytecode'],
        },
      },
    },
  };

  // test appication
  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  const bytecode = output.contracts['contract.sol']['testContract'].evm.bytecode.object;
  const abi = output.contracts['contract.sol']['testContract'].abi;

  return {
    bytecode,
    abi,
  };
}

const { bytecode, abi } = compileSolidityCode(solidityCode);
console.log('Bytecode:', bytecode);
console.log('ABI:', JSON.stringify(abi));
