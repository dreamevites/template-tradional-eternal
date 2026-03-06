import React, { useEffect, useState } from "react";
import styles from "./count_down.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import FONTS from "@/styles/fonts";

const CountDownSection = () => {
  const weddingDate = new Date("2026-07-24T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        Days: days,
        Hours: hours,
        Minutes: minutes,
        Seconds: seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.CountDownSection}>
      <SectionHeading title={"Count Down"} head={"We Will Be Married In"} />

      <CustomContainer>
        <div className={styles.wrap}>
          {Object.entries(timeLeft).map(([name, count], i) => (
            <div
              className={styles.CountDownIem}
              key={name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <p className={FONTS.font3}>{count}</p>
              <small>{name}</small>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default CountDownSection;
