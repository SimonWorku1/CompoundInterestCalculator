function calculateInterest() {
  // Get input values
  const principal = parseFloat(document.getElementById("principal").value);
  const periodsPerYear = parseInt(document.getElementById("period").value);
  const apr = parseFloat(document.getElementById("aprSlider").value) / 100;
  const years = parseInt(document.getElementById("years").value);

  // Validate inputs
  if (
    isNaN(principal) ||
    isNaN(apr) ||
    isNaN(years) ||
    principal <= 0 ||
    years <= 0
  ) {
    alert("Please enter valid values for principal, APR, and years.");
    return;
  }

  // Calculate compound interest
  const accumulatedAmount =
    principal * Math.pow(1 + apr / periodsPerYear, periodsPerYear * years);

  // Display the result
  document.getElementById("accumulated").textContent =
    accumulatedAmount.toFixed(2);
}

// Update the displayed APR value when the slider moves
document.getElementById("aprSlider").addEventListener("input", function () {
  document.getElementById("aprValue").textContent = this.value;
});
