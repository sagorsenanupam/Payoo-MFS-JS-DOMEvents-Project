// document
//   .getElementById("cash-out-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     const amount = parseInt(document.getElementById("cash-out-amount").value);

//     const pinNumber = parseInt(
//       document.getElementById("cash-out-pin-number").value
//     );

//     const mainBalance = parseFloat(
//       document.getElementById("main-balance").innerText
//     );

//     if (pinNumber === 1234) {
//       if (mainBalance === 0) {
//         alert("Insufficient Balance");
//       } else {
//         const sum = mainBalance - amount;
//         //   console.log(sum);
//         document.getElementById("main-balance").innerText = sum;
//       }
//     } else {
//       alert("Pin Number is Invalid");
//     }
//   });

document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("cash-out-amount");
    const pinNum = getInputValueByID("pin-number");
    const mainBalance = getInnerTextByID("main-balance");
    const account = document.getElementById("account").value;

    if (account.length === 11) {
      if (pinNum === 1234) {
        const sum = mainBalance - amount;
        setInnerTextByIDandValue("main-balance", sum);
        const container = document.getElementById("transaction-history");

        const p = document.createElement("p");
        p.innerText = `
        Cash out ${amount} from ${account}
        `;

        container.appendChild(p);
      } else {
        alert("Error Pin");
      }
    } else {
      alert("Pin Number is Invalid");
    }
  });
