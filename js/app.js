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


const earnCardsArray = [
	{
		icons: '../images/tusd.svg',
		name: 'USDT',

		cards: [
			{
				bg: 'linear-gradient(180deg, #168D69, #07694B)',
				title: 'Earn+ 365',
				percentage: 8
			},
			{
				bg: 'linear-gradient(180deg, #168D69, #07694B)',
				title: 'Earn+',
				percentage: 10
			},
			{
				bg: 'linear-gradient(180deg, #168D69, #07694B)',
				title: 'Flexibile',
				percentage: 7
			},
		]
	},
	{
		icons: '../images/usdt.svg',
		name: 'TUSD',

		cards: [
			{
				bg: 'linear-gradient(180deg, #3F4295, #232678)',
				title: 'Earn+ 365',
				percentage: 8
			},
			{
				bg: 'linear-gradient(180deg, #3F4295, #232678)',
				title: 'Earn+',
				percentage: 10
			},
			{
				bg: 'linear-gradient(180deg, #3F4295, #232678)',
				title: 'Flexibile',
				percentage: 9
			},
		]
	},
	{
		icons: '../images/eth.svg',
		name: 'ETH',

		cards: [
			{
				bg: 'linear-gradient(180deg, #4763CC, #2C45A3)',
				title: 'Earn+ 365',
				percentage: 8
			},
			{
				bg: 'linear-gradient(180deg, #4763CC, #2C45A3)',
				title: 'Earn+',
				percentage: 10
			},
		]
	},
	{
		icons: '../images/btc.svg',
		name: 'BTC',

		cards: [
			{
				bg: 'linear-gradient(180deg, #E18E28, #B4690F)',
				title: 'Earn+ 365',
				percentage: 8
			},
			{
				bg: 'linear-gradient(180deg, #E18E28, #B4690F)',
				title: 'Earn+',
				percentage: 10
			},
		]
	},

	{
		icons: '../images/dai.svg',
		name: 'DAI',

		cards: [
			{
				bg: 'linear-gradient(180deg, #DEAA37, #BF9029)',
				title: 'Earn+ 365',
				percentage: 8
			},
			{
				bg: 'linear-gradient(180deg, #DEAA37, #BF9029)',
				title: 'Earn+',
				percentage: 10
			},
		]
	},
	{
		icons: '../images/usdc.svg',
		name: 'USDC',

		cards: [
			{
				bg: 'linear-gradient(180deg, #4377C8, #315FA5)',
				title: 'Earn+ 365',
				percentage: 8
			},
			{
				bg: 'linear-gradient(180deg, #4377C8, #315FA5)',
				title: 'Earn+',
				percentage: 10
			},
		]
	},
]