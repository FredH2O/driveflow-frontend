export function ApiTest() {
  async function testApi() {
    const response = await fetch(
      "http://driveflow-backend.local/wp-json/driveflow/v1/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Fred",
          service: "Oil Change",
          date: "2026-07-01",
          time: "10:00",
        }),
      },
    );

    const data = await response.json();
    console.log(data);
  }

  return (
    <button
      onClick={testApi}
      className="border p-3 active:bg-red-500 bg-red-700 cursor-pointer"
    >
      Test API
    </button>
  );
}
