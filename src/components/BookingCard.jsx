function BookingCard({ customerName, date, time, service, status }) {
  return (
    <div>
      <h2>{customerName}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{service}</p>
      <p>{status}</p>
    </div>
  );
}

export default BookingCard;
