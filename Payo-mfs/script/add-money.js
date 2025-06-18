// document
//   .getElementById("add-money")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     const amount = parseInt(document.getElementById("amount").value);

//     const pinNumber = parseInt(document.getElementById("pin-number").value);

//     const mainBalance = parseFloat(
//       document.getElementById("main-balance").innerText
//     );

//     if (pinNumber === 1234 && amount) {
//       const sum = mainBalance + amount;
//       //   console.log(sum);
//       document.getElementById("main-balance").innerText = sum;
//     } else {
//       alert("Pin Number is Invalid");
//     }
//   });
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const pinNum = getInputValueByID("pin-number");
    const mainBalance = getInnerTextByID("main-balance");
    const account = document.getElementById("account").value;

    const selectedBank = document.getElementById("allbank");

    if (amount < 0) {
      alert("Taka must be in positive");
      return;
    }

    if (account.length === 11) {
      if (pinNum === 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIDandValue("main-balance", sum);

        const container = document.getElementById("transaction-history");

        const div = document.createElement("div");
        div.classList.add("bg-red-400");
        div.innerHTML = `
        <h1 class='text-yellow-300 '>Added Money from ${selectedBank.value} Bank</h1>
        <h3>${amount}</h3>
        <p>Account Number: ${account}</p>
        
        `;
        container.appendChild(div);
      } else {
        alert("Error Pin");
      }
    } else {
      alert("Pin Number is Invalid");
    }
  });
