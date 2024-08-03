
let buton = document.getElementById('listBtn')
buton.addEventListener('click', function() {
    let kutu = document.getElementById('box'); // id'si box olan veriyi yakala ve kutu değişkenine ata

    fetch('veri2.json')
        .then(response => response.json())
        .then(guests => {
            let content = '';
            for (let info of guests) {
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
                                <p>Alerjen Bilgisi: ${info.alerjenBilgisi}</p>
                                <p>Alerjen Bilgisi: ${info.alerjenVarYok}</p>
                                <p>Özel İstek: ${info.ozelIstek}</p>
                                <p>Fatura Talebi: ${info.faturaTalebi}</p>
                                <p>Fatura Talebi: ${info.conceptSecimi}</p>
                                <div id="actionsBtn"> 
                                <button class="btn" style="width: 100px; margin-top: 10px; margin-right: 3px; margin-bottom: 3px">Güncelle</button>
                                <button class="btn" style="width: 100px; margin-top: 10px; margin-bottom: 3px;">Sil</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
            kutu.innerHTML = content;
        })
        .catch(error => {
            console.error('Hata', error);
        });
});


    