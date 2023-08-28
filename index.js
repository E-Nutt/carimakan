var featuredMenu = [ // declare Variable Arrays of food
    {
        foodId: "food1",
        foodName: "Ayam Bakar", 
        foodDesc: "Ayam bakar is an Indonesian consisting of charcoal-grilled chicken. Ayam bakar literally means \"roasted chicken\" in Indonesian and Malay." ,
        foodPrice: "12",
        url: "url(img/ayambakar.jpg)"
    },
    {
        foodId: "food2",
        foodName: "Opor Ayam", 
        foodDesc: "It is actually boiled chicken which is given thick condiment from coconut milk which is added with various spices such as lemongrass, kencur, and so on" ,
        foodPrice: "8",
        url: "url(img/opor-ayam.jpg)"
    },
    {
        foodId: "food3",
        foodName: "Rawon", 
        foodDesc: "Rawon is an Indonesian beef soup. Originating from Surabaya, East Java, rawon utilizes the black keluak nut as the main seasoning, which gives a dark color and nutty flavor to the soup." ,
        foodPrice: "10",
        url: "url(img/rawon.jpg)"
    },
    {
        foodId: "food10",
        foodName: "Cireng",
        foodDesc: "Cireng is usually filled with oncom, traditional fermented Indonesian food from soybeans, and mashed beans." ,
        foodPrice: "8",
        url: "url(img/cireng.jpg)"
    }
]
var testimonial = [ // declare Variable Arrays of food
    {
        name : "Amy / Developer",
        testi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur et adipisci ut, impedit cumque, similique, eum tenetur, numquam eligendi aliquid. Nulla sit, cupiditate corporis labore, modi natus officiis asperiores!"
    },
    {
        name: "Hans / Marketing Manager",
        testi: "Lorem ipsum dolor sit amet, consectetur adipisicing elimet, consectetur adipisicing eli t. Ab consequatur et adipisci ut, impedit cumque, similique, eum tenetur, numquam"
    },
    {
        name: "Carla / Fashion Designer",
        testi: "Lorem similique, eum tenetur, numquam eligendi aliquid. Nulla sit, cupiditate corporis labore, modi natus officiis asperiores! dipisicing elimet, consectetur adipisicing eli t. Ab consequatur et"
    },
    {
        name: "Monica / Student",
        testi: "Lorem ipsum dolorng elit. Ab consequatur et adipisci ut, impedit cumque, similique, eum tenetur, numquam eligendi aliquid. Nulla sit, cupiditate corporis labore, modi natus officiis asperiores! "
    }
]

var idx = 0
 maxSlide = 4
 featuredFoodDesc = featuredMenu
 menuDesc = document.getElementById('menu_desc')
 menuTitle = document.getElementById('menu_title')
 menuImg = document.getElementById('best-seller1')
 menuPrice = document.getElementById('menu_price')

 var testi = testimonial
 var testiName = document.getElementById('testimonial-name')
 testiText = document.getElementById('testimonial-text');
 var testiImg = document.querySelectorAll('.testi-img')

changeMenu(idx);

    function changeMenu(menu){
        menuDesc.innerHTML = featuredFoodDesc[menu].foodDesc;
        menuTitle.innerHTML = featuredFoodDesc[menu].foodName;
        menuPrice.innerHTML = featuredFoodDesc[menu].foodPrice + "€";
        menuImg.style.backgroundImage = featuredMenu[menu].url;
    }

      function previousMenu(){
         idx--;
         if(idx < 0)
             idx = maxSlide -1;
         changeMenu(idx);
     }
     
     function nextMenu(){
         idx++;
     
         if(idx > maxSlide -1)
             idx = 0;

         changeMenu(idx);   
         console.log(idx)  
     }

     
     function changeTesti(el){
         testiName.innerHTML = testi[el].name;
         testiText.innerHTML = testi[el].testi;
         testiImg.forEach(function(img){
            img.classList.remove('selected-img')
         })
         testiImg[el].classList.add("selected-img");
     }
