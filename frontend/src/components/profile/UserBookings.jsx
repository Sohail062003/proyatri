import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  IndianRupee,
  Clock,
  Filter,
  Search,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const UserBookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const bookings = [
    {
      id: "1",
      title: "Kashmir Paradise",
      location: "Srinagar, Kashmir",
      orderDate: "2024-01-15",
      executionDate: "2024-02-20",
      participantCount: 4,
      price: 25000,
      partialPayment: 10000,
      status: "confirmed",
    },
    {
      id: "2",
      title: "Kerala Backwaters",
      location: "Alleppey, Kerala",
      orderDate: "2024-01-10",
      executionDate: "2024-01-25",
      participantCount: 2,
      price: 18000,
      partialPayment: 18000,
      status: "completed",
    },
    {
      id: "3",
      title: "Rajasthan Heritage",
      location: "Jaipur, Rajasthan",
      orderDate: "2024-01-20",
      executionDate: "2024-03-15",
      participantCount: 6,
      price: 32000,
      partialPayment: 5000,
      status: "pending",
    },
  ];

  const getStatusColor = status => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch =
      booking.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600'>
      <div className='bg-green-600 text-white p-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <Avatar className='w-12 h-12 border-2 border-white'>
                <AvatarImage src='' />
                <AvatarFallback className='bg-white text-green-600 font-bold'>
                  A
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className='text-2xl font-bold'>8329321461</h1>
                <p className='text-green-200'>Welcome back, Avatar!</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <Button variant='ghost' className='text-white hover:bg-green-700'>
                Home •
              </Button>
              <Button variant='ghost' className='text-white hover:bg-green-700'>
                Dashboard •
              </Button>
              <Button
                variant='ghost'
                className='text-white hover:bg-green-700 font-semibold'
              >
                My Booking
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto p-6'>
        <Card className='shadow-2xl border-0 bg-white/95 backdrop-blur-sm'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <div>
                <CardTitle className='text-2xl font-bold text-gray-900'>
                  My Booking
                </CardTitle>
                <CardDescription className='text-lg mt-2'>
                  Booking Results
                </CardDescription>
                <p className='text-sm text-gray-600 mt-1'>
                  Showing {filteredBookings.length} entries
                </p>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                  <Input
                    placeholder='Search bookings...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className='pl-10 w-64'
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                >
                  <option value='all'>All Status</option>
                  <option value='confirmed'>Confirmed</option>
                  <option value='pending'>Pending</option>
                  <option value='completed'>Completed</option>
                  <option value='cancelled'>Cancelled</option>
                </select>
                <Button variant='outline' size='sm'>
                  <Filter className='w-4 h-4 mr-2' />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className='overflow-x-auto'>
              <Table>
                <TableHeader>
                  <TableRow className='bg-gray-50'>
                    <TableHead className='font-semibold'>Title</TableHead>
                    <TableHead className='font-semibold'>Location</TableHead>
                    <TableHead className='font-semibold'>Order Date</TableHead>
                    <TableHead className='font-semibold'>
                      Execution Date
                    </TableHead>
                    <TableHead className='font-semibold'>
                      Participant Count
                    </TableHead>
                    <TableHead className='font-semibold'>Price</TableHead>
                    <TableHead className='font-semibold'>
                      Partial Payment
                    </TableHead>
                    <TableHead className='font-semibold'>Status</TableHead>
                    <TableHead className='font-semibold'>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map(booking => (
                    <TableRow
                      key={booking.id}
                      className='hover:bg-gray-50 transition-colors'
                    >
                      <TableCell className='font-medium'>
                        <div className='flex items-center space-x-2'>
                          <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                            <MapPin className='w-5 h-5 text-green-600' />
                          </div>
                          <span>{booking.title}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center space-x-1 text-gray-600'>
                          <MapPin className='w-4 h-4' />
                          <span>{booking.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center space-x-1 text-gray-600'>
                          <Calendar className='w-4 h-4' />
                          <span>
                            {new Date(booking.orderDate).toLocaleDateString()}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center space-x-1 text-gray-600'>
                          <Clock className='w-4 h-4' />
                          <span>
                            {new Date(
                              booking.executionDate
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center space-x-1 text-gray-600'>
                          <Users className='w-4 h-4' />
                          <span>{booking.participantCount}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center space-x-1 text-gray-900 font-medium'>
                          <IndianRupee className='w-4 h-4' />
                          <span>{booking.price.toLocaleString()}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center space-x-1 text-gray-700'>
                          <IndianRupee className='w-4 h-4' />
                          <span>{booking.partialPayment.toLocaleString()}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          {booking.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className='flex space-x-2'>
                          <Button
                            size='sm'
                            variant='outline'
                            className='text-xs'
                          >
                            View
                          </Button>
                          {booking.status === "pending" && (
                            <Button
                              size='sm'
                              className='text-xs bg-green-500 hover:bg-green-600'
                            >
                              Pay
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredBookings.length === 0 && (
              <div className='text-center py-12'>
                <div className='w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center'>
                  <Calendar className='w-8 h-8 text-gray-400' />
                </div>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>
                  No bookings found
                </h3>
                <p className='text-gray-600'>
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserBookings;
