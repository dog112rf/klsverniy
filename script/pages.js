var menu_button_1 = document.getElementById("menu_button_1")
var menu_button_2 = document.getElementById("menu_button_2")
var menu_button_3 = document.getElementById("menu_button_3")
var menu_button_4 = document.getElementById("menu_button_4")
var menu_button_5 = document.getElementById("menu_button_5")
var menu_button_6 = document.getElementById("menu_button_6")
var menu_button_7 = document.getElementById("menu_button_7")
var menu_button_8 = document.getElementById("menu_button_8")
var menu_button_9 = document.getElementById("menu_button_9")
var menu_button_10 = document.getElementById("menu_button_10")

var phone_menu_button_1 = document.getElementById("phone_menu_button_1")
var phone_menu_button_2 = document.getElementById("phone_menu_button_2")
var phone_menu_button_3 = document.getElementById("phone_menu_button_3")
var phone_menu_button_4 = document.getElementById("phone_menu_button_4")
var phone_menu_button_5 = document.getElementById("phone_menu_button_5")
var phone_menu_button_6 = document.getElementById("phone_menu_button_6")
var phone_menu_button_7 = document.getElementById("phone_menu_button_7")
var phone_menu_button_8 = document.getElementById("phone_menu_button_8")
var phone_menu_button_9 = document.getElementById("phone_menu_button_9")
var phone_menu_button_10 = document.getElementById("phone_menu_button_10")

var page_1 = document.getElementById("page_1")
var page_2 = document.getElementById("page_2")
var page_3 = document.getElementById("page_3")
var page_4 = document.getElementById("page_4")
var page_5 = document.getElementById("page_5")
var page_6 = document.getElementById("page_6")
var page_7 = document.getElementById("page_7")
var page_8 = document.getElementById("page_8")
var page_9 = document.getElementById("page_9")
var page_10 = document.getElementById("page_10")

var lesson_button_1 = document.getElementById("lesson_button_1")
var lesson_button_2 = document.getElementById("lesson_button_2")
var lesson_button_3 = document.getElementById("lesson_button_3")
var lesson_button_4 = document.getElementById("lesson_button_4")

var lesson_page_1 = document.getElementById("lesson_page_1")
var lesson_page_2 = document.getElementById("lesson_page_2")
var lesson_page_3 = document.getElementById("lesson_page_3")
var lesson_page_4 = document.getElementById("lesson_page_4")
var mobile_lesson_page_1 = document.getElementById("lesson_page_1")
var mobile_lesson_page_2 = document.getElementById("lesson_page_2")
var mobile_lesson_page_3 = document.getElementById("lesson_page_3")
var mobile_lesson_page_4 = document.getElementById("lesson_page_4")

var useful_button_1 = document.getElementById("useful_button_1")
var useful_button_2 = document.getElementById("useful_button_2")
var useful_button_3 = document.getElementById("useful_button_3")
var useful_button_4 = document.getElementById("useful_button_4")
var useful_button_5 = document.getElementById("useful_button_5")

var useful_page_1 = document.getElementById("useful_page_1")
var useful_page_2 = document.getElementById("useful_page_2")
var useful_page_3 = document.getElementById("useful_page_3")
var useful_page_4 = document.getElementById("useful_page_4")
var useful_page_5 = document.getElementById("useful_page_5")

page_2.classList.add("hidden_display")
page_3.classList.add("hidden_display")  
page_4.classList.add("hidden_display")   
page_5.classList.add("hidden_display")  
page_6.classList.add("hidden_display")
page_7.classList.add("hidden_display")  
page_8.classList.add("hidden_display")   
page_9.classList.add("hidden_display")  
page_10.classList.add("hidden_display")
lesson_page_1.classList.add("hidden_display")
lesson_page_2.classList.add("hidden_display")
lesson_page_3.classList.add("hidden_display")
lesson_page_4.classList.add("hidden_display")
useful_page_1.classList.add("hidden_display")
useful_page_2.classList.add("hidden_display")
useful_page_3.classList.add("hidden_display")
useful_page_4.classList.add("hidden_display")
useful_page_5.classList.add("hidden_display")

menu_button_1.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_1.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */

    page_2.classList.add("hidden_display")
    page_3.classList.add("hidden_display")  
    page_4.classList.add("hidden_display")   
    page_5.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_1.classList.remove("hidden")
    page_1.classList.add("active")
    page_1.classList.remove("hidden_display")
    page_1.classList.add("active_display")}, 1000);
})

menu_button_2.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_2.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_3.classList.add("hidden_display")  
    page_4.classList.add("hidden_display")   
    page_5.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_2.classList.remove("hidden")
    page_2.classList.add("active")
    page_2.classList.remove("hidden_display")
    page_2.classList.add("active_display")}, 1000);
})

menu_button_3.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_3.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_4.classList.add("hidden_display")   
    page_5.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_3.classList.remove("hidden")
    page_3.classList.add("active")
    page_3.classList.remove("hidden_display")
    page_3.classList.add("active_display")}, 1000);
})

menu_button_4.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_4.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_5.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_4.classList.remove("hidden")
    page_4.classList.add("active")
    page_4.classList.remove("hidden_display")
    page_4.classList.add("active_display")}, 1000);
})

menu_button_5.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_5.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_5.classList.remove("hidden")
    page_5.classList.add("active")
    page_5.classList.remove("hidden_display")
    page_5.classList.add("active_display")}, 1000);
})

menu_button_6.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_6.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_6.classList.remove("hidden")
    page_6.classList.add("active")
    page_6.classList.remove("hidden_display")
    page_6.classList.add("active_display")}, 1000);
})

menu_button_7.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_7.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_7.classList.remove("hidden")
    page_7.classList.add("active")
    page_7.classList.remove("hidden_display")
    page_7.classList.add("active_display")}, 1000);
})

menu_button_8.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_8.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_8.classList.remove("hidden")
    page_8.classList.add("active")
    page_8.classList.remove("hidden_display")
    page_8.classList.add("active_display")}, 1000);
})

menu_button_9.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_9.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_8.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_9.classList.remove("hidden")
    page_9.classList.add("active")
    page_9.classList.remove("hidden_display")
    page_9.classList.add("active_display")}, 1000);
})

menu_button_10.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_9.classList.add("hidden")
    page_8.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_10.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_10.classList.remove("hidden")
    page_10.classList.add("active")
    page_10.classList.remove("hidden_display")
    page_10.classList.add("active_display")}, 1000);
})

phone_menu_button_1.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_1.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */

    page_2.classList.add("hidden_display")
    page_3.classList.add("hidden_display")  
    page_4.classList.add("hidden_display")   
    page_5.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_1.classList.remove("hidden")
    page_1.classList.add("active")
    page_1.classList.remove("hidden_display")
    page_1.classList.add("active_display")}, 1000);
})

phone_menu_button_2.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_2.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_3.classList.add("hidden_display")  
    page_4.classList.add("hidden_display")   
    page_5.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_2.classList.remove("hidden")
    page_2.classList.add("active")
    page_2.classList.remove("hidden_display")
    page_2.classList.add("active_display")}, 1000);
})

phone_menu_button_3.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_3.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_4.classList.add("hidden_display")   
    page_5.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_3.classList.remove("hidden")
    page_3.classList.add("active")
    page_3.classList.remove("hidden_display")
    page_3.classList.add("active_display")}, 1000);
})

phone_menu_button_4.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_4.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_5.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_4.classList.remove("hidden")
    page_4.classList.add("active")
    page_4.classList.remove("hidden_display")
    page_4.classList.add("active_display")}, 1000);
})

phone_menu_button_5.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_5.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_6.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_5.classList.remove("hidden")
    page_5.classList.add("active")
    page_5.classList.remove("hidden_display")
    page_5.classList.add("active_display")}, 1000);
})

phone_menu_button_6.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_6.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_7.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_6.classList.remove("hidden")
    page_6.classList.add("active")
    page_6.classList.remove("hidden_display")
    page_6.classList.add("active_display")}, 1000);
})

phone_menu_button_7.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_7.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_7.classList.remove("hidden")
    page_7.classList.add("active")
    page_7.classList.remove("hidden_display")
    page_7.classList.add("active_display")}, 1000);
})

phone_menu_button_8.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_8.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_8.classList.remove("hidden")
    page_8.classList.add("active")
    page_8.classList.remove("hidden_display")
    page_8.classList.add("active_display")}, 1000);
})

phone_menu_button_9.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_9.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_8.classList.add("hidden_display")  
    page_10.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_9.classList.remove("hidden")
    page_9.classList.add("active")
    page_9.classList.remove("hidden_display")
    page_9.classList.add("active_display")}, 1000);
})

phone_menu_button_10.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_9.classList.add("hidden")
    page_8.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {page_10.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")

    /* Show page we go to */
    page_10.classList.remove("hidden")
    page_10.classList.add("active")
    page_10.classList.remove("hidden_display")
    page_10.classList.add("active_display")}, 1000);
})

lesson_button_1.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {lesson_page_1.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    lesson_page_1.classList.remove("hidden")
    lesson_page_1.classList.add("active")
    lesson_page_1.classList.remove("hidden_display")
    lesson_page_1.classList.add("active_display")}, 1000);
})

lesson_button_2.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {lesson_page_2.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    lesson_page_2.classList.remove("hidden")
    lesson_page_2.classList.add("active")
    lesson_page_2.classList.remove("hidden_display")
    lesson_page_2.classList.add("active_display")}, 1000);
})

lesson_button_3.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {lesson_page_3.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    lesson_page_3.classList.remove("hidden")
    lesson_page_3.classList.add("active")
    lesson_page_3.classList.remove("hidden_display")
    lesson_page_3.classList.add("active_display")}, 1000);
})

lesson_button_4.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {lesson_page_4.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    lesson_page_4.classList.remove("hidden")
    lesson_page_4.classList.add("active")
    lesson_page_4.classList.remove("hidden_display")
    lesson_page_4.classList.add("active_display")}, 1000);
})

mobile_lesson_button_1.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {lesson_page_1.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    lesson_page_1.classList.remove("hidden")
    lesson_page_1.classList.add("active")
    lesson_page_1.classList.remove("hidden_display")
    lesson_page_1.classList.add("active_display")}, 1000);
})

mobile_lesson_button_2.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {lesson_page_2.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    lesson_page_2.classList.remove("hidden")
    lesson_page_2.classList.add("active")
    lesson_page_2.classList.remove("hidden_display")
    lesson_page_2.classList.add("active_display")}, 1000);
})

mobile_lesson_button_3.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {lesson_page_3.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    lesson_page_3.classList.remove("hidden")
    lesson_page_3.classList.add("active")
    lesson_page_3.classList.remove("hidden_display")
    lesson_page_3.classList.add("active_display")}, 1000);
})

mobile_lesson_button_4.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {lesson_page_4.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    lesson_page_4.classList.remove("hidden")
    lesson_page_4.classList.add("active")
    lesson_page_4.classList.remove("hidden_display")
    lesson_page_4.classList.add("active_display")}, 1000);
})

useful_button_1.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {useful_page_1.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_1.classList.remove("hidden")
    useful_page_1.classList.add("active")
    useful_page_1.classList.remove("hidden_display")
    useful_page_1.classList.add("active_display")}, 1000);
})

useful_button_2.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {useful_page_2.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_2.classList.remove("hidden")
    useful_page_2.classList.add("active")
    useful_page_2.classList.remove("hidden_display")
    useful_page_2.classList.add("active_display")}, 1000);
})

useful_button_3.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {useful_page_3.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_3.classList.remove("hidden")
    useful_page_3.classList.add("active")
    useful_page_3.classList.remove("hidden_display")
    useful_page_3.classList.add("active_display")}, 1000);
})

useful_button_4.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {useful_page_4.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_4.classList.remove("hidden")
    useful_page_4.classList.add("active")
    useful_page_4.classList.remove("hidden_display")
    useful_page_4.classList.add("active_display")}, 1000);
})

useful_button_5.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")

    setTimeout(() => {useful_page_5.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_5.classList.remove("hidden")
    useful_page_5.classList.add("active")
    useful_page_5.classList.remove("hidden_display")
    useful_page_5.classList.add("active_display")}, 1000);
})

mobile_useful_button_1.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {useful_page_1.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_1.classList.remove("hidden")
    useful_page_1.classList.add("active")
    useful_page_1.classList.remove("hidden_display")
    useful_page_1.classList.add("active_display")}, 1000);
})

mobile_useful_button_2.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {useful_page_2.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_2.classList.remove("hidden")
    useful_page_2.classList.add("active")
    useful_page_2.classList.remove("hidden_display")
    useful_page_2.classList.add("active_display")}, 1000);
})

mobile_useful_button_3.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_4.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {useful_page_3.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_3.classList.remove("hidden")
    useful_page_3.classList.add("active")
    useful_page_3.classList.remove("hidden_display")
    useful_page_3.classList.add("active_display")}, 1000);
})

mobile_useful_button_4.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_5.classList.add("hidden")

    setTimeout(() => {useful_page_4.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_5.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_4.classList.remove("hidden")
    useful_page_4.classList.add("active")
    useful_page_4.classList.remove("hidden_display")
    useful_page_4.classList.add("active_display")}, 1000);
})

mobile_useful_button_5.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    page_1.classList.add("hidden")
    page_2.classList.add("hidden")
    page_3.classList.add("hidden")
    page_4.classList.add("hidden")
    page_5.classList.add("hidden")
    page_6.classList.add("hidden")
    page_7.classList.add("hidden")
    page_8.classList.add("hidden")
    page_9.classList.add("hidden")
    page_10.classList.add("hidden")
    lesson_page_1.classList.add("hidden")
    lesson_page_2.classList.add("hidden")
    lesson_page_3.classList.add("hidden")
    lesson_page_4.classList.add("hidden")
    useful_page_1.classList.add("hidden")
    useful_page_2.classList.add("hidden")
    useful_page_3.classList.add("hidden")
    useful_page_4.classList.add("hidden")

    setTimeout(() => {useful_page_5.classList.remove("hidden_display")}, 500)

    setTimeout(() => {
    /* Hide other pages (display) */
    page_1.classList.add("hidden_display")   
    page_2.classList.add("hidden_display")  
    page_3.classList.add("hidden_display")   
    page_4.classList.add("hidden_display")  
    page_5.classList.add("hidden_display")
    page_6.classList.add("hidden_display")  
    page_7.classList.add("hidden_display")   
    page_9.classList.add("hidden_display")  
    page_8.classList.add("hidden_display")
    lesson_page_1.classList.add("hidden_display")
    lesson_page_2.classList.add("hidden_display")
    lesson_page_3.classList.add("hidden_display")
    lesson_page_4.classList.add("hidden_display")
    useful_page_1.classList.add("hidden_display")
    useful_page_2.classList.add("hidden_display")
    useful_page_3.classList.add("hidden_display")
    useful_page_4.classList.add("hidden_display")


    /* Show page we go to */
    useful_page_5.classList.remove("hidden")
    useful_page_5.classList.add("active")
    useful_page_5.classList.remove("hidden_display")
    useful_page_5.classList.add("active_display")}, 1000);
})