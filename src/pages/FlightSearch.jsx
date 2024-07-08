import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePickerDemo } from "@/components/ui/date-picker";

const FlightSearch = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    departureDate: null,
    returnDate: null,
    passengers: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add API call or further processing here
    navigate("/booking-confirmation", { state: formData });
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Search Flights</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="departure">Departure Location</Label>
              <Input
                id="departure"
                name="departure"
                value={formData.departure}
                onChange={handleInputChange}
                placeholder="Enter departure location"
              />
            </div>
            <div>
              <Label htmlFor="arrival">Arrival Location</Label>
              <Input
                id="arrival"
                name="arrival"
                value={formData.arrival}
                onChange={handleInputChange}
                placeholder="Enter arrival location"
              />
            </div>
            <div>
              <Label htmlFor="departureDate">Departure Date</Label>
              <DatePickerDemo
                selected={formData.departureDate}
                onSelect={(date) => handleDateChange("departureDate", date)}
              />
            </div>
            <div>
              <Label htmlFor="returnDate">Return Date</Label>
              <DatePickerDemo
                selected={formData.returnDate}
                onSelect={(date) => handleDateChange("returnDate", date)}
              />
            </div>
            <div>
              <Label htmlFor="passengers">Number of Passengers</Label>
              <Select
                value={formData.passengers}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, passengers: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select number of passengers" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Search Flights</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlightSearch;