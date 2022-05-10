$('.nav-toggle').click(function(e) {
  
    e.preventDefault();
    $("html").toggleClass("openNav");
    $(".nav-toggle").toggleClass("active");
    $(".phone_menu").toggleClass("hidden");
    setTimeout(() => {$(".menu_button").toggleClass("hidden_display"); $(".social_button").toggleClass("hidden_display"); }, 50);
    
  });