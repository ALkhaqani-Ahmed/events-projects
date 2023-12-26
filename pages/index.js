import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";

function HomePage({ events }) {
  return (
    <>
      <Head>
        <title>The Next.js Events </title>
        <meta
          name="discription"
          content="Find a lot of great events that allow you to envolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },

    revalidate: 1800,
  };
}

export default HomePage;
