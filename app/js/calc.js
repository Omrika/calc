window.addEventListener('DOMContentLoaded', function(){
   var output = document.querySelector('.output input'),
        expression = document.querySelector('.expression input');

    expression.addEventListener('keyup', function(e){
        output.value = eval(expression.value)        
    })
});

