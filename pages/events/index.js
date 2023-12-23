import { getAllEvents } from "../../data/dummy-data";
import EvenetSearch from "../../components/events/events-search";
import EventList from "../../components/events/event-list";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const router = useRouter();

  const eventsItems = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
       <EvenetSearch onSearch={findEventsHandler} />
      <EventList items={eventsItems} />
   
    </>
  );
};

export default AllEventsPage;
