var button = document.getElementById("theme_changer")
var button2 = document.getElementById("theme_changer_2")
var target = document.getElementById("body")
var non = document.getElementById("theme_changer_image")
var yes = document.getElementById("theme_changer_image_2")
var fci_1 = document.getElementById("FCI_1")
var fci_2 = document.getElementById("FCI_2")
var rfss_1 = document.getElementById("RFSS_1")
var rfss_2 = document.getElementById("RFSS_2")
var rkf_1 = document.getElementById("RKF_1")
var rkf_2 = document.getElementById("RKF_2")
checkCookie("theme")

function checkCookie (name) {
    if (getCookie(name) == "dark") {
        target.classList.add("dark")
        button.classList.add("hidden_display")
        button2.classList.remove("hidden_display")
        non.classList.add("hidden_display")
        yes.classList.remove("hidden_display")
        fci_1.classList.add("hidden_display")
        fci_2.classList.remove("hidden_display")
        rfss_1.classList.add("hidden_display")
        rfss_2.classList.remove("hidden_display")
        rkf_1.classList.add("hidden_display")
        rkf_2.classList.remove("hidden_display")
    } else {
        target.classList.remove("dark")
        button.classList.remove("hidden_display")
        button2.classList.add("hidden_display")
        non.classList.remove("hidden_display")
        yes.classList.add("hidden_display")
        fci_1.classList.remove("hidden_display")
        fci_2.classList.add("hidden_display")
        rfss_1.classList.remove("hidden_display")
        rfss_2.classList.add("hidden_display")
        rkf_1.classList.remove("hidden_display")
        rkf_2.classList.add("hidden_display")
    } 
}

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }

button.addEventListener("click", function(){
    target.classList.add("dark")
    button.classList.add("hidden_display")
    button2.classList.remove("hidden_display")
    non.classList.add("hidden_display")
    yes.classList.remove("hidden_display")
    fci_1.classList.add("hidden_display")
    fci_2.classList.remove("hidden_display")
    rfss_1.classList.add("hidden_display")
    rfss_2.classList.remove("hidden_display")
    rkf_1.classList.add("hidden_display")
    rkf_2.classList.remove("hidden_display")
    setCookie("theme","dark",{'max-age': 363300})
})

button2.addEventListener("click", function(){
    target.classList.remove("dark")
    button.classList.remove("hidden_display")
    button2.classList.add("hidden_display")
    non.classList.remove("hidden_display")
    yes.classList.add("hidden_display")
    fci_1.classList.remove("hidden_display")
    fci_2.classList.add("hidden_display")
    rfss_1.classList.remove("hidden_display")
    rfss_2.classList.add("hidden_display")
    rkf_1.classList.remove("hidden_display")
    rkf_2.classList.add("hidden_display")
    setCookie("theme","light",{'max-age': 363300})
})