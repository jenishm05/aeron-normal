$('#sidebar_collapse').click(function () {

  if ($('.sidebar_menu').hasClass('open')) {
    $('.sidebar_menu').removeClass('open');
    $('#logo img').attr('src', '../images/logo.png');
    $('#logo').attr('class','logo');
  } else {
    $('.sidebar_menu').addClass('open');
    $('#logo img').attr('src', '../images/logo-big.jpeg');
    $('#logo').attr('class','logo_big');
  }
})

// $(".nextProcess").click(function () {
//   alert()
//   if ($("#walletDetails").hasClass("d-none")) {
//     $("#withdraw").addClass("d-none");
//     $("#walletDetails").removeClass("d-none");
//   } else {
//     $("#withdraw").removeClass("d-none");
//     $("#walletDetails").addClass("d-none");
//   }
// });

// $(".nextProcess2").click(function () {
//   if ($("#withdrawNext").hasClass("d-none")) {
//     $("#walletDetails").addClass("d-none");
//     $("#withdrawNext").removeClass("d-none");
//   } else {
//     $("#walletDetails").removeClass("d-none");
//     $("#withdrawNext").addClass("d-none");
//   }
// });

// $("#confirmation").click(function () {
//   $("#withdrawNext").addClass("d-none");
//   $("#confirm").removeClass("d-none");
// });

// //   ======= For send
// $(".confirmationSend").click(function () {
//   if ($("#send").hasClass("d-none")) {
//     $("#send").removeClass("d-none");
//     $("#returnsend").addClass("d-none");
//   } else {
//     $("#send").addClass("d-none");
//     $("#returnsend").removeClass("d-none");
//   }
// });

// //   ======= For Exchange
// $(".confirmationExchanges").click(function () {
//   if ($("#exchangeProgress").hasClass("d-none")) {
//     $("#exchangeProgress").removeClass("d-none");
//     $("#exchange").addClass("d-none");
//   } else {
//     $("#exchangeProgress").addClass("d-none");
//     $("#exchange").removeClass("d-none");
//   }
// });



document.addEventListener("DOMContentLoaded", function() {
      const table = document.getElementById("myTable");
      const rowsPerPage = 10;

      let currentPage = 1;
      let totalRows = table.rows.length - 1;

      function showPage(page) {
        const startIndex = (page - 1) * rowsPerPage + 1;
        const endIndex = startIndex + rowsPerPage - 1;

        for (let i = 1; i <= totalRows; i++) {
          const row = table.rows[i];
          if (i >= startIndex && i <= endIndex) {
            row.style.display = "";
          } else {
            row.style.display = "none";
          }
        }
      }

      function updatePagination() {
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        const paginationElement = document.getElementById("pagination");

        paginationElement.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
          const li = document.createElement("li");
          const a = document.createElement("a");

          a.textContent = i;
          a.href = "#";
          a.addEventListener("click", function() {
            currentPage = i;
            showPage(currentPage);
            updatePagination();
          });

          if (i === currentPage) {
            a.style.backgroundColor = "#01349b";
            a.style.color = "#FFFFFF";
          }

          li.appendChild(a);
          paginationElement.appendChild(li);
        }
      }

      showPage(currentPage);
      updatePagination();
    });