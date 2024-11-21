// Star Wars karakterleri veri seti
const characters = [
    {
        id: 1,
        name: "Luke Skywalker",
        pic: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg",
        homeworld: "tatooine",
        description: "Jedi Şövalyesi Luke Skywalker, galaksinin en güçlü Jedi'larından biridir. Tatooine'de bir çiftçi olarak başladığı hayatına, İsyan Birliği'nin kahramanı ve yeni Jedi Düzeni'nin kurucusu olarak devam etmiştir."
    },
    {
        id: 2,
        name: "C-3PO",
        pic: "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg",
        homeworld: "tatooine",
        description: "C-3PO, Anakin Skywalker tarafından yapılan protokol droiddir. 6 milyondan fazla iletişim biçiminde ustadır ve her zaman sadık dostu R2-D2 ile birliktedir."
    },
    {
        id: 3,
        name: "R2-D2",
        pic: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg",
        homeworld: "naboo",
        description: "R2-D2, Astromech droiddir. R2-D2, birçok önemli olayda yer almıştır ve Anakin, Luke ve Leia Skywalker ile yakın ilişkisi vardır."
    },
    {
        id: 4,
        name: "Darth Vader",
        pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        homeworld: "tatooine",
        description: "Darth Vader, Sith Lordu ve Galaktik İmparatorluğun en güçlü adamlarından biridir. Anakin Skywalker olarak doğan Vader, Obi-Wan Kenobi'ye karşı savaşırken yaralanmış ve Darth Sidious tarafından kurtarılmıştır."
    },
    {
        id: 5,
        name: "Leia Organa",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        homeworld: "alderaan",
        description: "Leia Organa, Alderaan Prensesi ve Generali, İsyan Birliği'nin liderlerinden biridir. Cesur ve kararlı bir liderdir ve galaksiyi İmparatorluğun baskısından kurtarmak için savaşmıştır."
    },
    {
        id: 6,
        name: "Owen Lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        homeworld: "tatooine",
        description: "Owen Lars, Anakin Skywalker'ın üvey kardeşi ve Luke Skywalker'ın amcasıdır. Tatooine'de bir çiftçi olarak yaşamıştır."
    },
    {
        id: 7,
        name: "Beru Whitesun lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        homeworld: "tatooine",
        description: "Beru Whitesun Lars, Owen Lars'ın karısı ve Luke Skywalker'ın teyzesidir. Tatooine'de bir çiftçi olarak yaşamıştır."
    },
    {
        id: 8,
        name: "R5-D4",
        pic: "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg",
        homeworld: "tatooine",
        description: "R5-D4, Astromech droiddir. R5-D4, Luke Skywalker tarafından satın alınmıştır, ancak kısa süre sonra arızalanmıştır."
    },
    {
        id: 9,
        name: "Biggs Darklighter",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        homeworld: "tatooine",
        description: "Biggs Darklighter, Luke Skywalker'ın çocukluk arkadaşı ve pilotudur. İsyan Birliği'nde savaşmıştır."
    },
    {
        id: 10,
        name: "Obi-Wan Kenobi",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        homeworld: "stewjon",
        description: "Obi-Wan Kenobi, Jedi Şövalyesi ve Anakin Skywalker'ın ustasıdır. Luke Skywalker'ı eğitmiştir ve Darth Vader ile savaşmıştır."
    },
    {
        id: 11,
        name: "Anakin Skywalker",
        pic: "https://lumiere-a.akamaihd.net/v1/images/Anakin-Skywalker_d3330724.jpeg",
        homeworld: "tatooine",
        description: "Anakin Skywalker, Jedi Şövalyesi ve Luke Skywalker'ın babasıdır. Daha sonra Darth Vader olmuştur."
    },
    {
        id: 12,
        name: "Wilhuff Tarkin",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        homeworld: "eriadu",
        description: "Wilhuff Tarkin, Galaktik İmparatorluğun Grand Moff'u ve Yıldız Savaşları'nın mimarıdır. İmparatorluğun en güçlü adamlarından biridir."
    },
    {
        id: 13,
        name: "Chewbacca",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        homeworld: "kashyyyk",
        description: "Chewbacca, Wookiee ve Han Solo'nun sadık dostudur. Cesur ve güçlü bir savaşçıdır."
    },
    {
        id: 14,
        name: "Han Solo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        homeworld: "corellia",
        description: "Han Solo, pilot ve kaçakçıdır. Chewbacca ile birlikte Millennium Falcon'u kullanmıştır ve İsyan Birliği'nde savaşmıştır."
    },
    {
        id: 15,
        name: "Greedo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        homeworld: "Rodia",
        description: "Greedo, Rodian avcıdır. Han Solo tarafından öldürülmüştür."
    },
    {
        id: 16,
        name: "Jabba Desilijic Tiure",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        homeworld: "tatooine",
        description: "Jabba Desilijic Tiure, Hutt suç lordudur. Tatooine'de yaşamıştır ve Han Solo'nun baş düşmanıdır."
    },
    {
        id: 18,
        name: "Wedge Antilles",
        pic: "https://lumiere-a.akamaihd.net/v1/images/databank_wedgeantilles_01_169_b8185dce.jpeg",
        homeworld: "corellia",
        description: "Wedge Antilles, pilot ve İsyan Birliği'nin üyesidir. Yıldız Savaşları'nda savaşmıştır."
    },
    {
        id: 19,
        name: "Jek Tono Porkins",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        homeworld: "bestine",
        description: "Jek Tono Porkins, pilot ve İsyan Birliği'nin üyesidir. Yıldız Savaşları'nda savaşmıştır."
    },
    {
        id: 20,
        name: "Yoda",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
        homeworld: "unknown",
        description: "Yoda, Jedi Şövalyesi ve Jedi Konseyi'nin üyesidir. Luke Skywalker'ı eğitmiştir."
    },
    {
        id: 21,
        name: "Palpatine",
        pic: "https://lumiere-a.akamaihd.net/v1/images/emperor-palpatine-main_d6632d0a.jpeg",
        homeworld: "naboo",
        description: "Darth Sidious olarak da bilinen İmparator Palpatine, Sith Lordu ve Galaktik İmparatorluğun kurucusudur. Naboo'nun senatörü olarak başladığı kariyerinde, politik zekas ve karanlık güç kullanımıyla galaksiyi ele geçirmiştir."
    },
    {
        id: 22,
        name: "Darth Maul",
        pic: "https://lumiere-a.akamaihd.net/v1/images/Darth-Maul_632eb5af.jpeg",
        homeworld: "dathomir",
        description: "Darth Maul, Sith Lordu Darth Sidious'un ilk çırağıdır. Dathomir'den gelen bu Zabrak savaşçı, çift taraflı ışın kılıcı kullanımındaki ustalığı ve acımasız dövüş tarzıyla tanınır."
    }
];

// HTML elementlerini seç
const toggleButton = document.getElementById('toggleButton');
const charactersContainer = document.getElementById('charactersContainer');

// Karakter kartı template'i
const characterCardTemplate = (character) => `
    <div class="col-md-4 mb-4">
        <div class="card h-100">
            <img src="${character.pic}" class="card-img-top character-image" alt="${character.name}" 
                 data-bs-toggle="modal" data-bs-target="#characterModal${character.id}" style="cursor: pointer;">
            <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">
                    <i class="fas fa-globe homeworld-icon"></i>
                    Memleket: ${character.homeworld || 'Unknown'}
                </p>
            </div>
        </div>
    </div>

    <!-- Karakter Modal -->
    <div class="modal fade" id="characterModal${character.id}" tabindex="-1" aria-labelledby="characterModalLabel${character.id}" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="characterModalLabel${character.id}">${character.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${character.pic}" class="img-fluid rounded" alt="${character.name}">
                        </div>
                        <div class="col-md-6">
                            <h6 class="mb-3">Memleket: ${character.homeworld}</h6>
                            <p>${character.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// Karakterleri gösterme fonksiyonu
function renderCharacters() {
    // Her karakter için template'i kullanarak HTML oluştur
    const cardsHTML = characters.map(character => characterCardTemplate(character)).join('');
    
    // Oluşturulan HTML'i container'a ekle
    charactersContainer.innerHTML = cardsHTML;

    // Butonu "Gizle" moduna çevir
    toggleButton.innerHTML = '<i class="fas fa-eye-slash me-2"></i>Karakterleri Gizle';
    toggleButton.classList.remove('btn-success');
    toggleButton.classList.add('btn-primary');
    
    // Butona tıklama olayını removeCharacters fonksiyonuna bağla
    toggleButton.onclick = removeCharacters;
}

// Karakterleri kaldırma fonksiyonu
function removeCharacters() {
    // Tüm kartları temizle
    charactersContainer.innerHTML = '';
    
    // Butonu "Göster" moduna çevir
    toggleButton.innerHTML = '<i class="fas fa-users me-2"></i>Karakterleri Göster';
    toggleButton.classList.remove('btn-danger');
    toggleButton.classList.add('btn-primary');
    
    // Butona tıklama olayını renderCharacters fonksiyonuna bağla
    toggleButton.onclick = renderCharacters;
}

// İlk yüklenmede butona tıklama olayını renderCharacters fonksiyonuna bağla
toggleButton.onclick = renderCharacters;
