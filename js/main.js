var json = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "js/resume.json",
        'dataType': "json",
        'success': function(data) {
            json = data;
        }
    });
    return json;
})();
$(document).ready(function() {
    headerdata();
    edudata();
    workdata();
});

function headerdata() {
    document.getElementById("name").innerHTML = json.personal.name;
    document.getElementById("address").innerHTML = json.personal.address;
    document.getElementById("tel").innerHTML = "<span>t:</span>" + json.personal.mobile;
    document.getElementById("email").innerHTML = "<span>e:</span>" + json.personal.email;
    document.getElementById("website").innerHTML = "<span>w:</span>" + json.personal.website;
}

function edudata(){
    var txthtml, arrlength, i;
    arrlength = json.education.length;
    txthtml = "";
    for (i=0;i<arrlength;i++){
        txthtml+= "<div class='row'><div class='three columns left--pane'><h6>"+json.education[i].institution+"</h6>"+"<p class='years'>"+json.education[i].startyear+"-"+json.education[i].endyear+"</p></div>"+"<div class='nine columns right--pane'><p class='title--right'>"+json.education[i].course+"</p><p class='desc'>"+json.education[i].summary+"</p></div></div>"
    }
    document.getElementById("education").innerHTML=txthtml;
}
function workdata(){
    var txthtml, arrlength, i;
    arrlength = json.work.length;
    txthtml = "";
    for (i=0;i<arrlength;i++){
        txthtml+= "<div class='row'><div class='three columns left--pane'><h6>"+json.work[i].company+"</h6>"+"<p class='years'>"+json.work[i].startyear+"-"+json.work[i].endyear+"</p></div>"+"<div class='nine columns right--pane'><p class='title--right'>"+json.work[i].position+"</p><p class='desc'>"+json.work[i].summary+"</p></div></div>"
    }
    document.getElementById("work").innerHTML=txthtml;
}