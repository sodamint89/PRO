/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/** ******  left menu  *********************** **/
$(function () {
    $('#sidebar-menu li ul').slideUp();
    $('#sidebar-menu li').removeClass('active');

    $('#sidebar-menu li').on('click touchstart', function() {
        var link = $('a', this).attr('href');

        if(link) { 
            window.location.href = link;
        } else {
            if ($(this).is('.active')) {
                $(this).removeClass('active');
                $('ul', this).slideUp();
            } else {
                $('#sidebar-menu li').removeClass('active');
                $('#sidebar-menu li ul').slideUp();
                
                $(this).addClass('active');
                $('ul', this).slideDown();
            }
        }
    });

    $('#menu_toggle').click(function () {
        if ($('body').hasClass('nav-md')) {
            $('body').removeClass('nav-md').addClass('nav-sm');
            $('.left_col').removeClass('scroll-view').removeAttr('style');
            $('.sidebar-footer').hide();

            if ($('#sidebar-menu li').hasClass('active')) {
                $('#sidebar-menu li.active').addClass('active-sm').removeClass('active');
            }
        } else {
            $('body').removeClass('nav-sm').addClass('nav-md');
            $('.sidebar-footer').show();

            if ($('#sidebar-menu li').hasClass('active-sm')) {
                $('#sidebar-menu li.active-sm').addClass('active').removeClass('active-sm');
            }
        }
    });
});

/* Sidebar Menu active class */
$(function () {
    var url = window.location;
    $('#sidebar-menu a[href="' + url + '"]').parent('li').addClass('current-page');
    $('#sidebar-menu a').filter(function () {
        return this.href == url;
    }).parent('li').addClass('current-page').parent('ul').slideDown().parent().addClass('active');
});

/** ******  /left menu  *********************** **/
/** ******  right_col height flexible  *********************** **/
$(".right_col").css("min-height", $(window).height());
$(window).resize(function () {
    $(".right_col").css("min-height", $(window).height());
});
/** ******  /right_col height flexible  *********************** **/



/** ******  tooltip  *********************** **/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
/** ******  /tooltip  *********************** **/
/** ******  progressbar  *********************** **/
if ($(".progress .progress-bar")[0]) {
    $('.progress .progress-bar').progressbar(); // bootstrap 3
}
/** ******  /progressbar  *********************** **/
/** ******  switchery  *********************** **/
if ($(".js-switch")[0]) {
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function (html) {
        var switchery = new Switchery(html, {
            color: '#26B99A'
        });
    });
}
/** ******  /switcher  *********************** **/
/** ******  collapse panel  *********************** **/
// Close ibox function
$('.close-link').click(function () {
    var content = $(this).closest('div.x_panel');
    content.remove();
});

// Collapse ibox function
$('.collapse-link').click(function () {
    var x_panel = $(this).closest('div.x_panel');
    var button = $(this).find('i');
    var content = x_panel.find('div.x_content');
    content.slideToggle(200);
    (x_panel.hasClass('fixed_height_390') ? x_panel.toggleClass('').toggleClass('fixed_height_390') : '');
    (x_panel.hasClass('fixed_height_320') ? x_panel.toggleClass('').toggleClass('fixed_height_320') : '');
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    setTimeout(function () {
        x_panel.resize();
    }, 50);
});
/** ******  /collapse panel  *********************** **/
/** ******  iswitch  *********************** **/
if ($("input.flat")[0]) {
    $(document).ready(function () {
        $('input.flat').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green'
        });
    });
}
/** ******  /iswitch  *********************** **/
/** ******  star rating  *********************** **/
// Starrr plugin (https://github.com/dobtco/starrr)
var __slice = [].slice;

(function ($, window) {
    var Starrr;

    Starrr = (function () {
        Starrr.prototype.defaults = {
            rating: void 0,
            numStars: 5,
            change: function (e, value) {
            }
        };

        function Starrr($el, options) {
            var i, _, _ref,
                    _this = this;

            this.options = $.extend({}, this.defaults, options);
            this.$el = $el;
            _ref = this.defaults;
            for (i in _ref) {
                _ = _ref[i];
                if (this.$el.data(i) != null) {
                    this.options[i] = this.$el.data(i);
                }
            }
            this.createStars();
            this.syncRating();
            this.$el.on('mouseover.starrr', 'span', function (e) {
                return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
            });
            this.$el.on('mouseout.starrr', function () {
                return _this.syncRating();
            });
            this.$el.on('click.starrr', 'span', function (e) {
                return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
            });
            this.$el.on('starrr:change', this.options.change);
        }

        Starrr.prototype.createStars = function () {
            var _i, _ref, _results;

            _results = [];
            for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
                _results.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
            }
            return _results;
        };

        Starrr.prototype.setRating = function (rating) {
            if (this.options.rating === rating) {
                rating = void 0;
            }
            this.options.rating = rating;
            this.syncRating();
            return this.$el.trigger('starrr:change', rating);
        };

        Starrr.prototype.syncRating = function (rating) {
            var i, _i, _j, _ref;

            rating || (rating = this.options.rating);
            if (rating) {
                for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                    this.$el.find('span').eq(i).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
                }
            }
            if (rating && rating < 5) {
                for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
                    this.$el.find('span').eq(i).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
                }
            }
            if (!rating) {
                return this.$el.find('span').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
            }
        };

        return Starrr;

    })();
    return $.fn.extend({
        starrr: function () {
            var args, option;

            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            return this.each(function () {
                var data;

                data = $(this).data('star-rating');
                if (!data) {
                    $(this).data('star-rating', (data = new Starrr($(this), option)));
                }
                if (typeof option === 'string') {
                    return data[option].apply(data, args);
                }
            });
        }
    });
})(window.jQuery, window);

$(function () {
    return $(".starrr").starrr();
});

$(document).ready(function () {

    $('#stars').on('starrr:change', function (e, value) {
        $('#count').html(value);
    });


    $('#stars-existing').on('starrr:change', function (e, value) {
        $('#count-existing').html(value);
    });

});
/** ******  /star rating  *********************** **/
/** ******  table  *********************** **/
$('table input').on('ifChecked', function () {
    check_state = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('table input').on('ifUnchecked', function () {
    check_state = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});

var check_state = '';
$('.bulk_action input').on('ifChecked', function () {
    check_state = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('.bulk_action input').on('ifUnchecked', function () {
    check_state = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});
$('.bulk_action input#check-all').on('ifChecked', function () {
    check_state = 'check_all';
    countChecked();
});
$('.bulk_action input#check-all').on('ifUnchecked', function () {
    check_state = 'uncheck_all';
    countChecked();
});

function countChecked() {
    if (check_state == 'check_all') {
        $(".bulk_action input[name='table_records']").iCheck('check');
    }
    if (check_state == 'uncheck_all') {
        $(".bulk_action input[name='table_records']").iCheck('uncheck');
    }
    var n = $(".bulk_action input[name='table_records']:checked").length;
    if (n > 0) {
        $('.column-title').hide();
        $('.bulk-actions').show();
        $('.action-cnt').html(n + ' Records Selected');
    } else {
        $('.column-title').show();
        $('.bulk-actions').hide();
    }
}
/** ******  /table  *********************** **/
/** ******    *********************** **/
/** ******    *********************** **/
/** ******    *********************** **/
/** ******    *********************** **/
/** ******    *********************** **/
/** ******    *********************** **/
/** ******  Accordion  *********************** **/

$(function () {
    $(".expand").on("click", function () {
        $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if ($expand.text() == "+") {
            $expand.text("-");
        } else {
            $expand.text("+");
        }
    });
});

/** ******  Accordion  *********************** **/

/** ******  scrollview  *********************** **/
$(document).ready(function () {

    $(".scroll-view").niceScroll({
        touchbehavior: true,
        cursorcolor: "rgba(42, 63, 84, 0.35)"
    });

});
/** ******  /scrollview  *********************** **/

/** ******  NProgress  *********************** **/
if (typeof NProgress != 'undefined') {
    $(document).ready(function () {
        NProgress.start();
    });

    $(window).load(function () {
        NProgress.done();
    });
}
/** ******  NProgress  *********************** **/

$(".inputs").keyup(function () {
    alert(this.value.length+ ' s ' + this.maxLength)

    if (this.value.length == this.maxLength) {
        var $next = $(this).next('.inputs');
        alert($next.length);
        if ($next.length){
            alert('');
            $(this).next('.inputs').focus();
        }

        else{
            alert('s');
            $(this).blur();
        }

    }
});

$(".saraly_format").blur(function(){
//    alert('');
//    $(this).parse({format:"#,###.00", locale:"us"});
//    $(this).formatNumber({format:"#,###.00", locale:"us"});
//    var data = $(this).val();
//    alert(data);

//    var newData = data+'.00';
//    alert(newData);
//    var number = parseDecimal(data);
//    var number = $(this).pageNumber({format:"#,###.00", locale:"us"});
//    $(this).val(newData);
});

//$('.saraly_format').autotab('filter', 'text');

$.autotab({ tabOnSelect: true });
$('.allls').autotab('filter', '');
$('.number').autotab('filter', 'number');
$('.text').autotab('filter', 'text');
$('.alpha').autotab('filter', 'alpha');
$('.alphanumeric').autotab('filter', { format: 'alphanumeric', uppercase: true });
$('#regex').autotab('filter', { format: 'custom', pattern: '[^0-9\.]', maxlength: 15 });
//$('#function').autotab('filter', function (value, element) {
//    var parsedValue = parseInt(value, 10);
//
//    if (!value || parsedValue != value) {
//        return '';
//    }
//
//    var newValue = element.value + value;
//
//    if (newValue > 12) {
//        $.autotab.next();
//        return 2;
//    }
//    else if (element.value.length == 0 && value > 1) {
//        $.autotab.next();
//        return value;
//    }
//    else if (element.value.length == 1 && parsedValue === 0 && newValue != 10) {
//        $.autotab.next();
//        return 1;
//    }
//
//    return value;
//});
//$('.hexadecimal').autotab('filter', 'hexadecimal');
//$('.ip').autotab('filter', { format: 'number', trigger: '.' });
//$('.pin').autotab('filter', 'number');
//
//$('#remove-autotab').on('click', function () {
//    $.autotab.remove();
//    $('#autotab-status span').removeClass('on').addClass('off').text('Off');
//});
//
//$('#restore-autotab').on('click', function () {
//    $.autotab.restore();
//    $('#autotab-status span').removeClass('off').addClass('on').text('On');
//});
//
//$('.remove-example').on('click', function () {
//    $(this).parent().remove();
//    $.autotab.refresh();
//});

function doKeyDown(th,e,row,col){
    var ignoreKey = false;
    if( e.keyCode == 40 ){ // Down
        var pos = this.selectionStart;
        this.value = -1+parseInt(this.value,10);
        this.selectionStart = pos; this.selectionEnd = pos;

        ignoreKey = true; setTimeout(function(){ignoreKey=false},1);
        e.preventDefault();
    }else if( e.keyCode == 38 ){ // up
        var pos = this.selectionStart;
        this.value = 1+parseInt(this.value,10);
        this.selectionStart = pos; this.selectionEnd = pos;

        ignoreKey = true; setTimeout(function(){ignoreKey=false},1);
        e.preventDefault();
    }else{

    }

    //th.index

    /*alert(th.id);*/
//    var row;
//    var focusedElement = $(document.activeElement);
//    debugger;
//    if (e.keyCode == 39) {
//        row = $(focusedElement).closest('td').next();
//        row.find('input').focus();
//    }
//    else if (e.keyCode == 37) {
//        row = $(focusedElement).closest('td').prev();
//        row.find('input').focus();
//    }
//    else if (e.keyCode == 40) //down arrow key code
//    {
//        row = $(focusedElement).closest('tr').next();
//        //alert(row.);
//        row.find('td').find('.masked').focus();
////        row.find('input')[0].focus();
//    }
//    else if (e.keyCode == 38) // up arrow key code
//    {
//        row = $(focusedElement).closest('tr').next();
//        row.find('td').find('.masked').focus();
//    }

}

function keyPressed(TB, e)
{
    if (e.keyCode == 40) {
        if (TB.split("c")[0] < 3)
            document.getElementById(eval(TB.split("c")[0] + '+1') + 'c' + TB.split("c")[1]).focus();
    }

    if (e.keyCode == 38) {
        if(TB.split("c")[0] > 1)
            document.getElementById(eval(TB.split("c")[0] + '-1') + 'c' + TB.split("c")[1]).focus();


    }
}

function keyPressedd(TB, e)
{
    if (e.keyCode == 40) {
        if (TB.split("d")[0] < 3)
            document.getElementById(eval(TB.split("d")[0] + '+1') + 'd' + TB.split("d")[1]).focus();
    }

    if (e.keyCode == 38) {
        if(TB.split("d")[0] > 1)
            document.getElementById(eval(TB.split("d")[0] + '-1') + 'd' + TB.split("d")[1]).focus();


    }
}

function keyPressedHead(TB, e)
{
    if (e.keyCode == 40) { // Down
        var xx = TB.split("h")[0];
        if(xx == 1){
            if(TB.split("h")[1]==1 || TB.split("h")[1]==2 ){
                document.getElementById(eval(TB.split("h")[0] + '+1') + 'h1').focus();
            }else{
                document.getElementById(eval(TB.split("h")[0] + '+1') + 'h2').focus();
            }
        }else if(xx == 2){
            document.getElementById(eval(TB.split("h")[0] + '+1') + 'h1').focus();
        }else if(xx == 3){
            document.getElementById('1inp1').focus();
        }else{

        }

//        if (TB.split("h")[0] < 3)
//            document.getElementById(eval(TB.split("h")[0] + '+1') + 'h' + TB.split("h")[1]).focus();
    }

    if (e.keyCode == 38) {
        var xx = TB.split("h")[0];
        if(xx == 1){

        }else if(xx == 2){
            if(TB.split("h")[1]==1 ){
                document.getElementById(eval(TB.split("h")[0] + '-1') + 'h1').focus();
            }else{
                document.getElementById(eval(TB.split("h")[0] + '-1') + 'h3').focus();
            }
        }else if(xx == 3){
            document.getElementById(eval(TB.split("h")[0] + '-1') + 'h1').focus();
        }else{

        }
//        if(TB.split("d")[0] > 1)
//            document.getElementById(eval(TB.split("d")[0] + '-1') + 'd' + TB.split("d")[1]).focus();


    }
}

function keyPressedInp01(TB, e)
{
    if (e.keyCode == 40) { // Down
        var xx = TB.split("inp")[0];
//        alert(xx + '/' + TB.split("inp")[1]);
        if(xx == 1){
            if(TB.split("inp")[1]==2 || TB.split("inp")[1]==3 || TB.split("inp")[1]==4 ){
//                alert('1');
                document.getElementById(eval(TB.split("inp")[0] + '+1') + 'inp3').focus();
            }else{
//                alert('2');
                document.getElementById(eval(TB.split("inp")[0] + '+1') + 'inp'+ TB.split("inp")[1]).focus();
            }
        }if(xx == 2){
            if(TB.split("inp")[1]>=2 ){
                document.getElementById(eval(TB.split("inp")[0] + '+1') + 'inp' + eval(TB.split("inp")[1] + '-1')).focus();
            }else{
                document.getElementById(eval(TB.split("inp")[0] + '+1') + 'inp'+ TB.split("inp")[1]).focus();
            }
        }else if(xx == 3){
            if(TB.split("inp")[1]==4 ){
                document.getElementById(eval(TB.split("inp")[0] + '+1') + 'inp3').focus();
            }else{
                document.getElementById(eval(TB.split("inp")[0] + '+1') + 'inp'+ TB.split("inp")[1]).focus();
            }
        }else{
            document.getElementById(eval(TB.split("inp")[0] + '+1') + 'inp'+ TB.split("inp")[1]).focus();
        }

//        if (TB.split("h")[0] < 3)
//            document.getElementById(eval(TB.split("h")[0] + '+1') + 'h' + TB.split("h")[1]).focus();
    }

    if (e.keyCode == 38) {
        var xx = TB.split("inp")[0];
        if(xx == 1){
            document.getElementById('3h1').focus();
        }else if(xx == 2){
            if(TB.split("inp")[1]>1 ){
                document.getElementById(eval(TB.split("inp")[0] + '-1') + 'inp' + eval(TB.split("inp")[1] + '-1')).focus();
            }else{
                document.getElementById(eval(TB.split("inp")[0] + '-1') + 'inp'+TB.split("inp")[1]).focus();
            }
        }else if(xx == 3){
            if(TB.split("inp")[1]>2 ){
                document.getElementById(eval(TB.split("inp")[0] + '-1') + 'inp' + eval(TB.split("inp")[1] + '-1')).focus();
            }else{
                document.getElementById(eval(TB.split("inp")[0] + '-1') + 'inp'+TB.split("inp")[1]).focus();
            }
        }else if(xx == 5){
            if(TB.split("inp")[1]>3 ){
                document.getElementById(eval(TB.split("inp")[0] + '-1') + 'inp' + eval(TB.split("inp")[1] + '-1')).focus();
            }else{
                document.getElementById(eval(TB.split("inp")[0] + '-1') + 'inp'+TB.split("inp")[1]).focus();
            }
        }else{
            document.getElementById(eval(TB.split("inp")[0] + '-1') + 'inp'+TB.split("inp")[1]).focus();
        }
//        if(TB.split("d")[0] > 1)
//            document.getElementById(eval(TB.split("d")[0] + '-1') + 'd' + TB.split("d")[1]).focus();


    }
}

function keyPressedInp02(TB, e)
{
    if (e.keyCode == 40) { // Down
        var xx = TB.split("inpd")[0];
//        alert(xx + '/' + TB.split("inp")[1]);
        if(xx == 2){
            if(TB.split("inpd")[1]>=2 ){
//                alert('1');
                document.getElementById(eval(TB.split("inpd")[0] + '+1') + 'inpd2').focus();
            }else{
//                alert('2');
                document.getElementById(eval(TB.split("inpd")[0] + '+1') + 'inpd'+ TB.split("inpd")[1]).focus();
            }
        }else{
            document.getElementById(eval(TB.split("inpd")[0] + '+1') + 'inpd'+ TB.split("inpd")[1]).focus();
        }

//        if (TB.split("h")[0] < 3)
//            document.getElementById(eval(TB.split("h")[0] + '+1') + 'h' + TB.split("h")[1]).focus();
    }

    if (e.keyCode == 38) {
//        var xx = TB.split("inpd")[0];
        document.getElementById(eval(TB.split("inpd")[0] + '-1') + 'inpd'+TB.split("inpd")[1]).focus();
//        if(TB.split("d")[0] > 1)
//            document.getElementById(eval(TB.split("d")[0] + '-1') + 'd' + TB.split("d")[1]).focus();


    }
}

var Message = (function() {
    "use strict";

    var elem,
        hideHandler,
        that = {};

    that.init = function(options) {
        //alert(options);
        elem = $(options.selector);
    };

    that.show = function(text) {
        clearTimeout(hideHandler);

        elem.find("span").html(text);
        elem.delay(200).fadeIn().delay(4000).fadeOut();
    };

    return that;
}());

$(function() {
    Message.init({
        "selector": ".bb-alert"
    });
});
