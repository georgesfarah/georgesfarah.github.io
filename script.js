  $(document).ready(function() {
    $('.sidenav').sidenav();

    $('#close').on("click", function() {
      $('.sidenav-overlay').click();
    });

    $('#homearrow').on("click", function() {
      display($('#about'));
    });

    $('nav li,#mobnav li').on("click", function() {
      var a = $("#" + $(this).text().toLowerCase());
      display(a);
    });

    $('.perc').hide();
    $(".determinate").css('width', '0px');

    var animatedonce = false;
    var animatedonceaboutcon = false;
    var animatedonceskillscon = false;
    var animatedonceportfoliocon = false;
    var animatedoncecontactcon = false;
    $(window).scroll(function() {

      if (isinviewport($("#skills"))) {
        if (animatedonce == false) {
          animtateskills();
          animatedonce = true;
        }
      }
      //aboutcon h4 skillscon h4 portfoliocon h4 contactcon h4
      if (isinviewport($("#aboutcon h4"))) {
        if (animatedonceaboutcon == false) {
          $("#aboutcon h4").addClass("animated slideInLeft");
          animatedonceaboutcon = true;
        }
      }
      if (isinviewport($("#skillscon h4"))) {
        if (animatedonceskillscon == false) {
          $("#skillscon h4").addClass("animated slideInLeft");
          animatedonceskillscon = true;
        }
      }
      if (isinviewport($("#portfoliocon h4"))) {
        if (animatedonceportfoliocon == false) {
          $("#portfoliocon h4").addClass("animated slideInLeft");
          animatedonceportfoliocon = true;
        }
      }
      if (isinviewport($("#contactcon h4"))) {
        if (animatedoncecontactcon == false) {
          $("#contactcon h4").addClass("animated slideInLeft");
          animatedoncecontactcon = true;
        }
      }

      ////////////
      var windscroll = $(window).scrollTop();

      $('section').each(function(i) {
        if ($(this).position().top <= windscroll + $('nav').height()) {
          $('.active').removeClass('active');
          $('nav li').eq(i).addClass('active');

          $('.mobactive').removeClass('mobactive');
          $('#mobnav span').eq(i).addClass('mobactive');
        }
      });

      if ($("#about").position().top <= windscroll + $('nav').height()) {
        $('nav').css("background-color", "#0c6fb3");
      } else {
        $('nav').css("background-color", "transparent");
      }

    });


    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {

      $('#aboutcon span').css("color", "#0c6fb3");
    }


    $("#js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "fadeIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ",",
      // The delay between the changing of each phrase in milliseconds.
      speed: 3000,
      complete: function() {
        // Called after the entrance animation is executed.
      }
    });

    ////
    $(window).stellar();

  });


  $(window).on('load', function() {
    $('#loaderContainer').hide();
    $('#homearrow').css("animation-name", "bounce-1");
    $('.animated1').addClass("animated slideInDown");
    $('.animated2').addClass("animated slideInUp");

    setTimeout(function() {
      $('#js-rotating').addClass("linebefore lineafter");
    }, 1500);

  });

  function display(section) {
    var barHeight = $('nav').height();
    $('html, body').animate({
      scrollTop: section.offset().top - barHeight + 30
    }, 1000);

  };

  function isinviewport(elem) {
    var top_of_element = elem.offset().top;
    var bottom_of_element = elem.offset().top + elem.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
      return true;
    } else {
      return false; // the element is not visible, do something else
    }
  }


  function animtateskills() {
    $(".determinate").each(function() {
      var w = $(this).data("w");
      $(this).animate({
        width: w + "%"
      }, 2000);
    });
    setTimeout(function() {
      $('.perc').fadeIn();
    }, 2300);
  }



  function openTab(url) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function sendmsg() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;

    alertify.warning('Mail currently unavailable');

  }
