import { useBookings } from "../hooks/useBookings";
import BookingList from "../components/BookingList";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function StaffDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const staff =
    localStorage.getItem("staff_name") || sessionStorage.getItem("staff_name");

  const { bookings, setBookings, loading, error } = useBookings();

  function handleLogOut() {
    logout();
    navigate("/staff-login");
  }

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Welcome back, {staff}</h1>
          <button
            onClick={handleLogOut}
            className="cursor-pointer border px-2 py-1 mt-3 text-purple-400 uppercase font-bold hover:text-purple-500 hover:bg-white duration-150 transition-all"
          >
            Log out
          </button>

          <p className="mt-2 text-zinc-400">
            Manage customer bookings and update their status.
          </p>
        </header>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Bookings</h2>

          <div className="bg-zinc-900 border-zinc-800 rounded-lg px-4 py-2">
            <span className="text-purple-400 font-semibold">
              {bookings.length}
            </span>{" "}
            Total Bookings
          </div>
        </div>
        <BookingList bookings={bookings} setBookings={setBookings} />
      </div>
    </main>
  );
}

export default StaffDashboard;
