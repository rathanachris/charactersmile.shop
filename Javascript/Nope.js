function sanitizeInput(input) {
  return input.replace(/<|>|script|alert|onerror|onload/gi, "");
}

document.querySelector("form").addEventListener("submit", function(e) {
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    input.value = sanitizeInput(input.value);
  });
});
