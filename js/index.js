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
        

        
        fetch('veri2.json')
            .then(response => response.json())
            .then(saatler =>{
                console.log(saatler)





        let yenisaatÖgesi = document.getElementById('anaSayfa')
        yenisaatÖgesi.innerHTML += `
                     <div class="col-md-4  mt-4">
                         <div class="card">
                             <div class="card-body">
                                 <h4 class="card-title"></h4>
                                 <p>rhhdvd</p>
                             </div>
                         </div>
                     </div>        
                     `
                    
        });

        })
    });




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