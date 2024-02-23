
function randomOperator() {
    return Math.random() < 0.5 ? '+' : '-';
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function generateExpression() {
     let Operator = ['+', '-', '','-'][Math.floor(Math.random() * 4)];
    return (
      Operator +
      randomNumber(0, 15) +
      randomOperator() +
      randomNumber(0, 15)
    );
}

function getAint(minmax) {
    return Math.floor(Math.random() * ((minmax*2)+1)) - minmax;
};

function generateRandomLinearEquation() {
    var a, b, c, x;

    // Generate 'a' until it's not zero
    do {
        a = getAint(10);//Math.floor(Math.random() * 31) - 15; // Random integer between -15 and 15
    } while (a === 0);

    // Generate 'x' to ensure it's an integer
    x = getAint(10);// Math.floor(Math.random() * 31) - 15; // Random integer between -15 and 15

    // Generate 'b' and 'c' based on 'a' and 'x'
    b = Math.floor(Math.random() * 31) - 15;
    c = a * x + b;

    // Build the equation string
    var equation;
    if (b >= 0) {
        equation = a + "x + " + b + " = " + c;
    } else {
        equation = a + "x - " + Math.abs(b) + " = " + c;
    }

    // Return the generated equation and solution for 'x'

    
    return { equation: equation, x: x };
}



var evalx_;
var x_;
var eq;
let eq_question_attempted = 0;
let sahi_eq_questions = 0;
let galat_eq_questions = 0;

function giveAquestion_(){
    eq = generateRandomLinearEquation()
    x_=eq.equation;
    evalx_ = eq.x;
    $('.ques_equals').text(x_);
    $('.ans_equals').val('');
    console.log(x_);
    console.log(evalx_);
    // console.log(x_);
}
giveAquestion_();
$('.newq_equals').on('click',function(e){giveAquestion();
    e.preventDefault();
});

$('.QnAequals').on('submit',function(e){
    e.preventDefault();
    let ans, val,name;
    val = $('.ans_equals').val();
    name = $('.username').val();
    if(evalx_ == val){
        ans = !0;
    }else{
        ans=!1;
    }

    const reply = hwapi('.replyequals').h('').get();
    eq_question_attempted +=1;
    if(ans)$('.ans_equals').val('');
    

    setTimeout(() => {
        if (ans){
            hwapi().c('right').h(sahi).a(reply);
            sahi_eq_questions +=1;

            $('.ques_equals').append('<br>x = '+val);
            setTimeout(() => {
                hwapi(reply).h('<div class="next">अगला सवाल <i class="bi bi-arrow-down-circle-fill"></i> </div>');
                giveAquestion_();    
            }, 5000);
        } else {
            hwapi().c('wrong').h(galat).a(reply);
            galat_eq_questions+=1;
        }
        let result = sahi_eq_questions +' / '+ eq_question_attempted       
        $('.resultequals').text(result);
        sendlog(username,x_,evalx_,val,result,true);

    }, 200);

});
