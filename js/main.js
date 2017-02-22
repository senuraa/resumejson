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
    skillsdata();
    extradata();
    awardsdata();
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
function skillsdata(){
     var txthtml, arrlength, i,j,arrlength2;
    arrlength = json.skills.length;
    txthtml = "";
    for (i=0;i<arrlength;i++){
        txthtml+="<div class='row'><div class='three columns left--pane'><h6>"+json.skills[i].title+"</h6></div><div class='nine columns right--pane'>";
        arrlength2 = json.skills[i].list.length;
        for(j=0;j<arrlength2;j++){
            txthtml+="<p class='title--right'>"+json.skills[i].list[j].section+"</p><p class='desc'>"+json.skills[i].list[j].list+"</p>"
        }
        txthtml+="</div></div>";
    }
    document.getElementById("skills").innerHTML=txthtml;
}
function extradata(){
    var txthtml, arrlength, i;
    arrlength = json.extra.length;
    txthtml = "";
    for (i=0;i<arrlength;i++){
        txthtml+= "<div class='row'><div class='three columns left--pane'><h6>"+json.extra[i].institution+"</h6>"+"<p class='years'>"+json.extra[i].year+"</p></div>"+"<div class='nine columns right--pane'><p class='title--right'>"+json.extra[i].position+"</p><p class='desc'>"+json.extra[i].summary+"</p></div></div>"
    }
    document.getElementById("extra").innerHTML=txthtml;
}
function awardsdata(){
    var txthtml, arrlength, i;
    arrlength = json.awards.length;
    txthtml = "";
    for (i=0;i<arrlength;i++){
        txthtml+= "<div class='row'><div class='three columns left--pane'><h6>"+json.awards[i].name+"</h6>"+"<p class='years'>"+json.awards[i].year+"</p></div>"+"<div class='nine columns right--pane'><p class='title--right'>"+json.awards[i].for+"</p><p class='desc'>"+json.awards[i].summary+"</p></div></div>"
    }
    document.getElementById("awards").innerHTML=txthtml;
}