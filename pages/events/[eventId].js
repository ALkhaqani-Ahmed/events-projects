import { Fragment } from "react";
import Head from "next/head";

import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import ErrorAlert from "../../components/ui/error-alert";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage({ selectedEvent }) {
 

  if (!selectedEvent) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
         <Head>
        <title>{selectedEvent.title}</title>
        <meta
          name="discription"
          content={selectedEvent.description}
        />
      </Head>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        data={selectedEvent.data}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props:{
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const evenst = await getFeaturedEvents();
  const paths = evenst.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
}




export default EventDetailPage;
