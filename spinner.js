const startSpinner = () => {
  const spinner = ["|", "/", "-", "\\"];
  let spinnerIndex = 0;

  const updateSpinner = () => {
    process.stdout.write("\r" + spinner[spinnerIndex]);
    spinnerIndex = (spinnerIndex + 1) % spinner.length;
  };

  const spinnerInterval = setInterval(updateSpinner, 100);
  return spinnerInterval;
};

const stopSpinner = (spinnerInterval) => {
  clearInterval(spinnerInterval);
  process.stdout.write("\r");
};

module.exports = {
  startSpinner,
  stopSpinner,
};
