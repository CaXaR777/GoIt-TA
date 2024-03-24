import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { deleteBooking } from "../../redux/CarCatalog/slice";
import { toast } from "react-toastify";

export const UserBookings = () => {
  const bookings = useSelector((state) => state.catalog.bookings);
  const dispatch = useDispatch();

  const handleDeleteBooking = (id) => {
    dispatch(deleteBooking(id));
    toast.success("Booking removed");
  };

  return (
    <div className="w-[360px] mr-[64px]">
      <h4 className="font-semibold text-xl text-[#101828] mb-[10px]">
        Your Bookings
      </h4>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li
              className="border border-[rgba(16, 24, 40, 0.2)] rounded-[20px] p-6 mb-6 relative"
              key={booking._id}
            >
              <p>Name: {booking.name}</p>
              <p>Booking Date: {booking.bookingDate}</p>
              {booking.comment && <p>Comment: {booking.comment}</p>}
              <button
                className="absolute top-[12px] right-[12px] text-red-600 bg-transparent border-none cursor-pointer focus:outline-none"
                onClick={() => handleDeleteBooking(booking._id)}
              >
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
