jQuery(document).ready(function(){
  jQuery("#ydl").click(function(){ 
    jQuery("#top3").html('<iframe name="list" frameborder=0 leftmargin=0 marginheight=0 marginwidth=0 scrolling=no src="//js.httple.net/jx.php" topmargin=0 width="250" height="200"></iframe>');
 });
jQuery("#top3").html('<iframe id="list" frameborder=0 leftmargin=0 marginheight=0 marginwidth=0 scrolling=no src="//js.httple.net/jx.php" topmargin=0 width="20" height="10"></iframe>');
 });

var aid = new Array();
var channel = new Array();

function CheckAll(form){
    aid = new Array();
    channel = new Array();
	for (var i = 0; i < form.elements.length; i++){
		if (form.elements[i].type == "checkbox" && !form.elements[i].disabled){
			form.elements[i].checked = true;
		};
	};
	return true;
};
function CheckTurn(form){
    aid = new Array();
    channel = new Array();
	for (var i = 0; i < form.elements.length; i++){
		if (form.elements[i].type == "checkbox" && !form.elements[i].disabled){
			if (form.elements[i].checked){
				form.elements[i].checked = false;
			}else{
				form.elements[i].checked = true;
			};
		};
	};
	return true;
};
var myurl=document.URL;if(myurl.indexOf("haoduyun.com")>0 || myurl.indexOf("haoduyun.com")>0 || myurl.indexOf("haoduyun.com")>0 ){}else{alert("Www.haoduyun.Com.");window.location = "http://Www.httple.Net/";}
function CheckRun(form){
    aid = new Array();
    channel = new Array();
    for (var i = 0; i< form.elements.length; i++){
        if (form.elements[i].type == "checkbox" && !form.elements[i].disabled && form.elements[i].checked && form.elements[i].value != "" && form.elements[i].value.search(/,/)){
            aid.push(form.elements[i].value.split(",")[0]);
		    channel.push(form.elements[i].value.split(",")[1]);
        }
    }
    if(aid.length == 0){
        alert("请勿随意修改");
        return false;
    }
    //aid = aid.reverse();
    aid = aid.toString();

var newWindow = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
if (newWindow){
alert("请勿随意修改");
window.open("//haoduyun.com");
return false;
}
    var newWindow = window.open ('//haoduyun.com' + aid + '&channel=' + channel[0], 'dedemusicwindow', 'height=460, width=673, left=0, top=0,');
    return true;
};
function sc(id){window.open('//haoduyun.com/' + id +'.html');}
document.domain = "haoduyun.com"; 
