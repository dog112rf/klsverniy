var vision_changer = document.getElementById("vision_changer")
var mobile_vision_changer = document.getElementById("mobile_vision_changer")
var body = document.getElementById("body")

checkCookie("low_vision")

function checkCookie (name) {
    if (getCookie(name) == "true") {
        body.classList.add("low_vision")
    } else {
        body.classList.remove("low_vision")
    } 
}


vision_changer.addEventListener("click", function(){
    
checkCookie("low_vision")
function checkCookie (name) {
    if (getCookie(name) == "true") {
        body.classList.remove("low_vision")
        setCookie("low_vision","false",{'max-age': 363300})
    } else {
        body.classList.add("low_vision")
        setCookie("low_vision","true",{'max-age': 363300})
    } 
}
})

mobile_vision_changer.addEventListener("click", function(){
    checkCookie("low_vision")
    function checkCookie (name) {
        if (getCookie(name) == "true") {
            body.classList.remove("low_vision")
            setCookie("low_vision","false",{'max-age': 363300})
        } else {
            body.classList.add("low_vision")
            setCookie("low_vision","true",{'max-age': 363300})
        } 
    }
})