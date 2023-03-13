// Cek NFC support
let nfc = document.getElementById("nfc");
if ("NDEFReader" in window) {
  nfc.innerHTML = "NFC supported!";
} else {
  nfc.innerHTML = "NFC not supported!";
}

// Write something in NFC Tag
async function writeNfc() {
  if ("NDEFReader" in window) {
    const ndef = new NDEFReader();
    let arr1 = ["Rangga", 21];
    try {
      await ndef.write(arr1);
      logData("Write NFC berhasil!");
    } catch (error) {
      logData("Write NFC gagal!");
    }
  }
}

// Function untuk menampilkan log
function logData(data) {
  let logElement = (document.getElementById("log").innerHTML = data);
}
