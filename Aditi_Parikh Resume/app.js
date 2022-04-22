
window.ityped.init(document.querySelector('.ityped'),{
    strings: ["Aditi.", "A Web-Developer."],
    loop: true
})









/*

Navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

container
const TypeWriter = function(txtElement, words, wait = 000) {
  this.txtElement = txtElement;
   this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

/* Type Method 
TypeWriter.prototype.type = function() {
// Current index of word
 const current = this.wordIndex % this.words.length;
// Get full text of current word
 const fullTxt = this.words[current];

 // Check if deleting
 if(this.isDeleting) {
// Remove char
this.txt = fullTxt.substring(0, this.txt.length - 1);
 } else {
 // Add char
   this.txt = fullTxt.substring(0, this.txt.length + 1);
 }

// Insert txt into element
 this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

 // Initial Type Speed
 let typeSpeed = 300;

   if(this.isDeleting) {
   typeSpeed /= 2;
}

// If word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
// Make pause at end
    typeSpeed = this.wait;
// Set delete to true
    this.isDeleting = true;
 } else if(this.isDeleting && this.txt === '') {
     this.isDeleting = false;
// Move to next word
     this.wordIndex++;
// Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
 }

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

/*AboutUs Page 
const leftColumn = document.querySelector(".left");
const rightColumn = document.querySelector(".right");
var current = 'blue';

window.addEventListener('keyup', (e)=>{
    if(e.key == 'ArrowUp'){//up
        prev();
    }
    if(e.key == 'ArrowDown'){//down

        next();
    }
});

document.addEventListener('mousewheel', scroll);
document.addEventListener('DOMMouseScroll', scroll);


var w;
function scroll(e){
    clearTimeout(w);
    e.preventDefault();
    var e = window.event || e;
    w = setTimeout(() => {
        w = undefined;
        if(e.wheelDelta < 0 || e.detail > 0){
            next();
        }
        if (e.wheelDelta > 0  || e.detail < 0){
            prev();
        } 
    }, 100);
    

}

function next(){
    let r,l;

    switch(current){
        case 'gold':{//to show blue and start over
            l='0';
            r='-200';
            current = 'blue';
            
            break;
        }
        case 'blue':{ //to show red
            l= '-100';
            r= '-100';
            current = 'red';
            break;
        }
        case 'red':{//to show gold
            l='-200';
            r='0';
            current = 'gold';
            break;
        }
        
    }
    
    leftColumn.style.transform = `translateY(${l}vh)`;
    rightColumn.style.transform = `translateY(${r}vh)`;

}
function prev(){
    let r,l;

    switch(current){
        case 'red':{//to show blue and start over
            l='0';
            r='-200';
            current = 'blue';
            break;
        }
        case 'blue':{ //to show gold
            l= '-200';
            r= '0';
            current = 'gold';
            break;
        }
        case 'gold':{//to show red
            l='-100';
            r='-100';
            current = 'red';
            break;
        }
        
    }
    
    leftColumn.style.transform = `translateY(${l}vh)`;
    rightColumn.style.transform = `translateY(${r}vh)`;
}
*/