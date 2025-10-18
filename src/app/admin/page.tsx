'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';

export default function AdminDashboard() {
  const router = useRouter();
  const { events, carouselImages, addEvent, deleteEvent, addCarouselImage, deleteCarouselImage } = useAdmin();
  const [activeTab, setActiveTab] = useState<'events' | 'carousel'>('events');
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('admin_authenticated');
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [router]);

  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    locationType: 'venue' as "zoom" | "facebook" | "venue",
    description: '',
    image: '',
  });

  // Carousel form state
  const [carouselForm, setCarouselForm] = useState({
    imageUrl: '',
  });

  // File upload refs
  const eventImageRef = useRef<HTMLInputElement>(null);
  const carouselImageRef = useRef<HTMLInputElement>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    localStorage.removeItem('admin_email');
    router.push('/admin/login');
  };

  const handleEventImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setEventForm(prev => ({ ...prev, image: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCarouselImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setCarouselForm({ imageUrl: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date || !eventForm.image) {
      showToast('Please fill in all required fields');
      return;
    }
    addEvent({
      title: eventForm.title,
      date: eventForm.date,
      time: eventForm.time,
      location: eventForm.location,
      locationType: eventForm.locationType,
      description: eventForm.description,
      image: eventForm.image,
    });
    setEventForm({ title: '', date: '', time: '', location: '', locationType: 'venue', description: '', image: '' });
    if (eventImageRef.current) eventImageRef.current.value = '';
    showToast('Event added successfully!');
  };

  const handleDeleteEvent = (id: string) => {
    deleteEvent(id);
    showToast('Event deleted successfully!');
  };

  const handleAddCarouselImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!carouselForm.imageUrl) {
      showToast('Please select an image');
      return;
    }
    addCarouselImage({ imageUrl: carouselForm.imageUrl });
    setCarouselForm({ imageUrl: '' });
    if (carouselImageRef.current) carouselImageRef.current.value = '';
    showToast('Carousel image added successfully!');
  };

  const handleDeleteCarouselImage = (id: string) => {
    deleteCarouselImage(id);
    showToast('Carousel image deleted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Sign Out
          </button>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            {toast}
          </div>
        )}

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'events'
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab('carousel')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'carousel'
                ? 'bg-[#019B83] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
           Advertisements
          </button>
        </div>

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            {/* Add Event Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input
                      type="text"
                      value={eventForm.title}
                      onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                    <input
                      type="date"
                      value={eventForm.date}
                      onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <input
                      type="text"
                      value={eventForm.time}
                      onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                      placeholder="e.g., 11:00 AM - 12:00 PM"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location Type</label>
                    <select
                      value={eventForm.locationType}
                      onChange={(e) => setEventForm({ ...eventForm, locationType: e.target.value as "zoom" | "facebook" | "venue" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="venue">Venue</option>
                      <option value="zoom">Zoom</option>
                      <option value="facebook">Facebook</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={eventForm.location}
                    onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                    placeholder="e.g., New City Hall"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image *</label>
                  <input
                    type="file"
                    ref={eventImageRef}
                    accept="image/*"
                    onChange={handleEventImageUpload}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  {eventForm.image && (
                    <img src={eventForm.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
                >
                  Add Event
                </button>
              </form>
            </div>

            {/* Events List */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Manage Events</h2>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                    <div className="flex items-center space-x-4">
                      <img src={event.image} alt={event.title} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                        {event.time && <p className="text-sm text-gray-600">{event.time}</p>}
                        {event.location && <p className="text-sm text-gray-600">{event.location}</p>}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {events.length === 0 && (
                  <p className="text-gray-500 text-center py-8">No events added yet.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Carousel Tab */}
        {activeTab === 'carousel' && (
          <div className="space-y-6">
            {/* Add Carousel Image Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Add New Image</h2>
              <form onSubmit={handleAddCarouselImage} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image *</label>
                  <input
                    type="file"
                    ref={carouselImageRef}
                    accept="image/*"
                    onChange={handleCarouselImageUpload}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  {carouselForm.imageUrl && (
                    <img src={carouselForm.imageUrl} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
                >
                  Add Image
                </button>
              </form>
            </div>

            {/* Carousel Images List */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Manage Adverts Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {carouselImages.map((image) => (
                  <div key={image.id} className="border border-gray-200 rounded-md p-4">
                    <img src={image.imageUrl} alt="Carousel" className="w-full h-32 object-cover rounded mb-2" />
                    <button
                      onClick={() => handleDeleteCarouselImage(image.id)}
                      className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {carouselImages.length === 0 && (
                  <p className="text-gray-500 text-center py-8 col-span-full">No adverts images added yet.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
