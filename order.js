const orderPage = document.querySelector(".order-page");
const orderToggle = document.querySelector(".order-toggle");

orderToggle.addEventListener('click', ()=>{
    let order = orderPage.getAttribute('data-order');
    if (order === 'false'){
        orderPage.setAttribute('data-order', true)
        orderToggle.setAttribute('aria-expanded',true)
        orderToggle.style.transform = "rotate(1.5turn";
        orderToggle.style.transition = "transform 500ms";
    }
    else{
        orderPage.setAttribute('data-order', false);
        orderToggle.setAttribute('aria-expanded',false);
        orderToggle.style.transform = "rotate(0turn)";
        orderToggle.style.transition = "transform 500ms";
    }
});

const productCard = document.querySelectorAll(".product-card");

let prices = [];
let minus = [];

productCard.forEach((product)=>{
    product.addEventListener('click', addItem);

    function addItem(e){
        let [menuContainer, closeButton, listMenu] = [document.createElement('div'), document.createElement('div'),document.createElement('p')];
        const targetMenu = e.currentTarget.children[1].childNodes[1].innerText,
        price = parseInt(e.currentTarget.children[1].children[1].innerText.split('€',1));
        let wrapper = document.getElementById('menu-summary');
        listMenu.innerText = targetMenu;
        closeButton.classList.add('close');
        menuContainer.classList.add('flex','fs-400','ff-roboto','menu-summary');
        menuContainer.append(listMenu,closeButton);
        wrapper.appendChild(menuContainer);

        orderToggle.dataset.menuCounter = wrapper.childElementCount;
        menuContainer.dataset.price = price;

        prices.push(price);

        const qty = document.getElementById('quantityperson');
        let menuPrice = 0,
        minusPrice = 0,
        val = qty.options[qty.selectedIndex].value,
        totalAddPrice = 0,
        totalMinusPrice = 0,
        summePrice = document.getElementById('summe-price');

        function priceCalculator(numOfPersonVal){
        for(let i = 0 ; i < prices.length; i++){
            menuPrice += prices[i];
        };
        for(let i = 0 ; i < minus.length; i++){
            minusPrice += minus[i];
        };
        totalAddPrice = numOfPersonVal * menuPrice;
        totalMinusPrice = numOfPersonVal * minusPrice;
        let totalPrice = totalAddPrice - totalMinusPrice;
        summePrice.innerText = totalPrice +' '+'€' ;

        menuPrice = 0;
        minusPrice = 0;
        };
        
        function isOptionChange(x){
            if(x){
                val= qty.options[qty.selectedIndex].value;
                priceCalculator(val);
            } else{
                priceCalculator(val);
            };
        };

        qty.addEventListener('change', ()=>{
            isOptionChange(true);
        });

        isOptionChange();

        removeEv(e.currentTarget);

        closeButton.addEventListener('click',function (){
            menuContainer.remove();
            minus.push(parseInt(menuContainer.dataset.price));
            priceCalculator(val);
            orderToggle.dataset.menuCounter = wrapper.childElementCount;
            addEv();
        });

        function removeEv(e){
            e.removeEventListener('click', addItem);
        };
    
        function addEv(){
           product.addEventListener('click',addItem);
        };
        
    };
    
});



