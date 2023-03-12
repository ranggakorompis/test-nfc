// Cek NFC Support & Write something in NFC Tag
async function writeNfc() {
  if ("NDEFReader" in window) {
    let nfc = (document.getElementById("nfc").innerHTML = "NFC supported!");
    const ndef = new NDEFReader();
    let arr1 = ["Rangga", 21];
    try {
      await ndef.write(arr1);
      logData("Write NFC berhasil!");
    } catch (error) {
      logData("Write NFC gagal!");
    }
  } else {
    nfc.innerHTML = "NFC tidak support!";
  }
}

// Function untuk menampilkan log
function logData(data) {
  let logElement = (document.getElementById("log").innerHTML = data);
}
