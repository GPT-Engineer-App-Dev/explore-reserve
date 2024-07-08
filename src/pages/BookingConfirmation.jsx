import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookingConfirmation = () => {
  const location = useLocation();
  const bookingDetails = location.state;

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Booking Confirmation</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Thank you for your booking!</p>
          <p>Here are your booking details:</p>
          <ul className="list-disc pl-5">
            <li>Departure: {bookingDetails.departure}</li>
            <li>Arrival: {bookingDetails.arrival}</li>
            <li>Departure Date: {bookingDetails.departureDate}</li>
            <li>Return Date: {bookingDetails.returnDate}</li>
            <li>Passengers: {bookingDetails.passengers}</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingConfirmation;