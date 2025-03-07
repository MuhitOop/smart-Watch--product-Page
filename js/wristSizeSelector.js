function selectWristSize(size) {
    
    const sizes = ['S', 'M', 'L', 'XL'];
    for (let i = 0; i < sizes.length; i++){
        const button = document.getElementById('size-' + sizes[i]);
        console.log(button)
        const elemnt = sizes[i];
        if (size === elemnt) {
            button.classList.add('border-purple-600');
        } else {
            button.classList.remove("border-purple-600");
        }
    }
}