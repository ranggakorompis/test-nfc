// Cek NFC support
// let nfc = document.getElementById("nfc");
// if ("NDEFReader" in window) {
//   nfc.innerHTML = "NFC supported!";
// } else {
//   nfc.innerHTML = "NFC not supported!";
// }

const dataUser = {
  name: "Rangga",
  age: 21,
};

function writeNfcTag() {
  if ("NDEFMessage" in window) {
    const message = new NDEFMessage([new NDEFRecord("text/plain", dataUser)]);
    if ("NDEFWriter" in window) {
      const writer = new NDEFWriter();
      writer
        .write(message)
        .then(() => {
          logData("Pesan berhasil di tulis di tag NFC");
        })
        .catch((error) => {
          console.error("Pesan gagal di tulis!");
        });
    }
  } else {
    logData("NFC tidak support!");
  }
}

// Write something in NFC Tag
// async function writeNfc() {
//   if ("NDEFReader" in window) {
//     const ndef = new NDEFReader();
//     let arr1 = ["Rangga", 21];
//     try {
//       await ndef.write(arr1);
//       logData("Write NFC berhasil!");
//     } catch (error) {
//       logData("Write NFC gagal!");
//     }
//   }
// }

// Function untuk menampilkan log
function logData(data) {
  let logElement = (document.getElementById("log").innerHTML = data);
}
