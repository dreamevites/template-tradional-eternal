import BannerSection from "./sections/banner/banner";
import CountDownSection from "./sections/count_down/count_down";
import EventsSection from "./sections/events/events";
import JourneySection from "./sections/journey/journey";

const HomeScreen = () => {
  return (
    <div>
      <BannerSection />
      <CountDownSection />
      <JourneySection />
      <EventsSection />
    </div>
  );
};

export default HomeScreen;
