// Write pesan sederhana pada nfc tag
function writeNfc() {
  if ("NDEFReader" in window) {
    const ndef = new NDEFReader();
    ndef
      .write("Hello NFC")
      .then(() => {
        logData("Pesan berhasil di tulis!");
      })
      .catch((error) => {
        logData(`Pesan gagal di tulis: coba lagi ${error}`);
      });
  } else {
    logData("NFC tidak support!");
  }
}

// Function untuk menampilkan log
function logData(data) {
  let logElement = (document.getElementById("log").innerHTML = data);
}
