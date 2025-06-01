import { FaUserAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Footer from "../components/footer";

export default function Reviews() {
  const reviews = [
    {
      author: "IlPianista",
      date: "2025-04-05",
      rating: 5,
      title: "Buon servizio",
      text: "Buon servizio, e disponibilità immediata.",
    },
    {
      author: "MrJaks Nayyar",
      date: "2025-04-05",
      rating: 5,
      title: "Servizio eccellente e disponibilitá...",
      text: "Servizio eccellente e disponibilitá immediata",
    },
    {
      author: "Bondable",
      date: "2025-04-05",
      rating: 5,
      title: "Cordiali e disponibilità immediata",
      text: "Cordiali e disponibilità immediata",
    },
    {
      author: "TG bhai",
      date: "2025-04-06",
      rating: 5,
      title: "is good I like it",
      text: "is good I like it",
    },
  ];

  reviews.sort((a, b) => b.rating - a.rating);

  const isSingleReview = reviews.length === 1;

  return (
    <div className="reviews-container min-h-screen flex flex-col px-6 py-12 text-white">
      <div className="flex items-center justify-center gap-3 mb-12">
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.3.0/favicons/favicon.ico"
          alt="Trustpilot Logo"
          className="w-12 h-12"
        />
        <h2 className="text-4xl font-bold text-center">Trustpilot Reviews</h2>
      </div>

      <div
        className={`reviews-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 ${
          isSingleReview ? "flex justify-center" : "justify-center"
        }`}
        style={{
          gridGap: "0",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="review-card max-w-xs w-full bg-gradient-to-r from-[#111827] to-[#111827] shadow-lg rounded-lg transform transition-all duration-300"
            style={{ margin: "0 25px" }}
          >
            <div className="card-header flex gap-2 p-4 bg-gray-800 rounded-t-lg">
              <FaUserAlt className="text-white text-xl" />
              <p className="text-xl font-semibold text-white">
                {review.author || "Anonymous"}
              </p>
            </div>
            <div className="card-body p-4 bg-gray-900 rounded-b-lg">
              <h3 className="text-lg font-semibold text-white mb-2">
                {review.title || "No Title"}
              </h3>
              <div className="flex items-center space-x-1 mb-2">
                {Array.from({ length: 5 }, (_, i) => {
                  if (i < review.rating) {
                    return <FaStar key={i} className="text-yellow-400" />;
                  } else if (
                    i === review.rating &&
                    !Number.isInteger(review.rating)
                  ) {
                    return (
                      <FaStarHalfAlt key={i} className="text-yellow-400" />
                    );
                  }
                  return <FaStar key={i} className="text-gray-400" />;
                })}
              </div>
              <p className="text-gray-300 text-sm">
                {review.text || "No review text provided."}
              </p>
              <p className="text-xs text-gray-500">
                {review.date || "No Date"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://ie.trustpilot.com/review/neko-cli.com"
          target="_blank"
          rel="noopener noreferrer"
          className="review-button text-white font-semibold text-lg py-3 px-6 rounded-full bg-gradient-to-r from-[#2473F5] to-[#2473F5] shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-[#2473F5] hover:to-[#2473F5]"
        >
          Write a Review
        </a>
      </div>

      {/* Footer */}
      <Footer className="mt-80" />
    </div>
  );
}
