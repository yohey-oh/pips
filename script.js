$(function() {
	$('#leverage').on('click focus', function() {
		var options = $(this).data("options").split(',');

		$(this).autocomplete({
			source: options,
			minLength: 0,
			delay: 1,
			autoFocus: false,
			position:{ my : "right top", at: "right bottom", collision: "flip" }
		});

		$(this).autocomplete("search", "");

	});
});