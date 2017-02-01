var groceryItemModel =  [
    {
        name: "bacon",
        quantity: 2,
        price: 3.99
    },
    {
        name: "ice cream",
        quantity: 1,
        price: 5.00
    },
    {
        name: "bread",
        quantity: 3,
        price: 1.99
    },
    {
        name: "paper towels",
        quantity: 8,
        price: 0.99
    },
    {
        name: "cheese",
        quantity: 1,
        price: 2.50
    }
];

// <div class="col-md-3">
//     <h4>Quantity</h4>
//     </div>
//
//     <div class="col-md-3">
//     <h4>Item Name</h4>
// </div>
//
// <div class="col-md-3">
//     <h4>Price</h4>
//     </div>
//
//     <div class="col-md-3">
//     <button class="btn btn-default">Edit</button>
//     <button class="btn btn-default">Delete</button>
//     </div>

const itemArea = document.getElementById("item-area");
var itemListCode = "";

function addInfoColumn(item) {
    var element =  "<div class='col-sm-3'>";
    element += "<h4>" + item + "</h4>";
    element += "</div>";
    return element
}

for(item in groceryItemModel) {
    itemListCode += '<div id="item-list" class="row">';
    const name = groceryItemModel[item].name;
    const quantity = groceryItemModel[item].quantity;
    const price = groceryItemModel[item].price;

    itemListCode += addInfoColumn(quantity);
    itemListCode += addInfoColumn(name);
    itemListCode += addInfoColumn(price);

    itemListCode +=  '<button class="btn btn-default">Edit</button>';
    itemListCode += '<button class="btn btn-default">Delete</button>';
    itemListCode += '</div>';
}

itemArea.innerHTML = itemListCode;

