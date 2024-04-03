const qrInput = document.getElementById("qr-input");
const qrButton = document.getElementById("qr-button");
const qrImage = document.getElementById("qr-img");

qrButton.addEventListener("click", () => {
  const inputvalue = qrInput.value;

  if (!inputvalue) {
    alert("Please enter a valid URL");
    return;
  } else {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    qrImage.alt = `${inputvalue}`;
  }
});

// https://goqr.me/api/ --> this is used to generate qr code
