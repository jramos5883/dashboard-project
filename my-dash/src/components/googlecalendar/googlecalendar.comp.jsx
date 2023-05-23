import "./googlecalendar.styles.css";

const GoogleCalendar = () => {
  return (
    <div className="google-calendar-container container-fluid">
      <h1>Google Calendar!</h1>
      Need to access OAuth Token for permissions to user calendar data.
      {/* <iframe
        title="User's Google Calendar"
        src="https://calendar.google.com/calendar/embed?src=jrprodev%40gmail.com&ctz=America%2FLos_Angeles"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe> */}
    </div>
  );
};

export default GoogleCalendar;
