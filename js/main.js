// Filter Js
$(document).ready(function () {
  $(".filter-item").click(function () {
    console.log("test");
    const value = $(this).attr("data-filter");
    let html = "";
    if (value == "all") {
      $(".post-box").show("1000");

      html = $(".post-box").sort((a, b) => {
        return $(a).attr("data-id") < $(b).attr("data-id") ? -1 : 1;
      });
    } else if (value == "sort") {
      console.log("here");
      html = $(".post-box").sort((a, b) => {
        return $(a)
          .find(".post-title")
          .text()
          .trim()
          .localeCompare($(b).find(".post-title").text().trim());
      });

      // sort by date:
    } else if (value == "sort-date") {
      html = $(".post-box").sort((a, b) => {
        const value =
          new Date($(a).find(".post-date").text().trim()).getTime() <
          new Date($(b).find(".post-date").text().trim()).getTime();

        return !value ? -1 : 1;
      });
    }
    $(".post.container").html(html);
  });

  $(".filter-item").click(function () {
    $(this)
      .addClass("active-filter")
      .siblings()
      .removeClass("active-filter");
  });
});
