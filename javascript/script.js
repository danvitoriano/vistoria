/*AMenu aberto no desktop e fechado no mobile*/

$(document).ready(function(){
  //if(window.screen.width< 1025){ $('#collapse1').removeClass('in'); }
  		if(window.screen.width < 480) {
			$("a[href$='#collapse1']").attr("aria-expanded","false");
			$("a[href$='#collapse1']").addClass("collapsed");
			$("div#collapse1").removeClass("in");
			$("div#collapse1").addClass("collapse");
		}
});
