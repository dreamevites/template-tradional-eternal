import React from "react";
import { Image } from "react-bootstrap";
import styles from "./events.module.scss";
import SectionHeading from "@/components/common/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import Link from "next/link";
import { GeoAlt, GeoAltFill } from "react-bootstrap-icons";

const weddingEvents = [
  {
    title: "Mehendi Ceremony",
    date: "July 22, 2026",
    time: "4:00 PM",
    venue: "Lotus Banquet Hall",
    description:
      "An evening filled with beautiful henna designs, music, laughter, and vibrant traditions as we begin our wedding celebrations.",
    icon: "/assets/star_Icon_1.svg",
  },

  {
    title: "Wedding Ceremony",
    date: "July 24, 2026",
    time: "10:30 AM",
    venue: "Shree Mahal Wedding Hall",
    description:
      "The sacred union of two souls as we exchange vows and begin our journey together with the blessings of our loved ones.",
    icon: "/assets/star_Icon_1.svg",
  },
  {
    title: "Reception",
    date: "July 24, 2026",
    time: "7:00 PM",
    venue: "Grand Ballroom",
    description:
      "Join with us for an evening full of celebration, dinner, and joy as we celebrate our new beginning with all our friends and family.",
    icon: "/assets/star_Icon_1.svg",
  },
];

const EventsSection = () => {
  return (
    <section className={styles.EventsSection}>
      <Image
        src="/assets/floral_1.svg"
        alt="floral"
        className={styles.floralTop}
        // data-aos="fade-down"
      />
      <Image
        src="/assets/floral_2.svg"
        alt="floral"
        className={styles.floralBottom}
        // data-aos="fade-up"
      />
      <CustomContainer>
        <SectionHeading
          title={"Celebration of Love"}
          head={"The Wedding Events"}
          caption={
            "We are thrilled to welcome you to our traditional festivities as we begin our new life together."
          }
          variant={3}
        />

        <div className={styles.eventsGrid}>
          {weddingEvents.map((event, index) => (
            <div key={index} className={styles.eventCard} data-aos="zoom-in">
              <div className={styles.iconWrapper}>
                <Image
                  src={event.icon}
                  alt={event.title}
                  width={35}
                  height={35}
                />
              </div>
              <h3 className={FONTS.font4}>{event.title}</h3>
              <div className={styles.dateTime}>
                <span>{event.date}</span>
                <span className={styles.separator}>|</span>
                <span>{event.time}</span>
              </div>
              <p className={styles.venue}>{event.venue}</p>
              <div className={styles.divider}></div>
              <p className={styles.description}>{event.description}</p>

              <Link href={"/"}>
                Get Location <GeoAltFill />
              </Link>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default EventsSection;
