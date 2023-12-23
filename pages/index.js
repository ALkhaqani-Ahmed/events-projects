import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
    const filteredEvents = getFeaturedEvents();
    return (
        <>
            <EventList items={filteredEvents}/>
        </>
    )
}

export default HomePage;