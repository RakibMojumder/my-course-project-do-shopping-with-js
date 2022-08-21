
let count = 0;
const productTotalElement = document.getElementById('product-count');

function addToCart(btn) {
    //update product total value
    count++;
    // set product number
    productTotalElement.innerText = count;


    // get table body by id
    const tableBody = document.getElementById('table-body');

    // get product name and price
    const productName = btn.parentElement.parentElement.children[0].innerText;
    const productPrice = btn.parentElement.parentElement.children[1].children[0].innerText;

    //product obj
    const product = {
        productName: productName,
        productPrice: parseInt(productPrice)
    }

    // create new table row
    const tableRow = document.createElement('tr');
    tableRow.classList.add('border-b-2', 'border-white')

    // set table row html
    tableRow.innerHTML = `
    <th>${count}</th>
    <td>${product.productName}</td>
    <td>${product.productPrice}</td>
    `;
    tableBody.appendChild(tableRow);

    // set total price
    const totalPriceElement = document.getElementById('total-price');
    const totalPriceValue = parseInt(totalPriceElement.innerText);

    totalPriceElement.innerText = totalPriceValue + product.productPrice;
}
