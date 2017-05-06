$("#contact").click(function () {
	$('#contact_modal')
        .modal('setting', 'transition', 'vertical flip')
        .modal('show')
      ;
});

$('#work').click(function () {
	$('#work_modal')
        .modal('setting', 'transition', 'vertical flip')
        .modal('show')
      ;
});

$("#authtime_img").click(function () {
	$("#authtime_modal")
			.modal('setting', 'transition', 'horizontal flip')
			.modal('show')
		;
});

$("#autonursenote_img").click(function () {
	$("#autonursenote_modal")
			.modal('setting', 'transition', 'horizontal flip')
			.modal('show')
		;
});

$("#patientrounds_img").click(function () {
	$("#patientrounds_modal")
			.modal('setting', 'transition', 'horizontal flip')
			.modal('show')
		;
});

$(".back_button").click(function () {
	$("#work_modal")
			.modal('setting', 'transition', 'vertical flip')
			.modal('show')
		;
});