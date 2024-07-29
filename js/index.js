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



$(document).ready(function() {
    // .day sınıfına sahip tüm elemanları seçiyoruz
    $('.day').on('click', function() {
        console.log('Tıklama gerçekleşti');
        let secilentarih = document.getElementsByClassName('day active')
        console.log(secilentarih) //silinecek, kontrol amaçlı yazıldı
        let value = secilentarih[0].getAttribute('data-value');
        console.log(value)  //silinecek, kontrol amaçlı yazıldı
        document.getElementById('bosTarih').innerText = `${value}`
        
        document.getElementById('datetimepicker').style.display = 'none'

        let icerik = document.getElementById('contentInfo')
        icerik.innerText = 'Lütfen rezervasyon saatinizi seçiniz'
        

        //saat verilerinin kutu oluşturularak ekrana yazılması 
        fetch('veri2.json')
            .then(response => response.json())
            .then(saatler =>{
                console.log(saatler)  //silinecek, kontrol amaçlı eklendi

        
        let yenisaatÖgesi = document.getElementById('anaSayfa')
        let saatlerHTML = '';
    
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
            `
        }
        yenisaatÖgesi.innerHTML += saatlerHTML;
        

        //saat seçim kısmı
        let kutularım = document.querySelectorAll('.custom-card');
        kutularım.forEach(kutum => {
        kutum.addEventListener('click', function() {
            let saatSecilen = kutum.querySelector('h4').innerText;
            console.log(saatSecilen)  //silinecek, kontrol amaçlı yazıldı
            document.getElementById('bosSaat').innerText = `${saatSecilen}`
            icerik.innerText = 'Lütfen alan seçimi yapınız'
            

            document.getElementById('anaSayfa').innerHTML = `
                <div class="container-alan">
                    <div class="eleman">ŞEF'İN MASASI</div>
                    <div class="eleman">ANA <br> SALON</div>
                    <div class="eleman">ROOF</div>
                </div>
                
        
            `
        // Tüm elemanları seçme
        const kisiSayisi = document.querySelectorAll('.eleman');
        
        // Olay işleyici fonksiyonu tanımlama
        function handleClick(event) {
            console.log('Çalışıyor, sakin olun!'); // Kontrol amaçlı yazıldı

            // Yeni içeriği ekle
            document.getElementById('anaSayfa').insertAdjacentHTML('afterend', `
                <div class="container-kapsam">
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
            `);

            // Tüm elemanlardan olay dinleyicisini kaldır
            kisiSayisi.forEach(misafirler => {
                misafirler.removeEventListener('click', handleClick);
            });
        }

        // Her bir eleman için olay dinleyicisi ekleme
        kisiSayisi.forEach(misafirler => {
            misafirler.addEventListener('click', handleClick);
        });

        
        }) 
        });

        

        

        });
        
        
    })
});

//clear kodu yazmalısın sorunu çözmek için



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