export async function getAllEvents() {
  const response = await fetch(
    "https://events-project-6e39c-default-rtdb.firebaseio.com/e1/events/e1/evenst.json"
  );
  const data = await response.json();

  const evenst = [];

  for (const key in data) {
    evenst.push({
      id: key,
      ...data[key],
    });
  }

  return evenst;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
