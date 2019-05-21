(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/

    $('#password, #username, #repwd').on('keyup', function () {
        var usrvalid = false,
            pwdvalid = false,
            rpwdvalid = false,
            message = '';
    
        $('.form input').each(function() {
            var $this = $(this);
                
            var inputName = $this.attr('name');
            if(!$this.val()) {                     
                if (inputName == 'username') {
                    message = inputName+' required';
                    usrvalid = false;
                }else if (inputName == 'password') {
                    message = inputName+' required';
                    pwdvalid = false;
                }                
            }else{
                if (inputName == 'username') {
                    usrvalid = true;
                }else if (inputName == 'password' || 'repwd') {
                    if ($('#password').val() != $('#repwd').val()) {
                        message = "password not match";                        
                        pwdvalid = false;
                        rpwdvalid = false;
                    }else{  
                        pwdvalid = true;
                        rpwdvalid = true;
                    }
                }
            }            
        });
    
        if(usrvalid && pwdvalid && rpwdvalid){
            $('#Btnregister').prop('disabled', false);   
            $('#msg').html(''); 
        }else{            
            $('#Btnregister').prop('disabled', true);  
            $('#msg').html(message).css('color', 'red');
        }
    });

    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
   
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
        
    });


})(jQuery);