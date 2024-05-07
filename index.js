const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("card__answer--active");

  const answerButtonText = answerButton.textContent.trim();

  answerButton.textContent =
    answerButtonText === "Show answer" ? "Hide answer" : "Show answer";
});
