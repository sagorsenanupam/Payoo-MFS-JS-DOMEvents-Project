function getInputValueByID(id) {
  //   return "Hello boss";
  const value = parseFloat(document.getElementById(id).value);
  return value;
}

function getInnerTextByID(id) {
  const value = parseFloat(document.getElementById(id).innerText);
  return value;
}

function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}
