import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";


function HomePage({ events }) {
  return (
    <>
      <Head>
      
        <title>The Next.js Events Project</title>
        <meta
          name="discription"
          content="Find a lot of great events that allow you to envolve..."
        />
      </Head>
      <EventList items={events} />
    </>
  );
}

export async function getStaticaProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    events: featuredEvents,
    revalidate: 1800,
  };
}

export default HomePage;
