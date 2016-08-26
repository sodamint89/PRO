String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};

function formatPlanNumber(numstr) {
    if (numstr) {
        var newnumstr = numstr.replace(",", "");
        //alert('newnumstr --> ' + newnumstr);
        return newnumstr;
    }
    return numstr;
}


function formatBankAccount(accountNo) {
    //alert("acc " + accountNo);
    if (!accountNo || accountNo == null || accountNo.trim().length == 0) {
        return accountNo;
    }

    //return accountNo;
    //alert("acc trim : " + accountNo.trim());

    if (accountNo.trim().length != 10) {
        return accountNo;
    }

    return accountNo.substring(0, 3) + "-" + accountNo.substring(3, 4) + "-" + accountNo.substring(4, 9) + "-" + accountNo.substring(9, 10);

}


function checkAll(fieldList, headChk) {
    //for (i = 0; i < fieldList.length; i++) fieldList[i].checked = headChk.checked;
    if (fieldList.length == undefined) { // Add By.Pornchai : 2011-05-27
        fieldList.checked = headChk.checked;
    } else {
        for (i = 0; i < fieldList.length; i++) fieldList[i].checked = headChk.checked;
    }
}

function uncheckAll(field) {
    //for (i = 0; i < field.length; i++) field[i].checked = false;
    if (field.length == undefined) { // Add By.Pornchai : 2011-05-27
        field.checked = false;
    } else {
        for (i = 0; i < field.length; i++) field[i].checked = false;
    }
}

function checkAll2(fieldList) {
    //for (i = 0; i < fieldList.length; i++) fieldList[i].checked = true;
    if (fieldList.length == undefined) { // Add By.Pornchai : 2011-05-27
        fieldList.checked = true;
    } else {
        for (i = 0; i < fieldList.length; i++) fieldList[i].checked = true;
    }
}

function uncheckAll2(field) {
    //for (i = 0; i < field.length; i++) field[i].checked = false;
    if (field.length == undefined) { // Add By.Pornchai : 2011-05-27
        field.checked = false;
    } else {
        for (i = 0; i < field.length; i++) field[i].checked = false;
    }
}

function popupPackage(urlToOpen, width, height) {
    var window_width = 0;
    if (width != 0) {
        window_width = width;
    }
    else {
        window_width = screen.availWidth / 4;
    }


    var window_height = 0;
    if (height != 0) {
        window_height = height;
    }
    else {
        window_height = screen.availHeight / 4;
    }


    var window_left = (screen.availWidth / 2) - (window_width / 2);
    var window_top = (screen.availHeight / 2) - (window_height / 2);
    var winParms = "Status=yes" + ",resizable=yes" + ",height=" + window_height + ",width=" + window_width + ",left=" + window_left + ",top=" + window_top;
    var newwindow = window.open(urlToOpen, '_blank', winParms);
    newwindow.focus();
}

function popupModal(form, urlToOpen, width, height) {

    var window_width = 0;
    if (width == 'full') {
        window_width = screen.availWidth;
    }
    else if (width != 0) {
        window_width = width;
    }
    else {
        window_width = screen.availWidth / 4;
    }


    var window_height = 0;
    if (height == 'full') {
        window_height = screen.availHeight;
    }
    else if (height != 0) {
        window_height = height;
    }
    else {
        window_height = screen.availHeight / 4;
    }

    var result = window.showModalDialog(urlToOpen, form, "dialogWidth:" + window_width + " px; dialogHeight:" + window_height + "px; center:yes");

}


function popupWindow(form, urlToOpen, width, height) {
    var window_width = 0;
    if (width != 0) {
        window_width = width;
    }
    else {
        window_width = screen.availWidth / 4;
    }


    var window_height = 0;
    if (height != 0) {
        window_height = height;
    }
    else {
        window_height = screen.availHeight / 4;
    }


    var window_left = (screen.availWidth / 2) - (window_width / 2);
    var window_top = (screen.availHeight / 2) - (window_height / 2);
    var winParms = "Status=yes" + ",resizable=yes" + ",height=" + window_height + ",width=" + window_width + ",left=" + window_left + ",top=" + window_top + ",scrollbars=1";
    //alert(winParms);
    var newwindow = window.open(urlToOpen, '_blank', winParms);
    newwindow.focus();

}

function getFromJson(jsonObj, pkey) {

    for (var akey in jsonObj) {
        if (akey.hasOwnProperty(pkey)) {
            return akey.name;
        }
    }
}

function post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default, if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for (var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);

        form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
}

function generate_ajax_ddl1(obj, data, keyValue, textValue, selectedValue) {

    var html = '<option value=""> -- กรุณาเลือก -- </option>';
    var len = data.length;
    for (var i = 0; i < len; i++) {
        var selected = "";
        if (null != selectedValue && '' != selectedValue) {
            selected = selectedValue == data[i][keyValue] ? "selected" : "";
        }
        html += '<option ' + selected + ' value="' + data[i][keyValue] + '">'
            + data[i][textValue] + '</option>';
    }
    html += '</option>';
    $('#' + obj).html(html);
}

function generate_ajax_ddl2(obj, data, keyValue, textValue1, textValue2, selectedValue) {

    var html = '';//'<option value=""> -- กรุณาเลือก -- </option>';
    var len = data.length;
    for (var i = 0; i < len; i++) {
        var selected = "";
        if (null != selectedValue && '' != selectedValue) {
            selected = selectedValue == data[i][keyValue] ? "selected" : "";
        }
        html += '<option ' + selected + ' value="' + data[i][keyValue] + '">'
            + data[i][textValue1] + ' - ' + data[i][textValue2] + '</option>';
    }
    html += '</option>';
    $('#' + obj).html(html);
}

function formatDollar(num) {

    nstr = '';
    try {
        num = parseFloat(num);
        nstr = num.toFixed(2);
    }
    catch (ex) {
        return '';
        //alert(ex)
    }

    nstr += '';
    x = nstr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;

}

function currencyformat(num) {
    num = num.toString().replace(/$|\,/g, '');
    if (isNaN(num)) num = "0";
    cents = Math.floor((num * 100 + 0.5) % 100);
    num = Math.floor((num * 100 + 0.5) / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    return (num + '.' + cents);
}

function number_format(number, decimals, dec_point, thousands_sep) {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // +    revised by: Luke Smith (http://lucassmith.name)
    // +     bugfix by: Diogo Resende
    // +     bugfix by: Rival
    // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
    // +   improved by: davook
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jay Klehr
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Amir Habibi (http://www.residence-mixte.com/)
    // +     bugfix by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // *     example 1: number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: number_format('1.2000', 3);
    // *    returns 12: '1.200'

    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function dateFormat(date, format) {
    // Calculate date parts and replace instances in format string accordingly
    if (date == null)
        return null;
    format = format.replace("DD", (date.getDate() < 10 ? '0' : '') + date.getDate()); // Pad with '0' if needed
    format = format.replace("MM", (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)); // Months are zero-based
    format = format.replace("YYYY", date.getFullYear());
    return format;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function cursor_wait() {
    document.body.style.cursor = 'wait';
}

function cursor_clear() {
    document.body.style.cursor = 'default';
}


function sumAmountHandsontable(resultJson, colName) {
    var sum = 0;
    var data = resultJson;

    for (var i = 0; i < data.length; i++) {

        var amount = isNumber(data[i][colName]) ? data[i][colName] : 0;

        if (amount != null) {

            sum = parseFloat(sum) + parseFloat(amount);
        }

    }
    return sum;
}

function sumAmountHandsontableShowDiv(resultJson, colName, divId) {
    var sum = 0;
    var data = resultJson;

    for (var i = 0; i < data.length; i++) {

        var amount = isNumber(data[i][colName]) ? data[i][colName] : 0;

        if (amount != null) {

            sum = parseFloat(sum) + parseFloat(amount);
        }

    }
    return $("#" + divId).html(formatDollar(sum));
}

function sumAmountHandsontableShowDiv2Col(resultJson, colName1, colName2, divId) {
    var sum = 0;
    var data = resultJson;

    for (var i = 0; i < data.length; i++) {

        var amount1 = isNumber(data[i][colName1]) ? data[i][colName1] : 0;
        var amount2 = isNumber(data[i][colName2]) ? data[i][colName2] : 0;

        sum = (parseFloat(sum) + parseFloat(amount1)) + parseFloat(amount2);

    }
    return $("#" + divId).html(formatDollar(sum));
}

function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

//พิมพ์ได้แค่ตัวเลข
//ex
//<input name="freeLook" id="freeLook" Class="number" Style="width: 188px;text-align: right" onKeyPress="checkNumber()"/>

function checkNumber() {

    if (event.keyCode < 48 || event.keyCode > 57){
        event.returnValue = false;
    }

}


function showMsgError(msg)
{
    bootbox.dialog({
        message: msg,
        title: "Error",
        buttons: {
            success: {
                label: "Dismiss!",
                className: "btn-danger"
            }
        }
    });
}

function showMsgSuccess(msg)
{
    bootbox.dialog({
        message: msg,
        title: "Success",
        buttons: {
            success: {
                label: "OK",
                className: "btn-success"
            }
        }
    });
}



