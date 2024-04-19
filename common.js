let address = "0xfc752A42cfA7FFfa79DA299bfF9C41fFd499FA5d"

var abi=[
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "name": "orders",
    "outputs": [
      {
        "internalType": "int256",
        "name": "id",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "productId",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "quantity",
        "type": "int256"
      },
      {
        "internalType": "string",
        "name": "customerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "status",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "deliveryAddress",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "customer",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "name": "products",
    "outputs": [
      {
        "internalType": "int256",
        "name": "id",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "price",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "quantity",
        "type": "int256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "producer",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "stakeholders",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalOrder",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalProduct",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_role",
        "type": "string"
      }
    ],
    "name": "registerStakeholder",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "_price",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_quantity",
        "type": "int256"
      }
    ],
    "name": "addProduct",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_customerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_deliveryAddress",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "_productId",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_quantity",
        "type": "int256"
      }
    ],
    "name": "placeOrder",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "int256",
        "name": "_orderId",
        "type": "int256"
      },
      {
        "internalType": "string",
        "name": "_status",
        "type": "string"
      }
    ],
    "name": "updateOrderStatus",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "int256",
        "name": "_productId",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_quantity",
        "type": "int256"
      }
    ],
    "name": "transferToManufacturer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "int256",
        "name": "_productId",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_quantity",
        "type": "int256"
      }
    ],
    "name": "transferToDistributor",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "int256",
        "name": "_productId",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_quantity",
        "type": "int256"
      }
    ],
    "name": "transferToRetailer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "int256",
        "name": "_productId",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_quantity",
        "type": "int256"
      }
    ],
    "name": "transferToCustomer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]