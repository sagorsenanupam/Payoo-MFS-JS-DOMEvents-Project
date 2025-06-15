document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = parseInt(document.getElementById("amount").value);

    const pinNumber = parseInt(document.getElementById("pin-number").value);

    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );

    if (pinNumber === 1234 && amount) {
      const sum = mainBalance + amount;
      //   console.log(sum);
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("Pin Number is Invalid");
    }
  });
