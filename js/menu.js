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
                <i class="fa fa-shopping-cart"></i>
            </label>
        </ul>

        <label id="icon" class="bars">
         <i class="fa fa-bars" aria-hidden="true"></i>   
        </label>
    </div>
</nav> `);
}

function footer() {
    return (` <footer>
    <div class="container">

        <div class="footer_social_media mt-5 pt-5">
            <div>
                <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Acme Outdoors Logo">
            </div>
            <div class="social_site">
                <i class="fa fa-twitter"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-instagram"></i>
            </div>
        </div>

        <div class="row text-center mt-5">
            <div class="col-md-12">
                <span>Made In <span class="webflow"> Webflow.</span> © 2020.</span>
            </div>
        </div>
    </div>
</footer>`)
}
document.querySelector(".menu").innerHTML = menu();
document.querySelector(".bars").addEventListener("click", () => {
    document.querySelector("ul").classList.toggle("show");
})
document.querySelector(".footer").innerHTML = footer();
AOS.init({
    duration: 1300
})