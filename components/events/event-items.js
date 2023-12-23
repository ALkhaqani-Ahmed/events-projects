import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-righ-icon";
import classes from "./event-item.module.css";

const  EventItems = ({title, image, date, location, id}) => {

  const humanReadableData = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAAdress = location.replace(", ", "/n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h1>{title}</h1>
          <div className={classes.data}>
            <DateIcon />
            <time>{humanReadableData}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAAdress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event </span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItems;
