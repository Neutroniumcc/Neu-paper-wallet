
    function fromMnemonic(phrase) {
        var wallet = ethers.Wallet.fromMnemonic(phrase);
        document.getElementById("IndirizzoPubblico").value = wallet.address;
        document.getElementById("IndirizzoPubblico_testo").value = wallet.address;
        document.getElementById("ChiavePrivata").value = wallet.privateKey;
        document.getElementById("ChiavePrivata_testo").value = wallet.privateKey;
      }


function genera(){
    var wallet = ethers.Wallet.createRandom();
    fromMnemonic(wallet.mnemonic.phrase);
    var pubkey = wallet.addres;
    var privkey = wallet.privateKey;


    var pubkey = document.getElementById("IndirizzoPubblico").value;
    var privkey = document.getElementById("ChiavePrivata").value;
    

    var pubkey_qr = document.getElementById("IndirizzoPubblico_qr");
    pubkey_qr.innerHTML="";
    var privkey_qr = document.getElementById("ChiavePrivata_qr");
    privkey_qr.innerHTML="";

  new QRCode(pubkey_qr,{
      text:pubkey,
      width:100,
      height:100
  });

  new QRCode(privkey_qr,{
      text:privkey,
      width:128,
      height:128
  });


  $(document).ready(function () {
        $('#checkboxNascondiChiavePrivata').change(function () {
            if (!this.checked) {
            document.getElementById("ChiavePrivata_testo").innerHTML = wallet.privateKey;
            }
            else {
            document.getElementById("ChiavePrivata_testo").innerHTML = "Hidden because of security reason";
            }
        });
    });
}

