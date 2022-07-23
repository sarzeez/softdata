import React, { useEffect, useRef } from 'react'
import Aos from 'aos'

import './modal.css'
import Close from '../../../image/Modal/close.svg'
// import Icon1 from '../../../image/ServicePage//web_development.svg'
// import Icon2 from '../../../image/ServicePage/Graphic.svg'
// import Icon3 from '../../../image/ServicePage/android.svg'
// import Icon4 from '../../../image/ServicePage/crm.svg'
// import Icon5 from '../../../image/ServicePage/web_design.svg'
// import Desktop from '../../../image/ServicePage/Desktop.svg'

import Icon1 from '../../../image/ServicePage/aa/Vector.svg'
import Icon2 from '../../../image/ServicePage/aa/Graphic.svg'
import Icon3 from '../../../image/ServicePage/aa/Android.svg'
import Icon4 from '../../../image/ServicePage/aa/web_design.svg'
import Icon5 from '../../../image/ServicePage/aa/crm.svg'
import Desktop from '../../../image/ServicePage/aa/Desktop.svg'


export function Modal1({ setModalOpen, modalId }) {

    let menuRef = useRef()
    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)) {
                setModalOpen(false)
            }
        }
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    useEffect(() => {
        Aos.init({
            duration: 200,
        })
      }, [modalId])

    const modalData = [
        {
            title: 'Web saytlar',
            title2: `O'zbekiston bo'ylab professional veb-saytlarni ishlab chiqish`,
            subtitle_1: `
            Onlayn ariza shaklidan foydalaning yoki bizga qo'ng'iroq qiling, shunda biz sizning saytingiz barcha istak va ehtiyojlaringizni hisobga olgan holda yaratilishini ta'minlash uchun qo'limizdan kelganicha harakat qilamiz. Bizning maqsadimiz - original dizayn va noyob tarkibga ega, oson navigatsiya va sodda interfeysga ega veb-saytlarni ishlab chiqish, bu erda ma'lumotlar sahifalar va bo'limlar bo'yicha aniq tuzilgan.`,
            subtitle_2: `Mutaxassislarimiz sa'y-harakatlari bilan veb-saytlarni ishlab chiqish 3 ta eng muhim vazifalarni hal qilishni o'z ichiga oladi:

            1. Siz o'zingizni Internetda tanitasiz: iste'molchilar va sheriklar sizni ko'rish orqali taniydilar.
            1. Siz taklif etilayotgan tovarlar / xizmatlarga talabni rag'batlantirasiz.
            1. Siz maqsadli sayt tashrif buyuruvchilariga xizmatlar ko'rsatish muammosini hal qilasiz.
            Sizning maqsadlaringiz va maqsadlaringizga eng mos keladigan veb-saytlarni ishlab chiqish to'plamini tanlashingizni tavsiya qilamiz. Qaysi variantni afzal ko'rsangiz, bizning mutaxassislarimiz veb-saytlarni ishlab chiqish biznes samaradorligini oshirishi va sotishni ko'payishiga kafolat beradi. Veb-saytlarni ishlab chiqishda professional kompleks yondashuv sizning biznesingizning kelgusi yillar davomida muvaffaqiyatli ishlashini ta'minlaydi.`,
            img: Icon1
        },
        {
            title: 'Grafik dizayn',
            title2: '',
            subtitle_1: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
            subtitle_2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
            img: Icon2
        },
        {
            title: 'Android dastur',
            title2: 'Mobil ilovalarni ishlab chiqish',
            subtitle_1: `"SoftData" jamoasi manfaatdor tomonlarning e'tiboriga mobil ilovalarni ishlab chiqish bo'yicha professional xizmatni taqdim etadi, bu zamonaviy mobil qurilmalar (smartfon, PDA, planshet) uchun beqiyos sifatli dasturiy mahsulotni yaratishdir. Mobil ilovalar har qanday faoliyat sohasidagi o'zgarishlarga zudlik bilan munosabat bildirishga va o'z vaqtida ma'lumot olishga odatlangan har bir inson uchun dolzarb ehtiyojdir.`,
            subtitle_2: `Android, iPad, iPhone uchun mobil ilovalarni ishlab chiqish: tezkor, professional, nisbatan arzon
            Hayotning tez sur'ati bizni ulkan ma'lumot oqimining tashlanishiga olib keladi, bu jismonan o'rganish mumkin emas. Agar siz o'zingizning biznesingizni davom ettirish va uning muvaffaqiyatli rivojlanishini ta'minlashni orzu qilsangiz, u holda mobil ilovalarni ishlab chiqish xizmati siz uchun.
            Bugungi kunda iPhone, iPad, Android uchun dasturlarni ishlab chiqish allaqachon ishonchli va samarali marketing vositasi maqomiga ega bo'lib, kompaniya veb-saytini yaratish bilan bir qatorda. Ilovalarning modifikatsiyalari va xilma-xilligi nafaqat biznes sohasida, balki menejment va shaxsiy hayotda ham turli xil murakkablikdagi muammolarni tez, aniq va malakali echishga imkon beradi.
            Nima uchun Android, iPad, iPhone uchun mobil ilovalarni ishlab chiqishga buyurtma berishingiz kerak?
            
            * moliyaviy o'sishning ortishi;
            * moliyaviy investitsiyalarni ishonchli boshqarish;
            * qulay navigatsiya tizimlari;
            * iste'molchilar ishonchini qozonish.`,
            img: Icon3
        },
        {
            title: 'Desktop dastur',
            title2: 'Desktop dasturining xususiyatlari:',
            subtitle_1: `* Ham onlayn, ham oflayn rejimda ishlash.
            Internetga ulangan va bo'lmagan holda avtonom ishlash.
            * Tez boshlash.
            Har doim u o'rnatilgan qurilmaning xotirasidan ma'lumotlarni yuklash bilan boshlanadi, har safar tarmoqdan parametrlarni yuklashni talab qilmaydi.
            * Javob beruvchi foydalanuvchi interfeysi.
            GDI, DirectX, OpenGL kabi operatsion tizim funktsiyalari va grafik kutubxonalariga kirish, kechikish va qotib qolmasdan boy interfeysga ega dasturlarni yaratishga imkon beradi.`,
            subtitle_2: `* Tez ish.
            Ko'p protsessorli tizimlar, to'g'ridan-to'g'ri xotira va fayl tizimi, mahalliy ma'lumotlar bazalari bilan ishlash qobiliyati tufayli maksimal ish samaradorligi.
            * Periferik qurilmalar bilan ishlash.
            Ish stoli ilovasi kompyuterga ulangan barcha qurilmalarga, xususiy haydovchilar orqali yoki past darajadagi shovqin yordamida - COM, LPT, Ethernet va boshqalarga kirish huquqiga ega.`,
            img: Desktop
        },
        {
            title: 'Web dizayn',
            title2: '',
            subtitle_1: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
            subtitle_2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
            img: Icon5
        },
        {
            title: 'CRM',
            title2: '',
            subtitle_1: `CRM tizimlarini ishlab chiqish aniq maqsadlar va biznesning aniq talablariga mos ravishda amalga oshiriladi. Dasturiy ta'minotni ishlab chiqish vaqti loyihaning individual xususiyatlariga bog'liq. CRM-ni ishlab chiqishda bizning ishtirokimiz bilan aniq va shaffof boshqaruv, ichki barqarorlik, barqaror o'zaro ta'sir va mijozlarga sodiqlikni shakllantirishga erishiladi.

            CRM nima uchun kerak? ${`\n`}
            
            Tizimlashtirish va sotishni boshqarish, agar mijozlarga qo'lda xizmat ko'rsatishga vaqtingiz yo'q bo'lsa.
            
            Har bir xaridor bilan "dan va" ga bo'lgan munosabatlar tarixini saqlash.`,
            subtitle_2: `Menejerlar va bo'limlar faoliyati samaradorligini nazorat qilish: ular qancha ish qilishadi va mijozlar bilan qanday munosabatda bo'lishadi.

            Ma'lumot yig'ish: kompaniya odatda qaysi bosqichda mijozlarini yo'qotadi va qancha potentsial mijozlar xaridor bo'lmadi.
            
            Mijozlarga xizmat ko'rsatish jarayonlarining tezkor va to'liq tahlillarini olish
            
            Mijozlarga xizmat ko'rsatishdagi bo'shliqlarni bartaraf etish va jarayonlarni soddalashtirish orqali savdo hajmini oshirish.`,
            img: Icon4 
            
        }
    ]

    return (
        <div className = "modal" >
            <img src = {Close} alt = 'close' onClick = {() => setModalOpen(false)}/>
            <div ref = {menuRef} style = {{background: `url(${modalData[modalId].img})`, backgroundRepeat: 'no-repeat', backgroundColor: '#353535', backgroundSize: '316px', backgroundPosition: '650px 120px'}} className = "modal_inner" data-aos = "zoom-out">
                <h2 className = "h_title modal_title"><span className = "green_text">{modalData[modalId].title.split(' ').slice(0, 1)}</span> {modalData[modalId].title.split(' ').slice(1)}</h2>
                <hr className = "green_line"></hr>
                <h3>{modalData[modalId].title2}</h3>
                <p>{modalData[modalId].subtitle_1}</p>
                <p>{modalData[modalId].subtitle_2}</p>
            </div>
        </div>
    )
}

