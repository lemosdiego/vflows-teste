$(document).ready(function () {
  const STORAGE_NAME = "attachments";
  FLUIGC.sessionStorage.clear();

  $("#input-attachments").on("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const attachments = FLUIGC.sessionStorage.getItem(STORAGE_NAME) || [];

      const fileURL = URL.createObjectURL(file);

      attachments.push({
        indice: attachments.length + 1,
        nomeArquivo: file.name,
      });

      FLUIGC.sessionStorage.setItem(STORAGE_NAME, attachments);
      $("#no-attachment").addClass("fs-display-none");
      const attachmentPanel = $("[data-attachment]").first().clone(true);

      attachmentPanel.find("span.lead").text(file.name);
      attachmentPanel.data("fileURL", fileURL);

      attachmentPanel.removeClass("fs-display-none");

      attachmentPanel.insertBefore($(this).parents(".fs-cursor-pointer"));
    }
  });

  $("[data-attachment-remove]").click(function () {
    const attachmentPanel = $(this).parents("[data-attachment]");
    const fileName = attachmentPanel.find("span.lead").text();

    attachmentPanel.remove();

    const attachments = FLUIGC.sessionStorage.getItem(STORAGE_NAME) || [];
    const updatedAttachments = attachments.filter(
      (attachment) => attachment.nomeArquivo !== fileName
    );

    FLUIGC.sessionStorage.setItem(STORAGE_NAME, updatedAttachments);

    if (updatedAttachments.length === 0) {
      $("#no-attachment").removeClass("fs-display-none");
    }
  });

  $("[data-attachment-download]").click(function () {
    const attachmentPanel = $(this).parents("[data-attachment]");
    const fileURL = attachmentPanel.data("fileURL");

    if (fileURL) {
      const downloadLink = document.createElement("a");
      downloadLink.href = fileURL;
      downloadLink.download = attachmentPanel.find("span.lead").text();
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(fileURL);
    }
  });
});
