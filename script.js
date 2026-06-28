// ================================
// ENGLISH VIBE ACADEMY
// Premium JavaScript
// ================================

// Welcome Message
window.addEventListener("load", () => {
    console.log("English Vibe Academy Loaded Successfully");
});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = this.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Admission Form
const form = document.querySelector("form");

if(form){
form.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Thank You!\n\nYour admission request has been submitted successfully.\n\nEnglish Vibe Academy will contact you soon.");

form.reset();

});
}

// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section,.card").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

observer.observe(el);

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";

topBtn.style.right="20px";

topBtn.style.bottom="20px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#0d6efd";

topBtn.style.color="#fff";

topBtn.style.fontSize="20px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.3)";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Navbar Shadow

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="#0b5ed7";

}else{

header.style.background="rgba(13,110,253,.95)";

}

});