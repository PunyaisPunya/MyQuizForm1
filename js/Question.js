class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name here...");
   //Create a input box to enter the number
    this.input2 = createInput("").attribute("placeholder", "Enter the correct option")
 

    this.button = createButton('Submit');

    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h2");
    this.option1 = createElement("h5");
    this.option2 = createElement("h5");
    this.option3 = createElement("h5");
    this.option4 = createElement("h5");
    this.message = createElement("h2");
    this.greeting = createElement("h3")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    var op1 = `1: Everyone`
    var op2 = `2: Envelope`
    var op3 = `3: Estimate`
    var op4 = `4: Example`
    var ques = `Q -  What starts and ends with letter 'E',but has only one letter.`;
    
    this.option1.html(op1);
    this.option2.html(op2);
    this.option3.html(op3);
    this.option4.html(op4);
    this.question.html(ques);
    
    this.option1.position(100,height/2-120);
    this.option2.position(100,height/2-90);
    this.option3.position(100,height/2-60);
    this.option4.position(100,height/2-30);

    this.greeting.position(300,350);

    this.question.position(50,height/2-150);

    this.input2.position(400, 250);
    this.input1.position(150, 250);

    this.button.position(350, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
         var greet  = `Thank you, your answer has been submitted `
         this.greeting.html(greet);
    })


  }
}
