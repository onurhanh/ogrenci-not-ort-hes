function hesaplaNot(grades) {
    const toplam = grades.reduce((sum, not) => sum + not, 0);

    const ortalama = toplam / grades.length;

    let harfNotu;
    if(ortalama >=90) harfNotu = "A";
    else if(ortalama >= 80) harfNotu = "B";
    else if(ortalama >= 70) harfNotu = "C";
    else if(ortalama >= 60) harfNotu = "D";
    else harfNotu = "F";

    return { ortalama, harfNotu};
}

const notlar = [80,86,70,40,55];
const sonuc = hesaplaNot(notlar);
console.log(sonuc);
