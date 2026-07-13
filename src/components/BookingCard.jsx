function BookingCard({ customerName, phone, date, time, service, status }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg mt-4">
      <h2 className="text-xl">{customerName}</h2>
      <p>Phone: {phone}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Service: {service}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default BookingCard;
