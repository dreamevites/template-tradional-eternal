import { Image } from "react-bootstrap";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";

const BannerSection = () => {
  return (
    <section className={styles.BannerSection}>
      <Image
        src="/assets/floral_1.svg"
        fluid
        alt="floral"
        className={styles.floral1}
      />
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left} data-aos="fade-in">
            <Image
              src="/assets/floral_2.svg"
              alt="floral"
              className={styles.floral2}
            />
            <div className={styles.img}></div>
          </div>

          <div className={styles.right}>
            <h1 className={FONTS.font2} data-aos="fade-left">
              Rahul &
              <br />
              Paulina
            </h1>
            <p data-aos="zoom-in">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              facere voluptas nulla velit provident esse.
            </p>

            <span data-aos="fade-up">July 10, 2026 | Abc Mahal Chennai</span>

            <Image
              src="/assets/floral_1.svg"
              alt="floral"
              className={styles.floral3}
            />

            <Image
              src="/assets/floral_2.svg"
              alt="floral"
              className={styles.floral4}
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BannerSection;
