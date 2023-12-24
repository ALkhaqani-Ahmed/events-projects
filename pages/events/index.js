import { getAllEvents } from "../../helpers/api-util";
import EvenetSearch from "../../components/events/events-search";
import EventList from "../../components/events/event-list";
import { useRouter } from "next/router";

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <EvenetSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export async function getStaticaProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60
  };
}

export default AllEventsPage;
