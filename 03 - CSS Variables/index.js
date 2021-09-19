const inputs = document.querySelectorAll(".controls input");
const labels = document.querySelectorAll(".controls label");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  labels.forEach((label) => {
    label.textContent = `${capitalizeFirstLetter(`${label.control.name}`)}: ${
      label.control.value
    }`;
  });
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
