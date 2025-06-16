document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = parseInt(document.getElementById("cash-out-amount").value);

    const pinNumber = parseInt(
      document.getElementById("cash-out-pin-number").value
    );

    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );

    if (pinNumber === 1234) {
      if (mainBalance === 0) {
        alert("Insufficient Balance");
      } else {
        const sum = mainBalance - amount;
        //   console.log(sum);
        document.getElementById("main-balance").innerText = sum;
      }
    } else {
      alert("Pin Number is Invalid");
    }
  });
