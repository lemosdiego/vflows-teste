$(document).ready(function () {
  $("#input-attachments").on("change", function (event) {
    const file = event.target.files[0];

    $("#no-attachment").addClass("fs-display-none");
    const attachmentPanel = $("[data-attachment]").first().clone(true);

    attachmentPanel.find("span.lead").text(file.name);
    attachmentPanel.removeClass("fs-display-none");
    attachmentPanel.insertBefore($(this).parents(".fs-cursor-pointer"));
  });
});
