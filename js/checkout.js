document.getElementById("checkout-btn").addEventListener("click", function () {
  const cartModal = document.getElementById("cart-modal");
  const cartContainer = document.getElementById("cart-items");

  for (let cartItem of cartItems) {
    const items = cartItem;
    const row = document.createElement("tr");
    row.classList.add("border-b");

    row.innerHTML = `
        <td >
        <div class= "flex items-center space-x-2 p-1">
        <img class ="h-[40px] w-[40px] object-cover rounded-md" src="${productImgBase}/${items.image}" alt="">
        <span class = "font-semibold ">${items.title}</span>
        </div>
        </td>

        <td class="py-2 px-4 font-semibold">${items.color}</td>
        <td class="py-2 px-4 font-semibold">${items.size}</td>
        <td class="py-2 px-4 font-semibold">${items.quantity}</td>
        <td class="py-2 px-4 font-semibold">$${items.price}</td>
        
        
        
        `;

    cartContainer.appendChild(row);
  }
  cartModal.classList.remove("hidden");
});


document.getElementById("continue-shopping").addEventListener('click', function () {
    document.getElementById("cart-modal").classList.add('hidden')

})