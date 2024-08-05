// Veri Yükleme Fonksiyonu
function getData() {
    let kutu = document.getElementById('box'); // id'si box olan veriyi yakala ve kutu değişkenine ata

    fetch('rezervasyons.json') // JSON dosyasını getir
        .then(response => {
            if (!response.ok) {
                throw new Error('Veri alınamadı');
            }
            return response.json();
        })
        .then(guests => {
            let content = '';
            guests.forEach((info, index) => { 
                content += `
                    <div class="col-md-4 mt-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Rezervasyon Sahibi:</h4>
                                <p>İsim: ${info.isim}</p>
                                <p>Soyisim: ${info.soyisim}</p>
                                <p>Telefon: ${info.telefonNo}</p>
                                <p>Email: ${info.email}</p>
                                <p>Tarih: ${info.tarih}</p>
                                <p>Saat: ${info.saat}</p>
                                <p>Alan Seçimi: ${info.alanSecimi}</p>
                                <p>Misafir Sayısı: ${info.misafirSayisi}</p>
                                <p>Alerjen Bilgisi: ${info.alerjenVarYok}</p>
                                <p>Özel İstek: ${info.ozelIstek}</p>
                                <p>Fatura Talebi: ${info.faturaIstegi}</p>
                                <p>Concept: ${info.conceptSecimi}</p>
                                <div id="actionsBtn"> 
                                    <button class="btn updatebtn" style="width: 100px; margin-top: 10px; margin-right: 3px; margin-bottom: 3px">Güncelle</button>
                                    <button class="btn silbtn" style="width: 100px; margin-top: 10px; margin-bottom: 3px;" data-email="${info.email}">Sil</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
            });
            kutu.innerHTML = content;

            // Silme butonlarına tıklama olayları ekleme
            const silButonlari = document.querySelectorAll('.silbtn');
            silButonlari.forEach((button) => {  
                button.addEventListener('click', function() {
                    const email = this.getAttribute('data-email');  // data-email değerini al
                    deleteReservation(email); // email'i fonksiyona geçir
                });
            });

            // Güncelleme butonlarına tıklama olayları ekleme (Opsiyonel)
            const updateButonlari = document.querySelectorAll('.updatebtn');
            updateButonlari.forEach((button) => {
                button.addEventListener('click', function() {
                    const email = this.getAttribute('data-email');
                    updateReservation(email);
                });
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}

// deleteReservation fonksiyonu: Belirtilen email'e sahip kullanıcıyı sil
function deleteReservation(email) {
    fetch('/delete-reservation', {  // Sunucu URL'sine istek yap
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Silme Başarılı:', data);
        alert('Rezervasyon silindi!');
        getData(); // Arayüzü güncelle
    })
    .catch(error => console.error('Silme hatası:', error));
}

// Güncellenmiş JSON'u kaydetme fonksiyonu (isteğe bağlı)
function saveUpdatedJson(data) {
    fetch('http://localhost:3000/save-reservation', { // Sunucu URL'nizi buraya koyun
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => console.log('Başarılı:', result))
    .catch(error => console.error('Hata:', error));
}

// Sayfa yüklendiğinde otomatik olarak veriyi yükle
document.addEventListener('DOMContentLoaded', function() {
    // Rezervasyon listesi butonuna tıklandığında veriyi yükle
    let buton = document.getElementById('listBtn');
    buton.addEventListener('click', function() {
        getData(); // Fonksiyonu çağır
    });
});






    