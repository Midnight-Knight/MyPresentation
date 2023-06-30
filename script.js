const options5 = {
    root: document.querySelector('#viewport'),
    rootMargin: '100% 0px 0px 0px',
    threshold: 0.5
};

let objStart = false;
let obj1 = false;
let obj2 = false;
let obj3 = false;
let obj4 = false;
let obj5 = false;
let obj6 = false;
let obj7 = false;
let obj8 = false;

const callbackRight = (entries, observer, id, obj) => {
    console.log("right");
    entries.forEach((entry) => {
        if (entry.isIntersecting == true) {
            obj = true;
        }
        id.style.animation = obj ? `Right 1.5s 1 running` : `Right 1.5s 1 paused`;
    });
};

const callbackLeft = (entries, observer, id, obj) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting == true) {
            obj = true;
        }
        id.style.animation = obj ? `Left 1.5s 1 running` : `Left 1.5s 1 paused`;
    });
};

const targetStart = document.getElementById("SectionStart");
const target1 = document.getElementById("S1");
const target2 = document.getElementById("S2");
const target3 = document.getElementById("S3");
const target4 = document.getElementById("S4");
const target5 = document.getElementById("S5");
const target6 = document.getElementById("S6");
const target7 = document.getElementById("S7");
const target8 = document.getElementById("S8");

const observerStart = new IntersectionObserver((entries, observer) => {
    callbackRight(entries, observer, document.getElementById("ImageStart"), objStart);
}, options5);

const observer1 = new IntersectionObserver((entries, observer) => {
    callbackLeft(entries, observer, document.getElementById("I1"), obj1);
}, options5);

const observer2 = new IntersectionObserver((entries, observer) => {
    callbackRight(entries, observer, document.getElementById("I2"), obj2);
}, options5);

const observer3 = new IntersectionObserver((entries, observer) => {
    callbackLeft(entries, observer, document.getElementById("I3"), obj3);
}, options5);

const observer4 = new IntersectionObserver((entries, observer) => {
    callbackRight(entries, observer, document.getElementById("I4"), obj4);
}, options5);

const observer5 = new IntersectionObserver((entries, observer) => {
    callbackLeft(entries, observer, document.getElementById("I5"), obj5);
}, options5);

const observer6 = new IntersectionObserver((entries, observer) => {
    callbackRight(entries, observer, document.getElementById("I6"), obj6);
}, options5);

const observer7 = new IntersectionObserver((entries, observer) => {
    callbackLeft(entries, observer, document.getElementById("I7"), obj7);
}, options5);

const observer8 = new IntersectionObserver((entries, observer) => {
    callbackRight(entries, observer, document.getElementById("I8"), obj8);
}, options5);


observerStart.observe(targetStart);
observer1.observe(target1);
observer2.observe(target2);
observer3.observe(target3);
observer4.observe(target4);
observer5.observe(target5);
observer6.observe(target6);
observer7.observe(target7);
observer8.observe(target8);