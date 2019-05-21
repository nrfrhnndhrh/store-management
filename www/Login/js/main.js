
(function ($) {
    "use strict";

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

    //validation

    $('#password, #username').on('keyup', function () {
        var usrvalid = false,
            pwdvalid = false,
            message = '';
    
        $('.validate-form input').each(function() {
            var $this = $(this);
                
            var inputName = $this.attr('name');
            if(!$this.val()) {        
                message = inputName+' required';             
                if (inputName == 'username') {
                    usrvalid = false;
                }else if (inputName == 'password') {
                    pwdvalid = false;
                }
            }else{                     
                if (inputName == 'username') {
                    usrvalid = true;
                }else if (inputName == 'password') {
                    pwdvalid = true;
                }
            }            
        });
    
        if(usrvalid && pwdvalid){
            $('#Btnlogin').prop('disabled', false);  
            $('#msg').html('').css('color', 'red');
        }else{            
            $('#Btnlogin').prop('disabled', true);  
            $('#msg').html(message).css('color', 'red');
        }
    });
  
    /*==================================================================
    [ Validate ]*/
    // var input = $('.validate-input .input100');

    // $('.validate-form').on('submit',function(){
    // $('#Btnlogin').on('click',function(){
    //     var check = true;

    //     for(var i=0; i<input.length; i++) {
    //         if(validate(input[i]) == false){
    //             showValidate(input[i]);
    //             check=false;
    //         }
    //     }

    //     return check;
    // });


    // $('.validate-form .input100').each(function(){
    //     $(this).focus(function(){
    //        hideValidate(this);
    //     });
    // });

    // function validate (input) {
    //     if($(input).attr('type') == 'username' || $(input).attr('name') == 'username') {
    //         if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    //             return false;
    //         }
    //     }
    //     else {
    //         if($(input).val().trim() == ''){
    //             return false;
    //         }
    //     }
    // }

    // function showValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).addClass('alert-validate');
    // }

    // function hideValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).removeClass('alert-validate');
    // }
    
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