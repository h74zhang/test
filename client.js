/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var wingroup = new jsWindow.windowGroup($('#windows_div'), {
    shadow: true,
    keep_windows_on_page: { top: true, bottom: true, left: true, right: true }
});

var text_content = ""
var WindowId = [];
var increment = 20;
var win_top = 100;
var win_left = 200;

$(document).ready(function() {
    /*
    $("#updateme").click( function() {
        if(WindowId) {
            new_line = "<p>abcdefghijklmn</p>"
            wingroup.update_text(WindowId,new_line);
        }
    });
    */
    $("#showme").click( function() {
        var temp_id = wingroup.appendWindow({
            theme: "mac",
            title: "Log: <b>BB-VM</b>",
            content: text_content,
            top:win_top, left:win_left, width:500, height:300
        });

        win_top += increment;
        win_left += increment;
        WindowId.push(temp_id);
        if (win_top == 300) {
            win_top = 100;
        }
    });
    $("#closeme").click( function() {
        temp_array = WindowId;
        WindowId = [];
        win_top = 100;
        win_left = 200;
        temp_array.forEach(function(my_win_id) {
            wingroup.remove_window(my_win_id);
        });
        //WindowId = [];
    });
    setInterval(function() {
        WindowId.forEach(function(my_win_id) {
            var now = new Date();
            var new_line = "abcdefghijklmndfdfdfdfdfd  "+now.toISOString();
            wingroup.update_text(my_win_id,new_line);
        });
    }, 1000);
});


