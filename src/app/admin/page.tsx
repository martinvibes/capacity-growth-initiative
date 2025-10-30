"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAdmin } from "@/context/AdminContextNew";
import { Event } from "@/types";

export default function AdminDashboard() {
  const router = useRouter();
  const {
    events,
    carouselImages,
    addEvent,
    deleteEvent,
    addCarouselImage,
    deleteCarouselImage,
  } = useAdmin();
  const [activeTab, setActiveTab] = useState<"events" | "carousel">("events");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const isAuthenticated = getCookie("admin_authenticated");
    if (!isAuthenticated) {
      router.push("/admin/login");
    }
  }, [router]);

  const [eventForm, setEventForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    locationType: "venue" as "zoom" | "facebook" | "venue",
    description: "",
    image: "",
  });

  // Carousel form state
  const [carouselForm, setCarouselForm] = useState({
    imageUrl: "",
  });

  // File upload refs
  const eventImageRef = useRef<HTMLInputElement>(null);
  const carouselImageRef = useRef<HTMLInputElement>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogout = () => {
    // Clear authentication cookies
    document.cookie =
      "admin_authenticated=; path=/; max-age=0; secure; samesite=strict";
    document.cookie =
      "admin_email=; path=/; max-age=0; secure; samesite=strict";
    router.push("/admin/login");
  };

  const handleEventImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setEventForm((prev) => ({ ...prev, image: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCarouselImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        // Resize image to exact carousel dimensions (450x450 for desktop center image)
        resizeImage(result, 450, 320).then((resizedImage) => {
          setCarouselForm({ imageUrl: resizedImage });
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date || !eventForm.image) {
      showToast("Please fill in all required fields");
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
    setEventForm({
      title: "",
      date: "",
      time: "",
      location: "",
      locationType: "venue",
      description: "",
      image: "",
    });
    if (eventImageRef.current) eventImageRef.current.value = "";
    showToast("Event added successfully!");
  };

  const handleDeleteEvent = async (id: string | undefined) => {
    if (!id) {
      console.error("Cannot delete event: No ID provided");
      showToast("Error: Missing event ID");
      return;
    }

    if (!confirm("Are you sure you want to delete this event?")) {
      return;
    }

    try {
      await deleteEvent(id);
      showToast("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      showToast("Failed to delete event. Please try again.");
    }
  };

  const handleAddCarouselImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!carouselForm.imageUrl) {
      showToast("Please select an image");
      return;
    }
    addCarouselImage({ imageUrl: carouselForm.imageUrl });
    setCarouselForm({ imageUrl: "" });
    if (carouselImageRef.current) carouselImageRef.current.value = "";
    showToast("Carousel image added successfully!");
  };

  const handleDeleteCarouselImage = (id?: string) => {
    if (!id) {
      console.error("Cannot delete carousel image: No ID provided");
      showToast("Error: Missing image ID");
      return;
    }
    deleteCarouselImage(id);
    showToast("Carousel image deleted successfully!");
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
            onClick={() => setActiveTab("events")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "events"
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab("carousel")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "carousel"
                ? "bg-[#019B83] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Advertisements
          </button>
        </div>

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="space-y-6">
            {/* Add Event Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={eventForm.title}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, title: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      value={eventForm.date}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, date: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <input
                      type="text"
                      value={eventForm.time}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, time: e.target.value })
                      }
                      placeholder="e.g., 11:00 AM - 12:00 PM"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location Type
                    </label>
                    <select
                      value={eventForm.locationType}
                      onChange={(e) =>
                        setEventForm({
                          ...eventForm,
                          locationType: e.target.value as
                            | "zoom"
                            | "facebook"
                            | "venue",
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="venue">Venue</option>
                      <option value="zoom">Zoom</option>
                      <option value="facebook">Facebook</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={eventForm.location}
                    onChange={(e) =>
                      setEventForm({ ...eventForm, location: e.target.value })
                    }
                    placeholder="e.g., New City Hall"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image *
                  </label>
                  <input
                    type="file"
                    ref={eventImageRef}
                    accept="image/*"
                    onChange={handleEventImageUpload}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  {eventForm.image && (
                    <Image
                      src={eventForm.image}
                      alt="Preview"
                      width={128}
                      height={128}
                      className="mt-2 w-32 h-32 object-cover rounded"
                    />
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
                {events.map((event: Event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-md"
                  >
                    <div className="flex items-center space-x-4">
                      {event.image ? (
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-gray-500 text-xs">No Image</span>
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                        {event.time && (
                          <p className="text-sm text-gray-600">{event.time}</p>
                        )}
                        {event.location && (
                          <p className="text-sm text-gray-600">
                            {event.location}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteEvent(event?.id);
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {events.length === 0 && (
                  <p className="text-gray-500 text-center py-8">
                    No events added yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Carousel Tab */}
        {activeTab === "carousel" && (
          <div className="space-y-6">
            {/* Add Carousel Image Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Add New Image</h2>
              <form onSubmit={handleAddCarouselImage} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image *
                  </label>
                  <input
                    type="file"
                    ref={carouselImageRef}
                    accept="image/*"
                    onChange={handleCarouselImageUpload}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  {carouselForm.imageUrl && (
                    <Image
                      src={carouselForm.imageUrl}
                      alt="Preview"
                      width={128}
                      height={128}
                      className="mt-2 w-32 h-32 object-cover rounded"
                    />
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
                >
                  Add Image
                </button>
              </form>
              {/* Carousel Images List */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {carouselImages.map(
                  (image: { id?: string; imageUrl: string }, index: number) => (
                    <div
                      key={`carousel-${image.id || index}`}
                      className="border border-gray-200 rounded-md p-4"
                    >
                      {image.imageUrl ? (
                        <Image
                          src={image.imageUrl}
                          alt={`Carousel ${index + 1}`}
                          width={320}
                          height={128}
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                      ) : (
                        <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">No Image</span>
                        </div>
                      )}
                      <button
                        onClick={() => handleDeleteCarouselImage(image.id)}
                        className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  )
                )}
                {carouselImages.length === 0 && (
                  <p className="text-gray-500 text-center py-8 col-span-full">
                    No adverts images added yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function resizeImage(
  src: string,
  targetWidth: number,
  targetHeight: number
): Promise<string> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      // Calculate scaling to maintain aspect ratio and cover the target area
      const scale = Math.max(
        targetWidth / img.width,
        targetHeight / img.height
      );
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      const x = (targetWidth - scaledWidth) / 2;
      const y = (targetHeight - scaledHeight) / 2;

      ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    img.src = src;
  });
}
