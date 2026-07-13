function BookingCard({
  id,
  customerName,
  phone,
  date,
  time,
  service,
  status,
  onStatusChange,
}) {
  function handleStatusChange(event) {
    const newStatus = event.target.value;

    onStatusChange(id, newStatus);
  }

  return (
    <div className="bg-zinc-900 p-4 rounded-lg mt-4">
      <h2 className="text-xl">{customerName}</h2>
      <p>📞 Phone: {phone}</p>
      <p>📅 Date: {date}</p>
      <p>⏰ Time: {time}</p>
      <p>🔧 Service: {service}</p>

      <label>Status:</label>

      <select onChange={handleStatusChange} value={status}>
        <option value="pending">Pending</option>
        <option value="confirmed">Confirmed</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
}

export default BookingCard;
