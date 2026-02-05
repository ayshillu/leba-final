$(document).ready(function () {
  var display_width = $(window).width();
  var hamburger = $("#hambuger_menu");
  var menu = $("#menubody");
  var closemenu = $(".closemenu");

  $(hamburger).click(function (e) {
    menu.toggleClass("open");
    hamburger.toggleClass("open");
  });
  $(closemenu).click(function (e) {
    menu.toggleClass("open");
    hamburger.toggleClass("open");
  });

  $(".menu_body__item_wrapper li.has_child").each(function (index) {
    $(this).click(function (event) {
      $('.sub-menu').eq(index).slideToggle();
      event.preventDefault();
      event.stopImmediatePropagation();

    });
    $('.sub-menu').click(function (e){
      e.stopPropagation();
      e.stopImmediatePropagation();
    })
  })


})

$('#accordion-button-1, #accordion-button-1_1, #accordion-button-2, #accordion-button-3, #accordion-button-4, #accordion-button-5').click(function(e) {
  e.preventDefault();
  return false;
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
const itemToggle = this.getAttribute('aria-expanded');

for (i = 0; i < items.length; i++) {
  items[i].setAttribute('aria-expanded', 'false');
}

if (itemToggle == 'false') {
  this.setAttribute('aria-expanded', 'true');
}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
