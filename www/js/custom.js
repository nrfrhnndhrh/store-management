$(document).on("click", "ul.nav li.parent > a ", function () {
    $(this).find('i').toggleClass("fa-minus");
});
$(".sidebar span.icon").find('em:first').addClass("fa-plus");

$('#calendar').datepicker({
});

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


//index page-storelist
var storelist = [];
if (storelist.length == 0) {
    storelist.push('No store found');
}
var cList = $('ul.dfsList')
$.each(storelist, function (i) {
    var li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .appendTo(cList);
    var aaa = $('<a/>')
        .addClass('ui-all')
        .text(storelist[i])
        .appendTo(li);
});
