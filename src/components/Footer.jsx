import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Sol Taraf: Teknolojik Yemekler ve İletişim */}
        <div className={styles.footerLeft}>
          <h2>Teknolojik Yemekler</h2>
          <p>
            <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Adres" />
            341 Londonderry Road, İstanbul Türkiye
          </p>
          <p>
            <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Email" />
            aciktim@teknolojikyemekler.com
          </p>
          <p>
            <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon" />
            +90 216 123 45 67
          </p>
        </div>

        {/* Orta Kısım: Hot Menu */}
        <div className={styles.footerCenter}>
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Burger</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        {/* Sağ Kısım: Instagram Fotoğrafları */}
        <div className={styles.footerRight}>
          <h3>Instagram</h3>
          <div className={styles.instagramGrid}>
            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="Food 1" />
            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="Food 2" />
            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="Food 3" />
            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="Food 4" />
            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="Food 5" />
            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="Food 6" />
          </div>
        </div>
      </div>

      {/* Alt Kısım: Telif Hakkı ve Sosyal Medya */}
      <div className={styles.footerBottom}>
        <p>© 2023 Teknolojik Yemekler.</p>
        <img src="/icons/twitter.svg" alt="Twitter" />
      </div>
    </footer>
  );
};

export default Footer;

