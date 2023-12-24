import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage({ events }) {
  return (
    <>
      <EventList items={events} />
    </>
  );
}

export async function getStaticaProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    events: featuredEvents,
    revalidate: 1800,
  }
}

export default HomePage;
