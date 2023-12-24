import EventItems from "./event-items";
import classes from "./event-list.module.css";
import propTypes from "prop-types";

 const EventList = ({items}) => {
  return (
    <ul className={classes.list}>
      {items?.map((event) => (
        <EventItems
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

EventList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      description: propTypes.string,
      location: propTypes.string,
      date: propTypes.string,
      image: propTypes.string,
      isFeatured: propTypes.bool,
    })
  ),
};

export default EventList;
