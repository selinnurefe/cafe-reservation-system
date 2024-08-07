const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors');
const fs = require('fs'); 
const path = require('path'); 

const app = express(); 
const PORT = 3000; 

app.use(cors()); 


app.use(express.static(path.join(__dirname)));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const filePath = 'rezervasyons.json'; 

// Yeni rezervasyonu JSON dosyasına yazan fonksiyon
function writeJsonToFile(guest, filePath) {
    
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    }

    // Mevcut verileri oku
    const data = fs.readFileSync(filePath, 'utf8');
    const reservations = JSON.parse(data);

    // Yeni misafiri ekle
    reservations.push(guest);

    // Güncellenmiş listeyi dosyaya yaz
    fs.writeFileSync(filePath, JSON.stringify(reservations, null, 2));
    console.log('Rezervasyon kaydedildi!');
}

// Rezervasyonu silen fonksiyon
function deleteReservationByEmail(email, filePath) {
    console.log("deleteReservationByEmail fonksiyonu çalıştı");
    const data = fs.readFileSync(filePath, 'utf8');
    const reservations = JSON.parse(data);

    // Email'e göre rezervasyonu filtrele
    const updatedReservations = reservations.filter(guest => guest.email !== email);

    // Güncellenmiş listeyi dosyaya yaz
    fs.writeFileSync(filePath, JSON.stringify(updatedReservations, null, 2));
    console.log('Rezervasyon silindi!');
}

// POST isteği ile form verilerini işleme
app.post('/submit-reservation', (req, res) => {
    const guest = req.body;
    writeJsonToFile(guest, filePath);
    res.status(200).json({ message: 'Rezervasyon kaydedildi!' });
});

// DELETE isteği ile rezervasyon silme işlemi
app.delete('/delete-reservation', (req, res) => { // <== Eklenen Kod: Silme işlemi için API endpoint
    const { email } = req.body;

    console.log("Requestin içerisinden email alındı: " + email);
    
    if (!email) {
        return res.status(400).json({ message: 'Geçersiz e-posta adresi - Emaili bulamadım.' });
    }

    deleteReservationByEmail(email, filePath); // Burada "filePath" değişkeni kullanılıyor
    res.status(200).json({ message: 'Rezervasyon silindi!' });
});

// Varsayılan rotada `index.html` dosyasını gönderme
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Admin paneli rotası (adminpaneli.html)
app.get('/admin', (req, res) => {  // <== Eklenen Kod: Admin paneli rotası
    res.sendFile(path.join(__dirname, 'adminpaneli.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor http://localhost:${PORT}`);
});
