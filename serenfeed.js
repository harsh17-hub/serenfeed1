// ==========================================
// SerenFeed JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Mobile Menu
    // ==========================================

    const menuBtn = document.querySelector(".menu-btn");

    if (menuBtn) {

        const mobileMenu = document.createElement("div");

        mobileMenu.className = "mobile-menu";

        mobileMenu.innerHTML = `

        <span class="close-menu">&times;</span>

        <ul>

            <li><a href="#">Home</a></li>

            <li><a href="#">Explore</a></li>

            <li><a href="#">Categories</a></li>

            <li><a href="#">Write</a></li>

            <li><a href="#">About</a></li>

        </ul>

        `;

        document.body.appendChild(mobileMenu);

        menuBtn.onclick = () => {

            mobileMenu.classList.add("active");

        };

        mobileMenu.querySelector(".close-menu").onclick = () => {

            mobileMenu.classList.remove("active");

        };

    }

    // ==========================================
    // Sticky Navbar
    // ==========================================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 40){

            header.style.boxShadow="0 5px 20px rgba(0,0,0,.1)";

        }

        else{

            header.style.boxShadow="none";

        }

    });

    // ==========================================
    // Scroll Reveal
    // ==========================================

    const revealElements = document.querySelectorAll(

        ".category-card,.blog-card,.author-card,.newsletter,.hero-content,.hero-image"

    );

    function reveal(){

        revealElements.forEach(item=>{

            const top=item.getBoundingClientRect().top;

            const visible=window.innerHeight-120;

            if(top<visible){

                item.classList.add("fade-in");

            }

        });

    }

    reveal();

    window.addEventListener("scroll",reveal);

    // ==========================================
    // Back To Top Button
    // ==========================================

    const topBtn=document.createElement("div");

    topBtn.id="backToTop";

    topBtn.innerHTML="↑";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            topBtn.classList.add("show");

        }

        else{

            topBtn.classList.remove("show");

        }

    });

    topBtn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    // ==========================================
    // Smooth Scroll
    // ==========================================

    document.querySelectorAll("a[href^='#']").forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // ==========================================
    // Newsletter Validation
    // ==========================================

    const subscribeBtn=document.querySelector(".newsletter button");

    if(subscribeBtn){

        subscribeBtn.addEventListener("click",()=>{

            const email=document.querySelector(".newsletter input").value;

            const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if(email===""){

                alert("Please enter your email.");

            }

            else if(!email.match(pattern)){

                alert("Please enter a valid email.");

            }

            else{

                alert("Thank you for subscribing!");

                document.querySelector(".newsletter input").value="";

            }

        });

    }

    // ==========================================
    // Search
    // ==========================================

    const searchInput=document.querySelector(".search-box input");

    if(searchInput){

        searchInput.addEventListener("keyup",(e)=>{

            if(e.key==="Enter"){

                alert("Searching for: "+searchInput.value);

            }

        });

    }

    // ==========================================
    // Dark Mode
    // ==========================================

    const darkButton=document.createElement("button");

    darkButton.innerHTML="🌙";

    darkButton.style.position="fixed";

    darkButton.style.bottom="100px";

    darkButton.style.right="30px";

    darkButton.style.width="55px";

    darkButton.style.height="55px";

    darkButton.style.borderRadius="50%";

    darkButton.style.background="#5D4037";

    darkButton.style.color="white";

    darkButton.style.fontSize="20px";

    darkButton.style.cursor="pointer";

    darkButton.style.border="none";

    darkButton.style.zIndex="999";

    document.body.appendChild(darkButton);

    darkButton.onclick=()=>{

        document.body.classList.toggle("dark");

    };

    // ==========================================
    // Blog Card Animation
    // ==========================================

    document.querySelectorAll(".blog-card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-12px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });

    // ==========================================
    // Ripple Effect
    // ==========================================

    document.querySelectorAll("button").forEach(button=>{

        button.addEventListener("click",function(e){

            const circle=document.createElement("span");

            circle.style.position="absolute";

            circle.style.width="20px";

            circle.style.height="20px";

            circle.style.background="rgba(255,255,255,.4)";

            circle.style.borderRadius="50%";

            circle.style.left=e.offsetX+"px";

            circle.style.top=e.offsetY+"px";

            circle.style.transform="translate(-50%,-50%)";

            circle.style.animation="ripple .6s linear";

            this.appendChild(circle);

            setTimeout(()=>{

                circle.remove();

            },600);

        });

    });

    // ==========================================
    // Loader
    // ==========================================

    const loader=document.createElement("div");

    loader.className="loader";

    document.body.prepend(loader);

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.style.opacity="0";

            loader.style.pointerEvents="none";

            setTimeout(()=>{

                loader.remove();

            },500);

        },500);

    });

});

// ==========================================
// Ripple Animation CSS
// ==========================================

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

from{

opacity:1;

transform:translate(-50%,-50%) scale(0);

}

to{

opacity:0;

transform:translate(-50%,-50%) scale(12);

}

}

button{

overflow:hidden;

position:relative;

}

`;

document.head.appendChild(style);