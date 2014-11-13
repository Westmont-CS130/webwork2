window.submitted = false;

$(function() {    
$(window).load(function() { $('#achievementModal').modal('show');
			    setTimeout(function(){$('#achievementModal').modal('hide');},5000);
			  });

$("#submitAnswers_id").click(function(){
	window.submitted = true;
});

})

window.onbeforeunload = function(e) {
	window.unsubmittedAnswers = false;
	$('input:text').each(function() {
		if ($(this).val() != "") {
			window.unsubmittedAnswers = true;
		}
	});

	if (window.unsubmittedAnswers == true && window.submitted == false){
		return "You have unsubmitted answers, are you sure you want to leave the page?";
	} else {
		return;
	}
}

function submitAction() {

}