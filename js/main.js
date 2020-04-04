// user-types = ["admin", "teacher", "pupil"];
$(document).ready(function () {
    const usertype = localStorage.getItem("usertype");
    if (usertype === undefined) {
        exit();
        localStorage.setItem("usertype", "pupil");
        return;
    }
    const userid = localStorage.getItem('authentication');
    console.log(userid);

    $("#entrypanel").hide();
    $("#registrypanel").hide();
    if (usertype === 'teacher') showTeacher(userid);
    else if (usertype === 'pupil') showPupil(userid);
    else showAdmin(userid);
});

function change_entry_type(t) {
    if (t === 0) {
        $('#entryform').css("background", "#fd7172");
        localStorage.setItem("usertype", "admin");
    } else if (t === 1) {
        $('#entryform').css("background", "#fee96a");
        localStorage.setItem("usertype", "teacher");
    } else if (t === 2) {
        $('#entryform').css("background", "#7cdeeb");
        localStorage.setItem("usertype", "pupil");
    }
}

function change_reg_type(t) {
    if (t === 1) {
        $('#registryform').css("background", "#fee96a");
        localStorage.setItem("usertype", "teacher");
        $('#pupil_form').hide();
        $('#teacher_form').show();
    } else {
        $('#registryform').css("background", "#7cdeeb");
        localStorage.setItem("usertype", "pupil");
        $('#pupil_form').show();
        $('#teacher_form').hide();
    }
}


function showPage(except) {
    $("#admin_page").hide();
    $("#admin_tables").hide();
    $("#teacher_page").hide();
    $("#teacher_list_page").hide();
    $("#pupil_page").hide();
    $("#subject_list_page").hide();
    $("#subject_page").hide();
    $("#hometask_page").hide();
    $("#school_page").hide();
    $("#teacher_olympiads_list").hide();
    $("#olympiads_list").hide();
    $("#" + except).show();
    if (except === 'school_page')
        fillSchoolInfo();
}


function exit() {
    document.cookie = "userid=null; max-age=0";
    document.cookie = "usertype=null; max-age=0";
    change_entry_type(2);
    localStorage.removeItem("authentication");
    sessionStorage.removeItem("schoolcode");

    //hide all menu buttons
    $("#admin_page_tab").hide();
    $("#teacher_page_tab").hide();
    $("#teacher_list_page_tab").hide();
    $("#pupil_page_tab").hide();
    $("#subject_list_page_tab").hide();
    $("#admin_tables_tab").hide();
    $("#olympiads_tab").hide();
    $("#teacher_olympiads_tab").hide();

    //hide all pages
    $("#admin_page").hide();
    $("#teacher_page").hide();
    $("#teacher_list_page").hide();
    $("#pupil_page").hide();
    $("#subject_list_page").hide();
    $("#subject_page").hide();
    $("#hometask_page").hide();
    $("#admin_tables").hide();
    $("#school_page").hide();
    $("#teacher_olympiads_list").hide();
    $("#olympiads_list").hide();

    $("#registrypanel").hide();
    //$("#container").hide();
    $("#entrypanel").show();
}

function setClear(arr) {
    for (var i = 0; i < arr.length; i++) {
        $(arr[i]).val("");
    }
}


function gotoregistration() {
    $("#registrypanel").show();
    $("#entrypanel").hide();
    $("#container").hide();
}

function gotologin() {
    $("#registrypanel").hide();
    $("#entrypanel").show();
    $("#container").hide();
}


function showTeacher(id) {
    $("#teacher_page_tab").show();
    $("#teacher_list_page_tab").show();
    $("#teacher_list_page").show();

    $("#teacher_olympiads_tab").show();
    $("#container").show();

    $("#admin_page_tab").hide();
    $("#admin_tables_tab").hide();
    $("#admin_tables").hide();

    $("#subject_list_page").hide();
    $("#pupil_page_tab").hide();
    $("#olympiads_tab").hide();
    $("#subject_list_page_tab").hide();
    fillTeacherInfo(id);
}


function showPupil(id) {
    $("#container").show();
    $("#subject_list_page").show();
    $("#pupil_page_tab").show();
    $("#olympiads_tab").show();
    $("#subject_list_page_tab").show();

    $("#admin_page_tab").hide();
    $("#admin_tables_tab").hide();
    $("#admin_tables").hide();

    $("#teacher_page_tab").hide();
    $("#teacher_list_page_tab").hide();
    $("#teacher_list_page").hide();

    $("#teacher_olympiads_tab").hide();
    fillPupilInfo(id);
}

function showAdmin(id) {
    $("#admin_page_tab").show();
    $("#admin_tables_tab").show();
    $("#admin_tables").show();
    $("#container").show();

    $("#teacher_page_tab").hide();
    $("#teacher_list_page_tab").hide();
    $("#teacher_list_page").hide();

    $("#teacher_olympiads_tab").hide();

    $("#subject_list_page").hide();
    $("#pupil_page_tab").hide();
    $("#olympiads_tab").hide();
    $("#subject_list_page_tab").hide();
    fillAdminInfo(id);
}


function show_subject(subject_data) {
    showPage('subject_page');
    if (localStorage.getItem("usertype") === "teacher")
        fillTeacherHometasks(subject_data);
    else if (localStorage.getItem("usertype") === "pupil")
        fillPupilHometasks(subject_data);
}

function showHometask(hw_id) {
    showPage("hometask_page");
    fillHometask(hw_id);
}

function addHyperlinkField(id) {
    $("#add_hyperlink_field_button").remove();
    const hwSel = $("#add_hw_form_body");
    hwSel.append(" <div class='col-md-12'><input type='text' id='new_hw_link" + id +
        "' class='form-control' max='255'></div>");
    hwSel.append("<div class='col-md-2'>" +
        "<button id='add_hyperlink_field_button' class='btn btn-light btn-sm' onclick='addHyperlinkField("
        + (id + 1) + ")'>+</button></div>");
}