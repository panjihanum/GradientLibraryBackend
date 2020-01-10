'use strict'

/*
|--------------------------------------------------------------------------
| DummySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Author = use('App/Models/Author')
const Category = use('App/Models/Category')
const City = use('App/Models/City')
const Discussion = use('App/Models/Discussion')
const Ebook = use('App/Models/Ebook')
const Filter = use('App/Models/Filter')
const Gender = use('App/Models/Gender')
const Picture = use('App/Models/Picture')
const Profile = use('App/Models/Profile')
const Province = use('App/Models/Province')
const Publisher = use('App/Models/Publisher')
const Reply = use('App/Models/Reply')
const School = use('App/Models/School')
const Suggestion = use('App/Models/Suggestion')
const User = use('App/Models/User')

class DummySeeder {
  async run () {
    const user1 = new User();
    user1.username = "panji";
    user1.email = "pan.hanum@gmail.com";
    user1.password = "panji";
    user1.phone_num = "082113589617";
    user1.level = 1;
    await user1.save()


    const user2 = new User();
    user2.username = "panjihanum";
    user2.email = "panhanum@gmail.com";
    user2.password = "panji";
    user2.phone_num = "082113589615";
    user2.level= 2;
    await user2.save()

    const user3 = new User();
    user3.username = "hanum";
    user3.email = "hanum@gmail.com";
    user3.password = "panji";
    user3.phone_num = "082113589614";
    user3.level= 3;
    await user3.save()

    const sugges1 = new Suggestion();
    sugges1.message = "Test Message";
    sugges1.user_id = 3;
    sugges1.file = "";
    sugges1.picture = "";
    await sugges1.save()

    const sugges2 = new Suggestion();
    sugges2.message = "Test Message 2";
    sugges2.user_id = 3;
    sugges2.file = "";
    sugges2.picture = "";
    await sugges2.save()

    const sugges3 = new Suggestion();
    sugges3.message = "Test Message 3";
    sugges3.user_id = 3;
    sugges3.file = "";
    sugges3.picture = "";
    await sugges3.save()

    const school1 = new School();
    school1.school = "---Other---";
    await school1.save()

    const school2 = new School();
    school2.school = "SMK DINAMIKA PEMBANGUNAN";
    await school2.save()

    const school3 = new School();
    school3.school = "SMK DINAMIKA PEMBANGUNAN 2";
    await school3.save()

    const school4 = new School();
    school4.school = "SMK MALAKA";
    await school4.save()

    const gen1 = new Gender();
    gen1.gender = "Laki - Laki";
    await gen1.save()

    const gen2 = new Gender();
    gen2.gender = "Perempuan";
    await gen2.save()

    const prov1 = new Province();
    prov1.province = "DKI JAKARTA";
    await prov1.save()

    const prov2 = new Province();
    prov2.province = "JAWA TENGAH";
    await prov2.save()

    const city1 = new City();
    city1.city = "Jakarta Timur";
    city1.province_id = 1;
    await city1.save();
    
    const city2 = new City();
    city2.city = "Jakarta Pusat";
    city2.province_id = 1;
    await city2.save();

    const city3 = new City();
    city3.city = "Jawa Tengah";
    city3.province_id = 1;
    await city3.save();

    const city4 = new City();
    city4.city = "Jawa Timur";
    city4.province_id = 1;
    await city4.save();

    const author1 = new Author();
    author1.author = "---Other---";
    await author1.save();

    const author2 = new Author();
    author2.author = "Ustadz Abu Khaleed";
    await author2.save();

    const author3 = new Author();
    author3.author = "Nor Kandir";
    await author3.save();

    const author4 = new Author();
    author4.author = "Noval Agung";
    await author4.save();

    const publ1 = new Publisher();
    publ1.publisher = "---Other---";
    await publ1.save();

    const publ2 = new Publisher();
    publ2.publisher = "Pustaka Syabab";
    await publ2.save();

    const publ3 = new Publisher();
    publ3.publisher = "Noval Agung";
    await publ3.save();

    const cat1 = new Category();
    cat1.category = "---Other---";
    cat1.picture = "Other.jpg";
    await cat1.save()

    const cat2 = new Category();
    cat2.category = "Agama";
    cat2.picture = "agama.jpg";
    await cat2.save()

    const cat3 = new Category();
    cat3.category = "Programming";
    cat3.picture = "programming.jpg";
    await cat3.save()

    const cat4 = new Category();
    cat4.category = "Resep Makanan dan Minuman";
    cat4.picture = "resepmakanan.jpg";
    await cat4.save()

    const cat5 = new Category();
    cat5.category = "Ilmu Pengetahuan";
    cat5.picture = "ilmupengetahuan.jpg";
    await cat5.save()

    const cat6 = new Category();
    cat6.category = "Bahasa";
    cat6.picture = "bahasa.jpg";
    await cat6.save()

    const fil1 = new Filter();
    fil1.filter = "---Other---";
    fil1.category_id=1,
    fil1.picture="Other.jpg"
    await fil1.save();


    const fil3 = new Filter();
    fil3.filter = "Islam";
    fil3.category_id = 2,
    fil3.picture="islam.jpg"
    await fil3.save();

    const fil4 = new Filter();
    fil4.filter = "GOLANG";
    fil4.category_id = 3,
    fil4.picture="golang.jpg"
    await fil4.save();

    const fil5 = new Filter();
    fil5.filter = "Makanan";
    fil5.category_id = 4,
    fil5.picture="makanan.jpg"
    await fil5.save();

    const fil6 = new Filter();
    fil6.filter = "Minuman";
    fil6.category_id = 4,
    fil6.picture="minuman.jpg"
    await fil6.save();

    const fil7 = new Filter();
    fil7.filter = "Kristen";
    fil7.category_id = 2,
    fil7.picture="kristen.jpg"
    await fil7.save();

    const ebook1 = new Ebook();
    ebook1.user_id = 1;
    ebook1.filter_id = 2;
    ebook1.description = "Buku";
    ebook1.title = "SYARAH RINGKAS AL-MANZHUUMAH AL-BAIQUUNIYYAH";
    ebook1.author_id = 2,
    ebook1.publisher_id = 1,
    ebook1.file = "syarh-ringkas-al-mandzumah-al-baiquniyyah_abu-khaleed.pdf";
    await ebook1.save();

    const ebook2 = new Ebook();
    ebook2.user_id = 1;
    ebook2.filter_id = 2;
    ebook2.description = "Buku";
    ebook2.title = "Syarah Ringkas Manzhumah Al-Baiquniyah";
    ebook2.author_id = 3,
    ebook2.publisher_id = 2,
    ebook2.file = "syarah-ringkas-manzhumah-al-baiquniyyah.pdf";
    await ebook2.save();

    const ebook4 = new Ebook();
    ebook4.user_id = 1;
    ebook4.filter_id = 2;
    ebook4.description = "Buku";
    ebook4.title = "Manzhumah Al-Baiquniyyah: Matan dan Terjemah";
    ebook4.author_id = 1,
    ebook4.publisher_id = 2,
    ebook4.file = "manzhumah-baiquniyah-matan-dan-terjemah.pdf";
    await ebook4.save();

    const ebook5 = new Ebook();
    ebook5.user_id = 1;
    ebook5.filter_id = 3;
    ebook5.description = "Buku";
    ebook5.title = "Dasar Pemrograman GOLANG";
    ebook5.author_id = 3,
    ebook5.publisher_id = 3,
    ebook5.file = "dasarpemrogramangolang.pdf";
    await ebook5.save();

    const ebook6 = new Ebook();
    ebook6.user_id = 1;
    ebook6.filter_id = 4;
    ebook6.description = "Buku";
    ebook6.title = "Selera Santai di Waroeng";
    ebook6.author_id = 1,
    ebook6.publisher_id = 1,
    ebook6.file = "Kumpulan_Resep_Masakanresep3.pdf";
    await ebook6.save();

    const profile =  new Profile();
    profile.user_id = 1,
    profile.full_name = "Panji Hanum",
    profile.address = "JL. Kp. Rawa Badung rt.04/13 no.33",
    profile.city_id = 1,
    // profile.birth_of_data = "2001-09-23"
    profile.gender_id = 1,
    profile.school_id = 3,
    profile.picture = "panjihanum.jpg",
    await profile.save();

    const pict1 = new Picture();
    pict1.picture="syarahringkas1.jpg";
    pict1.ebook_id=1
    await pict1.save()

    const pict2 = new Picture();
    pict2.picture="syarahringkas2.jpg";
    pict2.ebook_id=1
    await pict2.save()

    const pict3 = new Picture();
    pict3.picture="syarahringkas3.jpg";
    pict3.ebook_id=2
    await pict3.save()

    const pict4 = new Picture();
    pict4.picture="manzhumah.jpg";
    pict4.ebook_id=3
    await pict4.save()

    const pict5 = new Picture();
    pict5.picture="golang.jpg";
    pict5.ebook_id=4
    await pict5.save()

    const pict6 = new Picture();
    pict6.picture="resep.jpg";
    pict6.ebook_id=5
    await pict6.save()

  }
}

module.exports = DummySeeder
