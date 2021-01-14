let shop_product;

let preloadLinkLogo = document.createElement("link");
preloadLinkLogo.href = "./img/logo.png";
preloadLinkLogo.rel = "shortcut icon";
preloadLinkLogo.type = "image/png";
document.head.appendChild(preloadLinkLogo);
let btn = document.querySelectorAll('.btn');
let shop_content = document.querySelector('.shop_content');
let header_shop = document.querySelector('.header-img-shop');
let shop_information = document.querySelector('.shop_information');
let btn_select = document.querySelector('.btn_select');
let productNameTitle = document.querySelector('.productNameTitle');

function menu() {
    return (`<nav>
    <div class="container cont">
        <label class="logo">
            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Acme Outdoors Logo">
         </label>
        <ul>
            <li>
                <a href="index.html" class="">Home</a>
            </li>
            <li>
                <a href="about.html" class="">About</a>
            </li>
            <li>
                <a href="shop.html" class="">Shop</a>
            </li>
            <li>
                <a href="donate.html" class="">Donate</a>
            </li>
            <li>
                <a href="contact.html" class="">Contact</a>
            </li>
            <label class="shop_card">
                <i class="fa fa-shopping-cart" onClick="showProduct()"></i>
            </label>
        </ul>

        <label id="icon" class="bars">
         <i class="fa fa-bars" aria-hidden="true"></i>   
        </label>
    </div>
</nav> `);

}
document.querySelector(".menu").innerHTML = menu();




/*navbar*/
document.querySelector(".bars").addEventListener("click", () => {
    document.querySelector("ul").classList.toggle("show");
});

/**AOS animation */
AOS.init({
    duration: 1300
})

/**/
btn.forEach((elem, i) => {
    btn[i].addEventListener('click', function() {
        shop_content.innerHTML = '';
        header_shop.innerHTML = '';
        btn.forEach((item) => {
            item.classList.remove("activeBtn");
        })
        elem.classList.add("activeBtn");
        let arr = Object.assign([shop_product[i]]);
        shopImageOnloadWindow(arr, false);

    })

})



/*get cart data in localstorage*/
function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}

/*set cart data in localstorage*/
function setCartData(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    return false;
}

/*delete cart product*/
function deleteItem(itemId) {
    let cartData = getCartData();
    if (cartData.hasOwnProperty(itemId)) {
        delete cartData[itemId];
        setCartData(cartData);
        basket(cartData);
    }
}


/**/
let booleanValue = false;
document.body.insertAdjacentHTML('afterbegin', defaultBasketSidebar())

function defaultBasketSidebar() {
    if (booleanValue) {
        let sum = 0;
        let data = getCartData();
        for (const key in data) {
            if (data != null) {
                sum += data[key][2] * data[key][3];
            } else {
                sum = "$ 0 USD";
            }
        }
        document.querySelector('.sum').innerHTML = `$ ${sum}.00 USD`;
    }
    return (`
    <div class="before_style"></div>
    <div class="product_basket p-4">
        <div>
            <div class="d-flex justify-content-between">
                <h4>Your Cart</h4>
                <h4 onclick="hideProduct()">X</h4>
            </div>
            <div class="content mt-4">
                <div class="product_content justify-content-between">
                   
                </div>
            </div>
        </div>
        <div class="total d-flex justify-content-between">
            <p>Subtotal</p>
            <h4 class="sum"></h4>
        </div>
    </div>
    `)
}


function basket(getData) {
    booleanValue = true;
    defaultBasketSidebar();
    if (getData == null) {
        document.querySelector('.product_content').innerHTML = ' ';
    } else {
        let productShow = (() => {
            let productShowHtml = '';
            for (const key in getData) {
                productShowHtml += `
    <div class="d-flex justify-content-between getDomeElemenet">
        <div class="d-flex">
            <img src="${getData[key][0]}" alt="" class="mr-2">
            <div class="text">
                <h4>${getData[key][1]}</h4>
                <p>$ ${getData[key][2]} USD</p>
                <p class="delete_product" onClick="deleteItem(${key})">Remove</p>
            </div>
        </div>
        <div class="getProductCount">
            <div >${getData[key][3]}</div>
        </div>
    </div>
    `;
            }
            return productShowHtml;
        })
        document.querySelector('.product_content').innerHTML = productShow();

    }

}


let product_basket = document.querySelector('.product_basket');
let opacity_background = document.querySelector('.before_style');

/* open basket product*/
function showProduct() {
    let getCartDatas = getCartData();
    basket(getCartDatas);
    product_basket.style.transform = "none";
    opacity_background.classList.add('change');
}
/* close basket product*/
function hideProduct() {
    product_basket.style.transform = "translateX(500px)";
    opacity_background.classList.remove('change');
}


function shopImages(item) {
    return (`<div>
    <img src="${item.img}" class="img-shop">
    <div class="price">
        <p>${item.name}</p>
        <p>$${item.price}USD</p>
    </div>
    <button class="btn btn-secondary" onClick="shopCard(${item.id})">featured item</button>
</div> `)
}
let getInputValue;

function shopCard(id) {
    shop_content.style.display = 'none';
    btn_select.style.display = 'none';
    header_shop.style.display = 'none';
    let elem = shop_product.map((item, i) => {
        if (id == item.id) {
            productNameTitle.innerHTML = item.name;
            return (`
        <div class="col-lg-5  product_image">
            <img src="${item.img}">
        </div>
        <div class="col-lg-6 description">
            <div>
                <div>
                    <h1>${item.name}</h1>
                    <b>$${item.price}USD</b>
                    <p>Quantity</p>
                </div>
                <div class="d-flex justify-content-between" style="width:200px">
                    <input type="number" class="form-control" value="1" style="width:65px"  onChange="getValue(this.value)">
                    <button type="button" class="btn btn-outline-danger" onClick="addToCart(${item.id})">Add to card</button>
                    </div>
                <div class="mt-5">
                    <h2>What’s a Rich Text element?</h2>
                    <p class="text">The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                    <span><i class="fa fa-twitter"></i>Tweet</span>
                </div>
            </div>
        </div>
        `)
        }
    })
    elem = elem.join("");
    shop_information.innerHTML = elem;
}

let href = window.location.href.split('/');
/**
 get shop product
 */
window.onload = (() => {
    fetch('https://run.mocky.io/v3/cf8b6f7e-9407-4081-bdce-8943caa77726')
        .then(function(response) {
            response.json().then(function(data) {
                shopImageOnloadWindow(data, true)
                shop_product = data;
            })
        })
})

function shopImageOnloadWindow(product, bool) {
    let shopImage = "";
    if (href[href.length - 1] == "index.html") {
        product.length = 3;
        shopImage = product.map((item) => {
            return (`
            <div class="col-md-4 mb-5 attribute" data-id="${item.id}">
                <div>
                    <img src="${item.img}" alt="" srcset="">
                    <p>${item.name}</p>
                    <b>$ ${item.price} USD</b>
                    <button class="shop_btn" onClick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
            `)
        })
    } else if (href[href.length - 1] == "shop.html") {
        shopImage = product.map((item) => {
            if (item.img == 'img/1.jpg' && bool) {
                let html = shopImages(item);
                document.querySelector('.header-img-shop').innerHTML = html;
            } else {
                return (`
            <div class="col-md-4 mb-5 attribute" data-id="${item.id}">
                <div>
                    <img src="${item.img}" alt="" srcset="">
                    <p>${item.name}</p>
                    <b>$ ${item.price} USD</b>
                    <button class="shop_btn" onClick="shopCard(${item.id})" >Details</button>
                </div>
            </div>
            `)
            }
        })

    } else {
        return
    }
    shopImage = shopImage.join(" ");
    shop_content.innerHTML = shopImage;
}

let productCount = 1;
let bool = false;
let getValue = (inputValue) => {
    bool = true;
    productCount = parseInt(inputValue);
}

/**product add in localStorage */
function addToCart(id) {
    let array = shop_product;
    let val;
    for (let index = 0; index < array.length; index++) {
        if (id == array[index].id) {
            val = true
            break;
        } else {
            val = false;
        }
    }
    if (val) {
        Object.assign(array, shop_product)
    } else {
        Object.assign(array, donateArray)
    }

    let cartData = getCartData() || {};
    array.map((item, i) => {
        if (item.id == id) {
            if (cartData.hasOwnProperty(item.id)) {
                if (bool) {
                    cartData[item.id][3] = productCount;
                    bool = false
                } else {
                    cartData[item.id][3] += 1;
                }

            } else {
                cartData[item.id] = [item.img, item.name, item.price, 1];
            }
        }
        Object.assign(array, [{}])
    })

    if (!setCartData(cartData)) {
        return true;
    }

}

let donate = document.querySelector('.donate');
/*donation array*/
let donateArray;


if (href[href.length - 1] == 'donate.html') {
    fetch('https://run.mocky.io/v3/295b785e-30f2-4b4f-a2b2-446425c655b2')
        .then(function(response) {
            response.json().then(function(data) {
                donateArray = data;

            })
        })
    let donateBtnClick = document.querySelectorAll('.shop_btn');
    let donateBtn = document.querySelector('.create_donate_price');
    let donationProduct = document.querySelector('.donation_product');

    donateBtnClick.forEach((item, i) => {
        item.addEventListener('click', () => {
            donateBtn.style.display = "none";
            let donateDisplay = (item) => {
                return (`
                <div class="row ">
                <div class="col-lg-5  product_image">
                    <img src="${item.img}">
                </div>
                <div class="col-lg-6 description text-left">
                    <h1>${item.name}</h1>
                    <b>$ ${item.price} USD</b>
                    <p>Quantity</p>
                    <div class="d-flex justify-content-between mt-3 mb-3" style="width:200px">
                        <input type="number" class="form-control"  value="1" style="width:65px" onChange="getValue(this.value)">
                        <button type="button" class="btn btn-outline-danger" onClick="addToCart(${item.id})">Add to card</button>
                    </div>
                    <h1>Tweet about #AcmeOutdoors products</h1>
                    <span><i class="fa fa-twitter"></i>Tweet</span>
                </div>
            </div>
                
                `)
            }
            donationProduct.insertAdjacentHTML('afterbegin', donateDisplay(donateArray[i]))

        })
    })

}


/*footer */
function footer() {
    return (` 
    <footer>
        <div class="container">
            <div class="footer_social_media mt-5 pt-5">
                <div>
                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Acme Outdoors Logo">
                </div>
                <div class="social_site">
                    <i class="fa fa-twitter"> </i>
                    <i class="fa fa-facebook"> </i>
                    <i class="fa fa-instagram"> </i>
                </div>
            </div>

            <div class="row text-center mt-5">
                <div class="col-md-12">
                    <span> Made In <span class = "webflow" > Webflow. </span> © 2020.</span>
                </div>
            </div>
        </div>
    </footer>`)
}

document.querySelector(".footer").innerHTML = footer();