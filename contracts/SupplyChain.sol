pragma solidity ^0.5.0;

contract SupplyChain {
    // Stakeholders [address and role].
    mapping(address => string) public stakeholders;
    
    // Products details.
    int public totalProduct = 0;
    struct Product {
        int id;
        int price;
        int quantity;
        string name;
        address producer;
    }
    mapping(int => Product) public products;
    
    // Order details
    int public totalOrder = 0;
    struct Order {
        int id;
        int productId;
        int quantity;
        string customerName;
        string status;
        string deliveryAddress;
        address customer;
    }
    mapping(int => Order) public orders;
    
    // Modifier to check if stakeholder is registered
    modifier onlyRegistered() {
        require(bytes(stakeholders[msg.sender]).length > 0, "Stakeholder not registered");
        _;
    }

    // Register stakeholder authentication.
    modifier registerStakeholderAuth() {
        require(bytes(stakeholders[msg.sender]).length == 0, "Stakeholder already registered");
        _;
    }
    
    // Add product authentication.
    modifier addProductAuth() {
        require(bytes(stakeholders[msg.sender]).length > 0, "Stakeholder not registered");
        _;
    }

    //Verify if registered
    function isRegistered() public returns (uint) {
        if (bytes(stakeholders[msg.sender]).length > 0){
            return 1;
        }
        else{
            return 0;
        }
    }

    // Register a new stakeholder
    function registerStakeholder(string memory _role) public registerStakeholderAuth {
        stakeholders[msg.sender] = _role;
    }

    // Add a new product
    function addProduct(string memory _name, int _price, int _quantity) public addProductAuth {
        totalProduct += 1;
        products[totalProduct] = Product(totalProduct, _price, _quantity, _name, msg.sender);
    }

    // Place an order
    function placeOrder(string memory _customerName, string memory _deliveryAddress, int _productId, int _quantity) public {
        require(products[_productId].quantity >= _quantity, "Insufficient quantity");

        totalOrder += 1;
        orders[totalOrder] = Order(totalOrder, _productId, _quantity, _customerName, "Placed", _deliveryAddress, msg.sender);
        products[_productId].quantity -= _quantity;
    }

    // Update order status
    function updateOrderStatus(int _orderId, string memory _status) public {
        require(keccak256(abi.encodePacked(stakeholders[msg.sender])) == keccak256(abi.encodePacked("Producer")) || 
                keccak256(abi.encodePacked(stakeholders[msg.sender])) == keccak256(abi.encodePacked("Manufacturer")) || 
                keccak256(abi.encodePacked(stakeholders[msg.sender])) == keccak256(abi.encodePacked("Distributor")) || 
                keccak256(abi.encodePacked(stakeholders[msg.sender])) == keccak256(abi.encodePacked("Retailer")), "Unauthorized");
        require(keccak256(abi.encodePacked(orders[_orderId].status)) == keccak256(abi.encodePacked("Placed")), "Order status cannot be updated");
        orders[_orderId].status = _status;
    }

    // Transfer product from producer to manufacturer
    function transferToManufacturer(int _productId, int _quantity) public {
        require(keccak256(abi.encodePacked(stakeholders[msg.sender])) == keccak256(abi.encodePacked("Producer")), "Unauthorized");
        products[_productId].quantity -= _quantity;
    }

    // Transfer product from manufacturer to distributor
    function transferToDistributor(int _productId, int _quantity) public {
        require(keccak256(abi.encodePacked(stakeholders[msg.sender])) == keccak256(abi.encodePacked("Manufacturer")), "Unauthorized");
        products[_productId].quantity -= _quantity;
    }

    // Transfer product from distributor to retailer
    function transferToRetailer(int _productId, int _quantity) public {
        require(keccak256(abi.encodePacked(stakeholders[msg.sender])) == keccak256(abi.encodePacked("Distributor")), "Unauthorized");
        products[_productId].quantity -= _quantity;
    }

    // Transfer product from retailer to customer
    function transferToCustomer(int _productId, int _quantity) public {
        require(keccak256(abi.encodePacked(stakeholders[msg.sender])) == keccak256(abi.encodePacked("Retailer")), "Unauthorized");
        products[_productId].quantity -= _quantity;
    }
}
