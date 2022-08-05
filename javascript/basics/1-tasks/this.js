let calculator = {
    read(){
        this.a = +prompt("num1 : ");
        this.b = +prompt("num2 : ");
    },

    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    },
}

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );


let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // shows the current step
        console.log( this.step );
    }
};

// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep().down().showStep();     // shows 1 then 0
// Such approach is widely used across JavaScript libraries.


//abhi agr krenge to error aaega kyunki ladder.up() ho jaega but fir up().up() thodi na kuch h to error aa jaega

//to ye h que isme bss itna krna h ki hr function ke end mai return "this" simple

let ladder2 = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
      return this;
    }
};

ladder2.up().up().down().showStep().down().showStep();

//ab kya hoga ki ladder2.up() se step++ ho jarega or fir ye return krega this mtlb ladder to iski jgh ladder aa jaega fir ladder.up() frse.... ok!