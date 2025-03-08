const ringBtns = document.querySelectorAll(".ring-button");
let productImgBase = "../images/";

for (let i = 0; i < ringBtns.length; i++){
    const ringBtn = ringBtns[i];
    ringBtn.addEventListener('click', function (e) {
        // console.log(e.target);
        const color = e.target.id.replace('-color', '');
        
        // console.log(color)

        for (let j = 0; j < ringBtns.length; j++){
            ringBtns[j].classList.remove("border-purple-600");
            ringBtns[j].classList.add("border-gray-200");
        }

        e.target.classList.add('border-purple-600')
        e.target.classList.remove("border-gray-200");

        const productImage = document.getElementById("product-image");
        // productImage.src = "../images/cyan.png";
        productImage.src = productImgBase + color + '.png';
    })


    
}