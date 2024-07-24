document.addEventListener("DOMContentLoaded", function () {
    const cartCountElement = document.getElementById("product-count");
    const cartListElement = document.getElementById("cart-list");
    let cartCount = 0;

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get product details
            const productElement = this.closest(".menu__content");
            const productName = productElement.getAttribute("data-name");
            const productDetail = productElement.getAttribute("data-detail");
            const productPrice = productElement.getAttribute("data-price");

            // Check if the product is already in the cart
            const existingItem = Array.from(cartListElement.children).find(
                item => item.getAttribute("data-name") === productName
            );

            if (!existingItem) {
                // Increment the cart count
                cartCount++;
                cartCountElement.textContent = cartCount;

                // Create a new list item with product details and a delete button
                const listItem = document.createElement("li");
                listItem.setAttribute("data-name", productName);
                listItem.innerHTML = 
                `<div class="cart-container">
                    <div class="info-container">
                        <h4><span class="cart-details">Product Name : </span>${productName}
                        <br>
                        <span class="cart-details">Product Description : </span>${productDetail}
                        <br>
                        <span class="cart-details">Product Price : </span>${productPrice}</h4>
                    </div>

                    <div class="delete-container">
                        <button class="delete-from-cart">Remove</button>
                    </div>
                </div>`;
                
            
                cartListElement.appendChild(listItem);

                // Add event listener to the delete button
                listItem.querySelector(".delete-from-cart").addEventListener("click", function () {
                    // Remove the product from the cart list
                    cartListElement.removeChild(listItem);

                    // Decrement the cart count
                    cartCount--;
                    cartCountElement.textContent = cartCount;
                });
            } else {
                alert(`${productName} is already in the cart.`);
            }
        });
    });

    document.querySelector(".checkOut").addEventListener("click", function () {
        alert("Proceed to checkout");
    });
});




