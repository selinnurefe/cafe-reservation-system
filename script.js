const express = require('express'); // Express kütüphanesi
const bodyParser = require('body-parser'); // Body parser middleware
const cors = require('cors'); // CORS middleware
const fs = require('fs'); // Dosya sistemi işlemleri
const path = require('path'); // Dosya yolu işlemleri

const app = express(); // Express uygulaması oluşturma
const PORT = 3000; // Sunucu port numarası

app.use(cors()); // <== Eklenen Kod: Tüm isteklerde CORS'u etkinleştir

// Tüm statik dosyaları ana dizinden sunmak için
app.use(express.static(path.join(__dirname)));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// JSON dosya yolu
const filePath = path.join(__dirname, 'rezervasyons.json');

// Yeni rezervasyonu JSON dosyasına yazan fonksiyon
function writeJsonToFile(guest, filePath) {
    // Eğer dosya yoksa, boş bir diziyle başlat
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
    
    if(!email) {
        return res.status(400).json({ message: 'Geçersiz e-posta adresi' });
    }

    deleteReservationByEmail(email, filePath);
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
