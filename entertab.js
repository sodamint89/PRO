$(document).ready(function(){
    $("input").not( $(":button") ).keypress(function (evt) {

        if (evt.keyCode == 13) {
            iname = $(this).val();
            if (iname !== 'Submit'){
                var index = this.tabIndex;
                var i = 1;
                var count = 0;
                while (!$('input[tabindex=' + (index + i) +']').is(":visible"))
                {
                    i++;
                    if (i > 100) break;

                }

                $('input[tabindex=' + (index + i) +']').focus();
                return false;
            }
        }

    });

    $("input").not( $(":button") ).keydown(function (evt) {

        if (evt.keyCode == 40) {
            iname = $(this).val();
            if (iname !== 'Submit'){
                var index = this.tabIndex;
                $('input[tabindex=' + (index +1) +']').focus();
                return false;
            }
        }
        else if (evt.keyCode == 38) {
            iname = $(this).val();
            if (iname !== 'Submit'){
                var index = this.tabIndex;
                $('input[tabindex=' + (index - 1) +']').focus();
                return false;
            }
        }

    });


});