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
    onStatusChange(id, event.target.value);
  }

  const statusColors = {
    pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    confirmed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg hover:border-purple-500/40 transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-white">{customerName}</h2>

          <p className="text-zinc-400 mt-1">📞 {phone}</p>
        </div>

        <span
          className={`px-3 py-1 ml-5 border text-sm font-medium capitalize ${statusColors[status]}`}
        >
          {status.toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 text-zinc-300">
        <div>
          <p className="text-zinc-500 text-sm">Date</p>
          <p>📅 {date}</p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">Time</p>
          <p>⏰ {time}</p>
        </div>

        <div className="col-span-2">
          <p className="text-zinc-500 text-sm">Service</p>
          <p>🔧 {service.charAt(0).toUpperCase() + service.slice(1)}</p>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm text-zinc-400 mb-2">
          Update Status
        </label>

        <select
          value={status}
          onChange={handleStatusChange}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
    </div>
  );
}

export default BookingCard;
