shareBtn = document.querySelector(".share_btn");
shareInformation = document.querySelector(".share_information");

shareBtn.addEventListener("click", () => {
  if (shareInformation.style.display === "none") {
    return (shareInformation.style.display = "flex");
  }
  return (shareInformation.style.display = "none");
});
