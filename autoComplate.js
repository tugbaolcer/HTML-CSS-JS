let cities=[
    'Adana', 'Adıyaman', 'Afyonkarahisar',' Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin', 'Aydın', 'Balıkesir',
    'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır',
    'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay',
    'Isparta', 'İçel (Mersin)', 'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli',
    'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 
    'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas','Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 
    'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 
    'Kilis','Osmaniye', 'Düzce',];

const searchInput= document.getElementById('search');
const searchSearchBox= document.querySelector('.wrapper');
const searchResult=document.querySelector('.results');

searchInput.addEventListener('keyup',()=>{
    let results=[];
    let input=searchInput.value;
    if(input.length){
        results=cities.filter((item)=>{
            return item.toLowerCase().includes(input.toLowerCase());
        });
    }
    renderResults(results);
});

function renderResults(results){
    if(!results.length){
        return searchSearchBox.classList.remove('show')
    }

    let content=results
    .map((item)=>{
        return `<li>${item}</li>`;
    })
    .join('');

    searchSearchBox.classList.add('show');
    searchResult.innerHTML=`<ul>${content}</ul>`;;

}