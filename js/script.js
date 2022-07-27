/* =================================== typing animation =================================== */
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* =================================== aside =================================== */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length
for(let i = 0; i<totalNavList; i++ ){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        removeBackSection();
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection(){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function showSection(element){
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element){
    for(let i = 0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
document.querySelector(".logo_name").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",() =>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i = 0; i<totalSection;i++){
            allSection[i].classList.toggle("open");
        }
    }

/* =================================== contact submit =================================== */


$(document).ready(function(){
  $("#contact-form").validate({
    rules:{
      contact_name:{
        required:true
      },
      contact_email:{
        required:true,
        email:true
      },
      contact_subject:{
        required:true
      },
      contact_message:{
        required:true
      }
    },
    messages:{
      contact_name:{
        required:"This field is mandatory"
      },
      contact_email:{
        required:"This field is mandatory",
        email:"Please enter a valid email address"
      },
      contact_subject:{
        required:"This field is mandatory"
      },
      contact_message:{
        required:"This field is mandatory"
      }
    },
    submitHandler: function(form) {
        $.ajax({
          url:"https://script.google.com/macros/s/AKfycbwZ4B7Hh7G3Qmi5tSMKcgsTmUOir-MHlViZux2G/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
            Swal.fire("Success", "Thank You! Your message has been sent.", "success");
            $("#contact-form")[0].reset();
          },
          error:function (err){
            Swal.fire("Error", "Sorry! Something went wrong, Please try again.", "error");
          }
      })
    }
  })
})





