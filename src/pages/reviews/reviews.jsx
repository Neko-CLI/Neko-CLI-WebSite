import React, { useState, useEffect } from "react";
import { FaUserAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Card, CardBody, Button, Skeleton } from "@heroui/react";
import Footer from "../components/footer";

export default function Reviews() {
  const [loading, setLoading] = useState(true);
  const reviews = [
    {
      author: "PianistPro",
      date: "2025-04-05",
      rating: 5,
      title: "Great Service",
      text: "Excellent service and immediate availability.",
    },
    {
      author: "MrJaks Nayyar",
      date: "2025-04-05",
      rating: 5,
      title: "Outstanding Service and Availability...",
      text: "Outstanding service and immediate availability.",
    },
    {
      author: "Bondable",
      date: "2025-04-05",
      rating: 5,
      title: "Friendly and Immediately Available",
      text: "Friendly and immediately available.",
    },
    {
      author: "TG bhai",
      date: "2025-04-06",
      rating: 5,
      title: "Is good I like it",
      text: "Is good I like it",
    },
  ];

  reviews.sort((a, b) => b.rating - a.rating);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const SkeletonReviewCard = () => (
    <Card className="w-full h-full">
      <CardBody className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <Skeleton className="rounded-full w-10 h-10" />
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="h-4 w-3/4 rounded-lg" />
            <Skeleton className="h-3 w-1/2 rounded-lg" />
          </div>
        </div>
        <Skeleton className="h-6 w-11/12 rounded-lg mb-3" />
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-5 rounded-full" />
          ))}
        </div>
        <Skeleton className="h-3 w-full rounded-lg mb-2" />
        <Skeleton className="h-3 w-5/6 rounded-lg mb-2" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </CardBody>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {loading ? (
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="text-center mb-16 w-full">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Skeleton className="rounded-full w-16 h-16" />
              <Skeleton className="h-12 w-80 rounded-lg" />
            </div>
            <Skeleton className="h-6 w-2/3 mx-auto rounded-lg" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
            {Array.from({ length: reviews.length }).map((_, index) => (
              <SkeletonReviewCard key={index} />
            ))}
          </div>

          <Skeleton className="mt-16 h-12 w-64 rounded-full" />
        </div>
      ) : (
        <>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src="https://cdn.trustpilot.net/brand-assets/4.3.0/favicons/favicon.ico"
                alt="Trustpilot Logo"
                className="w-16 h-16"
              />
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 animate-gradient-pulse">
                Our Reviews
              </h1>
            </div>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 animate-fade-in-up">
              See what our customers say about our excellent service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="w-full h-full animate-pop-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardBody className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <FaUserAlt className="text-blue-400 text-3xl" />
                    <div>
                      <p className="text-xl font-semibold text-white">
                        {review.author || "Anonymous User"}
                      </p>
                      <p className="text-sm text-gray-400">
                        {review.date
                          ? new Date(review.date).toLocaleDateString("en-US")
                          : "Unknown Date"}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {review.title || "No Title"}
                  </h3>
                  <div className="flex items-center space-x-1 mb-4">
                    {Array.from({ length: 5 }, (_, i) => {
                      if (i < review.rating) {
                        return (
                          <FaStar key={i} className="text-yellow-400 text-lg" />
                        );
                      } else if (
                        i === Math.floor(review.rating) &&
                        !Number.isInteger(review.rating)
                      ) {
                        return (
                          <FaStarHalfAlt
                            key={i}
                            className="text-yellow-400 text-lg"
                          />
                        );
                      }
                      return (
                        <FaStar key={i} className="text-gray-600 text-lg" />
                      );
                    })}
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {review.text || "No review text provided."}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              color="primary"
              variant="solid"
              size="lg"
              as="a"
              href="https://ie.trustpilot.com/review/neko-cli.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Write a Review
              <svg
                className="ml-3 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </>
      )}

      <Footer className="mt-20 w-full" />
    </div>
  );
}