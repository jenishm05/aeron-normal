function closeDropdownMenu() {
	$('.btn-secondary').dropdown('toggle');
}

$('#sidebar_collapse').click(function () {

	if ($('.sidebar_menu').hasClass('open')) {
		$(this).css('transform', 'rotate(180deg)')
		$('.sidebar_menu').removeClass('open');
		$('#logo img').attr('src', '../images/logo.png');
		$('#logo').attr('class', 'logo');
	} else {
		$('.sidebar_menu').addClass('open');
		$('#logo img').attr('src', '../images/logo-big.jpeg');
		$('#logo').attr('class', 'logo_big');
		$(this).css('transform', 'rotate(0)')
	}
})


$(function () {
	const rowsPerPage = 10;
	const rows = $('#myTable tbody tr');
	const rowsCount = rows.length;
	const pageCount = Math.ceil(rowsCount / rowsPerPage); // avoid decimals
	const numbers = $('#numbers');

	// Generate the pagination.
	for (var i = 0; i < pageCount; i++) {
		numbers.append('<li><a href="#">' + (i + 1) + '</a></li>');
	}

	// Mark the first page link as active.
	$('#numbers li:first-child a').addClass('active');

	// Display the first set of rows.
	displayRows(1);

	// On pagination click.
	$('#numbers li a').click(function (e) {
		var $this = $(this);

		e.preventDefault();

		// Remove the active class from the links.
		$('#numbers li a').removeClass('active');

		// Add the active class to the current link.
		$this.addClass('active');

		// Show the rows corresponding to the clicked page ID.
		displayRows($this.text());
	});

	// Function that displays rows for a specific page.
	function displayRows(index) {
		var start = (index - 1) * rowsPerPage;
		var end = start + rowsPerPage;

		// Hide all rows.
		rows.hide();

		// Show the proper rows for this page.
		rows.slice(start, end).show();
	}
});


$('#handleConform').click(function () {
	$('#beforeConform').addClass('d-none')
	$('#afterConform').removeClass('d-none')
	$(this).text('Confirm')
})

$('#handleRedeem').click(function () {
	$('#beforeRedeem').addClass('d-none')
	$('#afterRedeem').removeClass('d-none')
	$(this).text('Confirm')
})
