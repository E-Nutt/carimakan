const productButtons = document.querySelectorAll('.product_btn');
const productCards = document.querySelectorAll('.product-card');

productButtons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        setActiveBtn(e);
        const btnFilter = e.target.dataset.filter;
        productCards.forEach((card)=>{
            if(btnFilter == 'all')
            {card.style.display = 'block'}
            else{
                const itemFilter = card.dataset.item;
                if(btnFilter==itemFilter){
                    card.style.display = 'block'
                }else{
                    card.style.display = 'none'
                }
            }
        })
    })
})
function setActiveBtn(e){
    productButtons.forEach((button)=>{
      button.classList.remove('product_btn-clicked');
    });
    e.target.classList.add('product_btn-clicked');
  }