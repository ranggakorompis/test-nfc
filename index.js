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

// Scan dan tampilkan pesan dari NFC tag
async function scanNfc() {
  if ("NDEFReader" in window) {
    const ndef = new NDEFReader();
    try {
      await ndef.scan();
      ndef.onreading = async (event) => {
        const decoder = new TextDecoder();
        for (const record of event.message.records) {
          alert("data : " + decoder.decode(record.data));
        }
      };
    } catch (error) {
      alert("Gagal scan NFC tag!");
    }
  } else {
    alert("NFC tidak support!");
  }
}

// Function untuk menampilkan log
function logData(data) {
  let logElement = (document.getElementById("log").innerHTML = data);
}
