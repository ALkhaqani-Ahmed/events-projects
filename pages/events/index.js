import { getAllEvents } from "../../data/dummy-data";
import EvenetSearch from "../../components/events/events-search";
import  EventList  from "../../components/events/event-list";


const AllEventsPage = () => {

  const eventsItems= getAllEvents();

  return (
    <>
      <EventList items = {eventsItems} />
      <EvenetSearch />
    </>
  );
};

export default AllEventsPage;
