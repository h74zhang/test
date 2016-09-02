/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var wingroup = new jsWindow.windowGroup($('#windows_div'), {
    shadow: true,
    keep_windows_on_page: { top: true, bottom: true, left: true, right: true }
});

var text_content = "<p>12121212111111111111111111111111111111111111111111111,1212121211111111111111111111111</p>"+
                   "<p>1111111111111111111111,12121212111111111111111111111111111111111111111111111,12121212111111111111</p>"+
                   "<p>111111111111111111111111111111111</p>"+
                   "<p>12121212111111111111111111111111111111111111111111111,12121212111111111111111111111111111111111111111111111,</p>"+
                   "<p>12121212111111111111111111111111111111111111111111111,12121212111111111111111111111111111111111111111111111</p>"

var window_ID;

$(document).ready(function() {
    $("#updateme").click( function() {
        if(window_ID) {
            new_line = "<p>abcdefghijklmn</p>"
            wingroup.update_text(window_ID,new_line);
        }
    });

    $("#showme").click( function() {
        window_ID = wingroup.appendWindow({
            theme: "mac",
            title: "Theme: <b>mac</b>",
            content: text_content,
            top:100, left:200, width:500, height:300
        });
    });
/*
    setInterval(function() {
        var randomnumber = Math.floor(Math.random() * 100);
        $('#show').text('I am getting refreshed every 3 seconds..! Random Number ==> '+ randomnumber);
    }, 3000);
*/
});


