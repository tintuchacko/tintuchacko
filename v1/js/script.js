

    $(document).ready(function(){
      $("#success_message").hide();
      $("#loading").hide();
      function loading_show(){
        $('#loading').fadeIn('fast');
      }
      function loading_hide(){
        $('#loading').fadeOut('fast');
      }     

    $("#submit-form").validate({
      rules:{
        name:{
          required:true
        },
        email:{
          required:true,
          email:true
        },
        message:{
          required:true
        }
      },
      messages:{
        name:{
          required:"This field is mandatory"
        },
        email:{
          required:"This field is mandatory",
          email:"Please enter a valid email address"
        },
        message:{
          required:"This field is mandatory"
        }
      },
      submitHandler: function(form) {
        loading_show();
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwZ4B7Hh7G3Qmi5tSMKcgsTmUOir-MHlViZux2G/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                
                // window.location.reload()
                //window.location.href="https://google.com"

                loading_hide();
                $("#submit-form")[0].reset();

                $('#success_message').fadeIn();
                setTimeout(function() {
                $('#success_message').fadeOut("slow");
                }, 3000 );


            },
            error:function (err){
                alert("Something Error")

            }
        })
      }
    })
  })


    $(window).scroll(function(){
  
      var scrollTop = $(document).scrollTop();
      var anchors = $('body').find('section');
      console.log(anchors);

      for (var i = 0; i < anchors.length; i++){
          if (scrollTop > $(anchors[i]).offset().top - 50 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 50) {
              $('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
          } else {
              $('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
          }
      }
      });
