function Dashboard() {
  const staff = localStorage.getItem("staff_name");

  return (
    <section className="h-screen flex justify-center items-center bg-zinc-950 text-zinc-100">
      <div className="text-center">
        <h1 className="text-2xl">Welcome {staff}!</h1>
      </div>
    </section>
  );
}

export default Dashboard;
