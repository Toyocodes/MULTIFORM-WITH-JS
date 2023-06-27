//toggle begins

        const switchCheckbox = document.getElementById('switch');
        const pricePlanMonthly = document.getElementById('price-plan-monthly');
        const pricePlanYearly = document.getElementById('price-plan-yearly');
        const monthlyText = document.querySelector('.monthly');
        const yearlyText = document.querySelector('.yearly');

        switchCheckbox.addEventListener('change', function() {
          if (this.checked) {
            pricePlanMonthly.style.display = 'none';
            pricePlanYearly.style.display = 'block';
            pricePlanYearly.style.display = 'flex';
            monthlyText.style.color = '#888';
            yearlyText.style.color = 'var(--marine-blue)';
            
          } else {
            pricePlanMonthly.style.display = 'block';
            pricePlanMonthly.style.display = 'flex';
            pricePlanYearly.style.display = 'none';
            monthlyText.style.color = 'var(--marine-blue)';
            yearlyText.style.color = '#888';
          }
        });
//toggle ends

//forms begins

let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");
let form3 = document.querySelector(".form3");
let form4 = document.querySelector(".form4");
let form4b = document.querySelector(".form4b");
let form5 = document.querySelector(".form5");

let form1Btn = document.querySelector(".form1-btns");
let form2Btn = document.querySelector(".form2-btns");
let form3Btn = document.querySelector(".form3-btns");
let form4Btn = document.querySelector(".form4-btns");
let form4bBtn = document.querySelector(".form4b-btns");

let form1nextBtn = document.querySelector(".form1-btns .next-btn");
let form2prevBtn = document.querySelector(".form2-btns .prev-btn");
let form2nextBtn = document.querySelector(".form2-btns .next-btn");
let form3prevBtn = document.querySelector(".form3-btns .prev-btn");
let form3nextBtn = document.querySelector(".form3-btns .next-btn");
let form4prevBtn = document.querySelector(".form4-btns .prev-btn");
let form4nextBtn = document.querySelector(".form4-btns .next-btn");

let form1ProgressBar = document.querySelector(".form1-progress")
let form2ProgressBar = document.querySelector(".form2-progress")
let form3ProgressBar = document.querySelector(".form3-progress")
let form4ProgressBar = document.querySelector(".form4-progress")
let submitBtn = document.querySelector(".submit-btn");

let form4submitBtn = document.querySelector(".form4-btns .submit-btn");

const changeToMonthly = document.querySelector(".changeToMonthly");
const changeToYearly = document.querySelector(".changeToYearly");

changeToYearly.addEventListener("click", ()=>{
    form4b.style.display = "block";
    form4.style.display = "none";
});
changeToMonthly.addEventListener("click", ()=>{
    form4.style.display = "block";
    form4b.style.display = "none";
    // this is working
});

form1nextBtn.addEventListener("click", ()=>{
    form1.style.display = "none";
    form2.style.display = "block";
    form1Btn.style.display = "none";
    form2Btn.style.display = "flex";
    form2ProgressBar.classList.add("active");
    form1ProgressBar.classList.remove("active")
    
});
form2prevBtn.addEventListener("click", ()=>{
    form1.style.display = "block";
    form2.style.display = "none";
    form1Btn.style.display = "flex";
    form2Btn.style.display = "none";
    form1ProgressBar.classList.add("active")
    form2ProgressBar.classList.remove("active");
});

form2nextBtn.addEventListener("click", ()=>{
    form2.style.display = "none";
    form3.style.display = "block";
    form2Btn.style.display = "none";
    form3Btn.style.display = "flex";
    form2ProgressBar.classList.remove("active")
    form3ProgressBar.classList.add("active");
});
form3prevBtn.addEventListener("click", ()=>{
    form2.style.display = "block";
    form3.style.display = "none";
    form2Btn.style.display = "flex";
    form3Btn.style.display = "none";
    form2ProgressBar.classList.add("active")
    form3ProgressBar.classList.remove("active");
});

form3nextBtn.addEventListener("click", ()=>{
    form3.style.display = "none";
    form4.style.display = "block";
    form3Btn.style.display = "none";
    form4Btn.style.display = "flex";
    form3ProgressBar.classList.remove("active")
    form4ProgressBar.classList.add("active");
});
form4prevBtn.addEventListener("click", ()=>{
    form3.style.display = "block";
    form4.style.display = "none";
    form3Btn.style.display = "flex";
    form4Btn.style.display = "none";
    form3ProgressBar.classList.add("active")
    form4ProgressBar.classList.remove("active");
});
submitBtn.addEventListener("click", ()=>{
    form5.style.display = "flex";
    form4.style.display = "none";
    form4Btn.style.display = "none"

    
});


