import { useBookings } from "../hooks/useBookings";
import BookingList from "../components/BookingList";

function StaffDashboard() {
  const staff = localStorage.getItem("staff_name");
  const { bookings, loading, error } = useBookings();

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="h-screen flex justify-center items-center bg-zinc-950 text-zinc-100">
      <div className="text-center">
        <h1 className="text-2xl">Welcome {staff}!</h1>

        <BookingList bookings={bookings} />
      </div>
    </section>
  );
}

export default StaffDashboard;
