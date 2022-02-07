const monkeyClosed = document.querySelector(".closed");
const monkeyOpen = document.querySelector(".open");

monkeyClosed.addEventListener("click", () => {
  if (monkeyOpen.classList.contains("open")) {
    monkeyOpen.classList.add("active");
    monkeyClosed.classList.remove("active");
  }
});

monkeyOpen.addEventListener("click", () => {
  if (monkeyClosed.classList.contains("closed")) {
    monkeyClosed.classList.add("active");
    monkeyOpen.classList.remove("active");
  }
});
