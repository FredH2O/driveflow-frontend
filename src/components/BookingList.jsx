import BookingCard from "./BookingCard";

function BookingList({ bookings }) {
  return (
    <section>
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          customerName={booking.customer_name}
          phone={booking.phone_number}
          date={booking.booking_date}
          time={booking.booking_time}
          service={booking.service}
          status={booking.booking_status}
        />
      ))}
    </section>
  );
}

export default BookingList;
