import BookingCard from "./BookingCard";

function BookingList({ bookings }) {
  function handleStatusChange(id, newStatus) {
    console.log("Booking:", id);
    console.log("New status:", newStatus);
  }

  return (
    <section>
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          id={booking.id}
          customerName={booking.acf.customer_name}
          phone={booking.acf.phone_number}
          date={booking.acf.booking_date}
          time={booking.acf.booking_time}
          service={booking.acf.service}
          status={booking.acf.booking_status}
          onStatusChange={handleStatusChange}
        />
      ))}
    </section>
  );
}

export default BookingList;
