$(".nextProcess").click(function () {
  alert()
  if ($("#walletDetails").hasClass("d-none")) {
    $("#withdraw").addClass("d-none");
    $("#walletDetails").removeClass("d-none");
  } else {
    $("#withdraw").removeClass("d-none");
    $("#walletDetails").addClass("d-none");
  }
});

$(".nextProcess2").click(function () {
  if ($("#withdrawNext").hasClass("d-none")) {
    $("#walletDetails").addClass("d-none");
    $("#withdrawNext").removeClass("d-none");
  } else {
    $("#walletDetails").removeClass("d-none");
    $("#withdrawNext").addClass("d-none");
  }
});

$("#confirmation").click(function () {
  $("#withdrawNext").addClass("d-none");
  $("#confirm").removeClass("d-none");
});

//   ======= For send
$(".confirmationSend").click(function () {
  if ($("#send").hasClass("d-none")) {
    $("#send").removeClass("d-none");
    $("#returnsend").addClass("d-none");
  } else {
    $("#send").addClass("d-none");
    $("#returnsend").removeClass("d-none");
  }
});

//   ======= For Exchange
$(".confirmationExchanges").click(function () {
  if ($("#exchangeProgress").hasClass("d-none")) {
    $("#exchangeProgress").removeClass("d-none");
    $("#exchange").addClass("d-none");
  } else {
    $("#exchangeProgress").addClass("d-none");
    $("#exchange").removeClass("d-none");
  }
});