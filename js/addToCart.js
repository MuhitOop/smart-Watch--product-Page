let cartCount = 0;
let cartItems = [];

document.getElementById("add-to-cart").addEventListener("click", function () {
  const quantity = parseInt(document.getElementById("quantity").innerText);
  if (quantity > 0) {
    const checkOutContainer = document
      .getElementById("checkout-container")
      .classList.remove("hidden");
    cartCount += quantity;
      document.getElementById("cart-count").innerText = cartCount;
      
      const selectedColorBtn = document.querySelector("button.border-purple-600.w-6");
      const selectedColor = selectedColorBtn.id.split('-')[0];
     
      const selectedSizeBtn = document.querySelector('button.border-purple-600:not(.w-6)')
      
      const selectedSize = selectedSizeBtn.innerText.split(' ')[0];

      const selecetedPrice = selectedSizeBtn.innerText.split(' ')[1].split('$')[1];
      
      const productImage = document.getElementById("product-image");
      cartItems.push({
        image: selectedColor + ".png",
          title: "Classy Modern Smart Watch",
          color: selectedColor,
          size: selectedSize,
          price: quantity * parseInt(selecetedPrice),
          quantity: quantity
      });

    //   console.log(cartItems)

  } else {
      alert('Please select a quantity...')
  }
});
