import chef from "../../img/96dc1ade-d0d3-41c6-b00f-89adb43aa9d7.webp";
import "./About.css";

const About = () => {
  return (
    <div className="aboutcontainer">
      <div className="aboutcontent">
        <img className="aboutimg" src={chef} alt="" />
        <p className="about">
          1997 İstanbul doğumlu şef adayı Nisa Nur Kılıç. Şişli Meslek Yüksek
          Okulu Mimari Restorasyon mezunudur. Yemek yapma tutkusu mesleğinin
          önüne geçince 2022 Maltepe Mutfak Sanatları Okulunda Aşçı Çırakı
          eğitimi alıp ,2023 Mutfak Sanatları Akademisinde Uzun Dönem
          Profesyonel Aşçılık eğitimini aldıktan sonra mutfağa giriş yaptı.
        </p>
      </div>
    </div>
  );
};

export default About;
