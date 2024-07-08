import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";

const Index = () => {
  const [search, setSearch] = useState({
    destination: "",
    checkin: "",
    checkout: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gray-200">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[500px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <Input placeholder="Destination" name="destination" value={search.destination} onChange={handleInputChange} />
            <Input placeholder="Check-in" name="checkin" value={search.checkin} onChange={handleInputChange} />
            <Input placeholder="Check-out" name="checkout" value={search.checkout} onChange={handleInputChange} />
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Destination {item}</CardTitle>
                <CardDescription>Brief description of Destination {item}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Packages */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Featured Packages</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3].map((item) => (
              <CarouselItem key={item}>
                <Card>
                  <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                  <CardHeader>
                    <CardTitle>Package {item}</CardTitle>
                    <CardDescription>Price: ${item * 100}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>Book Now</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <Avatar className="mx-auto object-cover w-16 h-16" />
                <CardTitle>Customer {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;