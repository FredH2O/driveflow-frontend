import BookingCard from "./BookingCard";

function BookingList({ bookings, setBookings }) {
  // call api
  async function handleStatusChange(id, newStatus) {
    console.log("Booking:", id);
    console.log("New status:", newStatus);

    setBookings((previousBookings) =>
      previousBookings.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              acf: {
                ...booking.acf,
                booking_status: newStatus,
              },
            }
          : booking,
      ),
    );

    try {
      const response = await fetch(
        `http://driveflow-backend.local/wp-json/driveflow/v1/bookings/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        },
      );

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
