!function ($) {
    $(document).on("click", "ul.nav li.parent > a ", function () {
        $(this).find('em').toggleClass("fa-minus");
    });
    $(".sidebar span.icon").find('em:first').addClass("fa-plus");
}

(window.jQuery);
$(window).on('resize', function () {
    if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
})
$(window).on('resize', function () {
    if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
})


$(document).ready(function () {
    $('#rooms').DataTable();
});


// implementation of disabled form fields
var nowDateTime = new Date();
// var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
var minDateTime = nowDateTime.getFullYear() + '-' + ('0' + (nowDateTime.getMonth() + 1)).slice(-2) + '-' + ('0' + nowDateTime.getDate()).slice(-2) + 'T' + ('0' + nowDateTime.getHours()).slice(-2) + ':' + ('0' + nowDateTime.getMinutes()).slice(-2);
console.log(minDateTime);
document.getElementById('check_in_date').value = minDateTime;

function calculateDifference() {
    // Get the values of the start and end timestamps
    var startTimestamp = new Date(document.getElementById('check_in_date').value).getTime();
    var endTimestamp = new Date(document.getElementById('check_out_date').value).getTime();

    // Calculate the difference in milliseconds
    var differenceMs = endTimestamp - startTimestamp;

    // Convert milliseconds to days
    var totalDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    var price = document.getElementById('price').innerHTML;
    var total_price = (totalDays)*(price);
    $('#staying_day').html(totalDays);
    $('#total_price').html(total_price);
}

var joining_date = $('.joining_date').fdatepicker({
    format: 'dd-mm-yyyy',
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).data('datepicker');





