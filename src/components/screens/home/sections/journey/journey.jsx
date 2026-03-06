import React from "react";
import { Image } from "react-bootstrap";
import styles from "./journey.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import SectionHeading from "@/components/common/section_heading/section_heading";

const milestones = [
  {
    title: "First Meeting",
    date: "October 12, 2021",
    description:
      "The moment our paths first crossed. What began as a simple meeting soon turned into countless conversations, laughter, and the beginning of something truly special.",
    image: "/images/journey_1.jpeg",
  },
  {
    title: "Engagement",
    date: "February 14, 2024",
    description:
      "With the blessings of our families and loved ones, we exchanged rings and promises for the future. A beautiful day that marked the start of our lifelong commitment.",
    image: "/images/journey_3.jpeg",
  },
  {
    title: "The Wedding",
    date: "July 24, 2026",
    description:
      "The day we unite our hearts and begin our journey as partners for life. Surrounded by family, friends, love, and traditions, we celebrate the start of forever together.",
    image: "/images/journey_4.jpeg",
  },
];

const JourneySection = () => {
  return (
    <section className={styles.JourneySection}>
      <CustomContainer>
        <SectionHeading
          head="Our Journey"
          caption={
            "A tapestry of moments woven with love, tradition, and golden dreams."
          }
          variant={2}
          title={"Our Journey"}
        />

        <div className={styles.timeline}>
          <div className={styles.line} data-aos="fade-in"></div>
          <Image
            src="/assets/corner_1.svg"
            alt="corner"
            className={styles.bot}
          />
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.milestone}>
              {/* Left Item */}
              <div className={styles.item}>
                {index % 2 === 0 ? (
                  <div className={styles.textSide} data-aos="fade-right">
                    <h3 className={FONTS.font4}>{milestone.title}</h3>
                    <span className={styles.date}>{milestone.date}</span>
                    <p>{milestone.description}</p>
                  </div>
                ) : (
                  <div className={styles.imageSide} data-aos="fade-right">
                    <div className={styles.imageWrapper}>
                      <Image
                        src={"/images/couple_1.jpeg"}
                        alt={milestone.title}
                        className={styles.journeyImg}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Center Dot */}
              <div className={styles.dot}>
                <div className={styles.iconBox} data-aos="zoom-in">
                  <Image
                    src="/assets/star_Icon_1.svg"
                    alt="icon"
                    height={25}
                    width={25}
                  />
                </div>
              </div>

              {/* Right Item */}
              <div className={styles.item}>
                {index % 2 !== 0 ? (
                  <div className={styles.textSide} data-aos="fade-left">
                    <h3 className={FONTS.font4}>{milestone.title}</h3>
                    <span className={styles.date}>{milestone.date}</span>
                    <p>{milestone.description}</p>
                  </div>
                ) : (
                  <div className={styles.imageSide} data-aos="fade-left">
                    <div className={styles.imageWrapper}>
                      <Image
                        src={"/images/couple_1.jpeg"}
                        alt={milestone.title}
                        className={styles.journeyImg}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default JourneySection;
