wow = new WOW({
    mobile:       false,       // default
})
wow.init();

$(document).ready(function () {
    
  //Модальные окна
  $('#open_call').on('click', function() {
    $('.modal').toggleClass('open');
  });
  $('.modal__block-close').on('click', function() {
    $('.modal').removeClass('open');
    $('.modal-succes').removeClass('open');
  });
  //формы
  
$('.test').validate(
  {  
    errorPlacement: function(error, element) {
        error.insertBefore(element);
    }, 
      rules:{
          fio: {
              required: true,
              minlength: 2,
              maxlength: 30
              },
          phone : {
              required: true,
              minlength: 9,
              maxlength: 12
          } 
      },
      messages:{
          "fio":{
              required: "Заполните это поле",
              minlength: "От 2 до 30 символов",
              maxlength: "От 2 до 30 символов"
          },
          "phone":{
            required: "Заполните это поле",
            minlength: "От 9 до 12 символов",
            maxlength: "От 9 до 12 символов"
        }                         
      },
      submitHandler: function() {
        $(function() {
          var fio = $('[name = fio]').val(),
              phone = $('[name = phone]').val();
      
          $.ajax({
            url: '../php/send.php',
            data:{fio:fio, phone:phone},
            success: function(){
              $('.modal-succes').toggleClass('open');
              $('.js-ajax').trigger('reset');}
          });
          return false;
        });
      }
  });

  $('.form').validate(
    {   
        rules:{
            fio: {
                required: true,
                minlength: 2,
                maxlength: 30
                },
            phone : {
                required: true,
                minlength: 9,
                maxlength: 12
            } 
        },
        messages:{
            "fio":{
                required: "Заполните это поле",
                minlength: "От 2 до 30 символов",
                maxlength: "От 2 до 30 символов"
            },
            "phone":{
              required: "Заполните это поле",
              minlength: "От 9 до 12 символов",
              maxlength: "От 9 до 12 символов"
          }                         
        },
        submitHandler: function() {
          $(function() {
            var fio = $('[name = fio]').val(),
                phone = $('[name = phone]').val();
        
            $.ajax({
              url: '../php/send.php',
              data:{fio:fio, phone:phone},
              success: function(){
                $('.modal-succes').toggleClass('open');
                $('.js-ajax').trigger('reset');}
            });
            return false;
          });
        }
    });

    $('.footer-feedback__block-form').validate(
      {   
          rules:{
              fio: {
                  required: true,
                  minlength: 2,
                  maxlength: 30
                  },
              phone : {
                  required: true,
                  minlength: 9,
                  maxlength: 12
              } 
          },
          messages:{
              "fio":{
                  required: "Заполните это поле",
                  minlength: "От 2 до 30 символов",
                  maxlength: "От 2 до 30 символов"
              },
              "phone":{
                required: "Заполните это поле",
                minlength: "От 9 до 12 символов",
                maxlength: "От 9 до 12 символов"
            }                         
          },
          submitHandler: function() {
            $(function() {
              var fio = $('[name = fio]').val(),
                  phone = $('[name = phone]').val();
          
              $.ajax({
                url: './php/send.php',
                data:{fio:fio, phone:phone},
                success: function(){
                  $('.modal-succes').toggleClass('open');
                  $('.js-ajax').trigger('reset');}
              });
              return false;
            });
          }
      });
});

//Слайдер с фотками
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})