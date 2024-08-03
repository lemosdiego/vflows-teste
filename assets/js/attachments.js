$(document).ready(function () {
  const STORAGE_NAME = "attachments";
  FLUIGC.sessionStorage.clear();

  $("#input-attachments").on("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const attachments = FLUIGC.sessionStorage.getItem(STORAGE_NAME) || [];

      attachments.push({
        indice: attachments.length + 1,
        nomeArquivo: file.name,
      });

      FLUIGC.sessionStorage.setItem(STORAGE_NAME, attachments);
      $("#no-attachment").addClass("fs-display-none");
      const attachmentPanel = $("[data-attachment]").first().clone(true);

      attachmentPanel.find("span.lead").text(file.name);
      attachmentPanel.removeClass("fs-display-none");
      attachmentPanel.insertBefore($(this).parents(".fs-cursor-pointer"));
    }
  });
});
