/* type="text/javascript"
$(function () {
    $('#datetimepicker1').datetimepicker({
           format: "dd/mm/yyyy hh:ii"
    });
}); */

/* let dateChoise = document.getElementsByClassName('day')  //ilgili classtaki elementi yakalar
console.log(dateChoise)                                  // console da deneme
let dateChoiseArray = Array.from(dateChoise)             //html collection ı array e çevirdik
console.log(dateChoiseArray)                       //consoleda deneme ancak çalışmadı
for(let element of dateChoiseArray){                  //event ekledik ancak olmadı
    element.addEventListener('click',function(){
        console.log('çilolaya')
    })
} */

/* $(".date").datepicker({
    onSelect: function(dateText) {
        console.log("Selected date: " + dateText + "; input's current value: " + this.value);
    }
});
 */

class Guest{
    constructor(isim, soyisim,telefonNo,email,tarih,saat,alanSecimi,misafirSayisi,alerjenBilgisi,ozelIstek,faturaTalebi){
        
        this.isim = isim 
        this.soyisim = soyisim   
        this.telefonNo = telefonNo   
        this.email = email 
          
        this.tarih = tarih  
        this.saat = saat
        this.alanSecimi = alanSecimi 
        this.misafirSayisi = misafirSayisi 

        this.alerjenBilgisi = alerjenBilgisi  
        this.ozelIstek = ozelIstek  
        this.faturaTalebi = faturaTalebi   
    }
}



/*

Todo3: Verilen veriyi file a json olarak yazan, güncelleyen ve silen 3 fonksiyon yazılacak.

*/

function writeJsonToFile(guest,filePath){
    //Eğer verilen file pathde dosya yok ise oluştur ve dosyanın içeriği verilen içeriği ekle.
}
function updateJsonToFile(guest,filePath,email){
    //Json dosyasında verilen email objesini bul ve verilen değerler ile objeyi güncelle.
}
function deleteJsonToFile(guest,filePath,email){
    //Json dosyasında verilen email objesini bul ve sil.
}

/*

Todo1: guest değişkenine kullanıcıdan alabildiğin verileri set edeceksin.

Todo2: formdan kullanıcının girdiği verileri alarak guest değişkeninin içerisine set edeceksin.#afb6b4

Todo3: dosyaya json yazan fonksiyon oluşturacaksın.

Todo4: form submit edildikten ve guest değişkeni doldurulduktan sonra, writeJsonToFile fonksiyonu çağırılacak.

*/

$(document).ready(function () {
  // .day sınıfına sahip tüm elemanları seçiyoruz

  $(".day").on("click", function () {
    console.log("Tıklama gerçekleşti");

    //Yeni ici bos guest objesi olusturdum.
    const guest = new Guest()

    let secilentarih = document.getElementsByClassName("day active");
    console.log(secilentarih); //silinecek, kontrol amaçlı yazıldı
    valueTarih = secilentarih[0].getAttribute("data-value");
    console.log(valueTarih); //silinecek, kontrol amaçlı yazıldı
    document.getElementById("bosTarih").innerText = `${valueTarih}`;

    //Guest objesi ile olusturmus oldugumuz guest degiskenine tarih degerinin atamasını gerceklestirdik.
    guest.tarih = valueTarih;
    console.log(guest) //deneme amaçlı yazılan satır
    console.log(guest.tarih) //deneme amaçlı yazılan satır
    


    document.getElementById("datetimepicker").style.display = "none";

    let icerik = document.getElementById("contentInfo");
    icerik.innerText = "Lütfen rezervasyon saatinizi seçiniz";

    //saat verilerinin kutu oluşturularak ekrana yazılması
    fetch("veri2.json")
      .then((response) => response.json())
      .then((saatler) => {
        console.log(saatler); //silinecek, kontrol amaçlı eklendi

        let yenisaatÖgesi = document.getElementById("anaSayfa");
        let saatlerHTML = "";

        for (let saat in saatler.hours) {
          saatlerHTML += `
                <div class="custom-card">
                    <div class="custom-card-body">
                        <div class="card-body">
                            <h4 class="card-title">${saat}</h4>
                            <p>${saatler.hours[saat]}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        yenisaatÖgesi.innerHTML += saatlerHTML;

        //saat seçim kısmı
        let kutularım = document.querySelectorAll(".custom-card");
        kutularım.forEach((kutum) => {
          kutum.addEventListener("click", function () {
            saatSecilen = kutum.querySelector("h4").innerText;
            console.log(saatSecilen); //silinecek, kontrol amaçlı yazıldı
            document.getElementById("bosSaat").innerText = `${saatSecilen}`;
            icerik.innerText = "Lütfen alan seçimi yapınız";
            
            guest.saat = saatSecilen;
            console.log(guest) //deneme amaçlı yazıldı


            document.getElementById("anaSayfa").innerHTML = `
                <div class="container-alan" id="alan">
                    <div class="eleman">ŞEF'İN MASASI</div>
                    <div class="eleman">ANA <br> SALON</div>
                    <div class="eleman">ROOF</div>
                </div>
                
        
            `;
            // misafir sayısı seçimini ekrana çıkartma kısmı
            const kisiSayisi = document.querySelectorAll(".eleman");

            

            // Olay işleyici fonksiyonu tanımlama
            function handleClick(event) {
              console.log("Çalışıyor, sakin olun!"); // Kontrol amaçlı yazıldı

              // Yeni içeriği ekle
              document.getElementById("anaSayfa").insertAdjacentHTML(
                "afterend",
                `
                <div class="container-kapsam" id="misafirSecimAlanı">
                    <div class="container-soru">
                        <span class="sorucümlesi">Lütfen misafir sayısını seçiniz</span>
                    </div>
                    <div class="container-misafir">
                        <div class="adetler">2</div>
                        <div class="adetler">3</div>
                        <div class="adetler">4</div>
                        <div class="adetler">5</div>
                        <div class="adetler">6</div>
                    </div>
                </div>
            `
            );
            
              
              let misafirSecim = document.querySelectorAll(".adetler");
              misafirSecim.forEach((daireAdetler) => {
                daireAdetler.addEventListener("click", function () {
                  secilenMisafirAdeti = daireAdetler.innerText;
                  console.log(secilenMisafirAdeti);
                  document.getElementById("bosMisafir").innerText = `${secilenMisafirAdeti}`;

                 
                  guest.misafirSayisi = secilenMisafirAdeti;
                  console.log(guest) //deneme amaçlı yazıldı


                  document.getElementById("tarihSecimi").style.display = "none";
                  // document.getElementById('anaSayfa').style.display = 'none'
                  document.getElementById("misafirSecimAlanı").style.display =
                    "none";

                  document.getElementById("islemler").insertAdjacentHTML(
                    "beforeend",
                    `
        
                        <div class="col">
                            <a class="nav-link" id="islemi-tamamla" aria-current="page" href="islemtamamla.html">
                                <i class="fa-solid fa-check fa-2xl  check-icon"></i> <br>
                                <p>İşlemi <br>Tamamla</p>
                            </a>
                        </div>
                        
                            `
                  );
                  document.getElementById("anaSayfa").innerHTML = `
                <div id="guestForm">
                    <h5 class="rez-bilgisi-baslik"> Lütfen rezervasyonunuzu tamamlayın</h5>
                    
                    <form action="/" method="post" class="rezervasyonBilgiGirisi">
                    <div id="rezervasyonSahibiBilgileri">
                        <!-- Ad ve Soyad -->
                        <input type="text" name="name" id="rezervasyonSahibiAd" placeholder="Adınız" required>
                        <input type="text" name="surname" id="rezervasyonSahibiSoyad" placeholder="Soyadınız" required> 

                        <!-- Telefon -->
                        <input id="phone" name="phone" type="tel" placeholder="Telefon numaranız" required>

                        <!-- Eposta -->
                        <input type="email" name="eposta" id="rezervasyonSahibiMail" placeholder="E-posta adresiniz" required>
                    </div>
                    <div id="alerjen-box">
                        <!-- Alerjen Bilgisi -->
                        
                        <h5 id="alerjen-bilgisi-baslik">Alerjen Bilgisi</h5>
                        <p>Siz veya misafirleriniz arasında herhangi bir şeye alerjisi olan var mı? </p>

                        <input type="radio" id="alerjenVar" name="alerjenBilgisi" value="var" required>
                        <label for="alerjenVar">Evet</label><br>

                        <input type="radio" id="alerjenYok" name="alerjenBilgisi" value="yok" required>
                        <label for="alerjenYok">Hayır</label><br>
                    </div>
                    <div id="ozel-istek-box">
                        <!-- Özel İstekler ve Alerjen Bilgisi -->

                        <h5><label for="textareaÖzelİstek">Özel İstekleriniz ve Alerjen Bilgisi</label></h5>
                        <textarea id="textareaÖzelİstek" name="textareaÖzelİstek" rows="4" cols="50" placeholder="Özel isteklerinizi ve alerjen bilgisini buraya yazabilirsiniz(opsiyonel)" ></textarea>
                        <br>
                    </div>
                    <div id="rez-etiketi-box">
                        <!-- Rezervasyon Etiketi(Özel Gün vs) -->
                        
                        <h6>Dilerseniz etiketler seçerek rezervasyonunuzu detaylandırabilirsiniz</h6>
                        
                        <input type="radio" id="birthday" name="etiketler" value="Birthday">
                        <label for="birthday">Doğum Günü</label>

                        <input type="radio" id="anniversary" name="etiketler" value="Anniversary">
                        <label for="anniversary">Yıl Dönümü</label>

                        <input type="radio" id="honeymoon" name="etiketler" value="Honeymoon">
                        <label for="honeymoon">Honeymoon</label> <br>
                    </div>   
                    <div id="rez-fatura-talebi">
                        <!-- Fatura Talebi -->

                        <p>Bu ziyaretinizde fatura talebiniz olacak mı?</p>

                        <input type="radio" id="faturaTalebiVar" name="faturaTalebi" value="Evet" required>
                        <label for="faturaTalebiVar">Evet</label><br>

                        <input type="radio" id="faturaTalebiYok" name="faturaTalebi" value="Hayır" required> 
                        <label for="faturaTalebiYok">Hayır</label><br>
                    </div>
                    </form>
                </div>       
                `;

                  document.getElementById("beklemeListesi").innerHTML = `
                <div>
                    <!-- Bilgilendirmes Kutusu -->

                    <div class="info-box">
                        <i class="fa-solid fa-circle-info fa-xl" style="color: #afb6b4;"></i>
                        <h3>Şartlar & Koşullar</h3>
                        <span>Lütfen aşağıdaki <b>adımları</b> inceleyin.</span>
                        </p>
                        <p><b>Rezervasyon & Ödeme:</b> <br>
                            Rezervasyonunuzun devamlılığı için 24 saat içerisinde kişi başı 4900 TL tutarında ön ödeme yapmanız gerekmektedir. <br>
                            Tadım menüsü kişi başı 9900 TL +%12 servis bedeli olarak fiyatlandırılmaktadır. <br>
                        </p>
                        <p><b>Restoran Deneyimi:</b> <br>
                            10 adımdan oluşan ve süprizler içerebilen tadım menüsü, ortalama 2 saat içerisinde servis edilmektedir. Alakart servisimiz <b>bulunmamaktadır.</b>
                        </p>
                        <p><b>Küçük Misafirlerimiz:</b> <br>
                            14 yaş altı müsafirlerimizi kabul edememekteyiz. Çocuk menüsü <b>bulunmadığını</b> hatırlatmak isteriz. Anlayışınız için teşekkür ederiz.
                        </p>
                        <p><b>İptal politikası:</b> <br>
                            Rezervasyon saatinizden 36 saat öncesine kadar iptal yapabilirsiniz. 36 saat kala yapılan iptaller için ön ödeme sırasında ödenen %20 deposito iadesi yapılamamaktadir.
                        </p>
                    </div>
                    <div class="dress-code-box">
                        <i class="fa-solid fa-triangle-exclamation fa-lg" style="color: #afb6b4;"></i>
                        <h3>Dress Code</h3>
                        <p>Dress Code: <b> Cocktail Attire </b> <br>
                        Size daha iyi bir deneyim sunmak için dress code ile uyumlu giyinmenizi önemle rica ediyoruz.
                        </p>
                    </div>

                    <!-- Aydınlatma Metni kısmı -->

                    <div class="aydinlatma-box">
                    <input type="checkbox" id="aydinlatmaMetni" name="aydinlatmaMetni" value="Evet" required>
                    <label for="aydinlatmaMetni"> Aydınlatma Metni'ni okudum ve anladım.</label><br>
                    </div>

                    <!-- Gönder/Submit butonu -->
                    <button type="submit" id="submit">Rezervasyonu Tamamla</button>
                </div>
                `;
                });
              });

              // Tüm elemanlardan olay dinleyicisini kaldır
              kisiSayisi.forEach((misafirler) => {
                misafirler.removeEventListener("click", handleClick);
              });
            }

            // Her bir eleman için olay dinleyicisi ekleme
            kisiSayisi.forEach((misafirler) => {
              misafirler.addEventListener("click", handleClick);
            });
          });
        });
      });
  });
});





/* 
        
        function handleFormSubmit(event) {
        event.preventDefault();
        
        const data = new FormData(event.target);
        
        const formJSON = Object.fromEntries(data.entries());

        // for multi-selects, we need special handling
        formJSON.snacks = data.getAll('snacks');
        
        const results = document.querySelector('.results pre');
        results.innerText = JSON.stringify(formJSON, null, 2);
        }

        const form = document.querySelector('.contact-form');
        form.addEventListener('submit', handleFormSubmit);
*/

/* 
        let tarih = valueTarih
        console.log(tarih)  //silinecek 

        let saat = saatSecilen
        console.log(saat) //silinecek 

        let misafirSayisi = secilenMisafirAdeti
        console.log(misafirSayisi) //silinecek  */

/*  
        const isim = document.getElementById('rezervasyonSahibiAd').value;
        const soyisim = document.getElementById('rezervasyonSahibiSoyad').value;
        const telefonNo = document.getElementById('phone').value;
        const mail = document.getElementById('rezervasyonSahibiMail').value;
         */

/* 
<div class="container mt-5">
        <div>      
                <input type="text" name="username" id="kullaniciAdi" placeholder="kullanıcı adınızı giriniz">
                <input type="password" name="sifre" id="kullaniciSifre" placeholder="şifrenizi giriniz">
                <input type="submit" value="gönder" onclick="login()">                 
        </div>
    </div>
*/
//clear kodu yazmalısın sorunu çözmek için
/* 
let kutularım = document.querySelectorAll('.custom-card');
        kutularım.forEach(kutum => {
        kutum.addEventListener('click', function() {
            let saatSecilen = kutum.querySelector('h4').innerText;
            console.log(saatSecilen)  //silinecek, kontrol amaçlı yazıldı
            document.getElementById('bosSaat').innerText = `${saatSecilen}`
            icerik.innerText = 'Lütfen alan seçimi yapınız' */

/* 
fetch örnek yazım

fetch('veri.json')
        .then(response => response.json())
        .then(saatler =>{ 
             for(liste of saatler){
     
                 newElement.innerHTML += `
                     <div class="col-md-4  mt-4">
                         <div class="card">
                             <div class="card-body">
                                 <h4 class="card-title"> ${liste}</h4>
                                 <p>${liste}</p>
                             </div>
                         </div>
                     </div>        
                     `
             }
        } )
*/

/* örn function:


let i = 60
function sayac(){
    document.getElementById('timer').innerText = --i //--i olunca 60 ı göstermeden düşürür(i-- olsaydı 60 ekrana yazardı)

    if(i==0){
        document.getElementById('sorular').style.display = 'none'
        document.getElementById('timer').style.display = 'none'
    }
} */

/* kutu.addEventListener('click',function(){
    kutu.style.backgroundColor = '#ff0000' 
    kutu.style.width = '100px'  
    kutu.style.height = '100px' 
    kutu.id = 'kutu'
}) */
// deneysaati

/* 
document.getElementById('datetimepicker').style.display = 'none'
        let icerik = document.getElementById('contentInfo')
        icerik.innerText = 'Lütfen rezervasyon saatinizi seçiniz'
        let yenisaatÖgesi = document.getElementById('anaSayfa')
        yenisaatÖgesi.innerHTML += `
                     <div class="col-md-4  mt-4">
                         <div class="card">
                             <div class="card-body">
                                 <h4 class="card-title"></h4>
                                 <p>deneme</p>
                             </div>
                         </div>
                     </div>        
                     `



*/

/* 


*/







/*
Örnek json:

[
  {
    "isim": "Ahmet",
    "soyisim": "Yılmaz",
    "telefonNo": "5551234567",
    "email": "ahmet.yilmaz@example.com",
    "tarih": "2024-08-15",
    "saat": "19:00",
    "alanSecimi": "Bahçe",
    "misafirSayisi": 4,
    "alerjenBilgisi": "Fıstık alerjisi",
    "ozelIstek": "Sessiz bir masa",
    "faturaTalebi": true
  },
  {
    "isim": "Mehmet",
    "soyisim": "Kara",
    "telefonNo": "5557654321",
    "email": "mehmet.kara@example.com",
    "tarih": "2024-08-16",
    "saat": "20:00",
    "alanSecimi": "Salon",
    "misafirSayisi": 2,
    "alerjenBilgisi": "Laktoz intoleransı",
    "ozelIstek": "Pencere kenarı",
    "faturaTalebi": false
  },
  {
    "isim": "Ayşe",
    "soyisim": "Demir",
    "telefonNo": "5559876543",
    "email": "ayse.demir@example.com",
    "tarih": "2024-08-17",
    "saat": "18:30",
    "alanSecimi": "Teras",
    "misafirSayisi": 5,
    "alerjenBilgisi": "Gluten alerjisi",
    "ozelIstek": "Doğum günü kutlaması",
    "faturaTalebi": true
  }
]

*/
