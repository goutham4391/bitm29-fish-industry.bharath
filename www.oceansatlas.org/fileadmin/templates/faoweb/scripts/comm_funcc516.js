$(document).ready(function(){
	$("#content a[href^='http://www.fao.org'], #content a[href^='/']").not("#content a.freetarget, #content a[href*='.pdf'], #content a[href$='.png'],#content a[href$='.gif'],#content a[href$='.jpg'],#content a[href$='.doc'], #content a[href$='.xls']").attr("target","_top");
	$("#content a[href^='http']").not("#content a[href*='www.fao.org'], #content a[href*='api.linkedin.com']").attr("target","_blank");
	$("#top-banner a[href^='http://www.fao.org'], #top-banner a[href^='/']").not("#top-banner a[href*='.pdf'], #top-banner a[href$='.png'],#top-banner a[href$='.gif'],#top-banner a[href$='.jpg'],#top-banner a[href$='.doc'], #top-banner a[href$='.xls']").attr("target","_top");
	$("#top-banner a[href^='http']").not("#top-banner a[href*='www.fao.org'], #top-banner a[href*='api.linkedin.com']").attr("target","_blank");

 $("ul.topmenu li.top-no-active ul.sub-top").hover(function () {
    $(this).parent().toggleClass("topmenu-hover");
 });
 
});
function blurLink(){
 // blurLink fnc
};
