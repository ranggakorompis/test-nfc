// coba nfc
const nfc = document.getElementById("nfc");
if ("NDEFReader" in window) {
  nfc.innerHTML = "Hello NFC!";
} else {
  nfc.innerHTML = "NFC tidak support!";
}
