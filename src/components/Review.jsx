import { FaQuoteRight } from 'react-icons/fa';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';

function Review({
  person: { id, name, job, image, text },
  handlePrevReview,
  handleNextReview,
  handleRandomReview,
}) {
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="info">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button onClick={handlePrevReview} className="prev-btn">
          <GoChevronLeft />
        </button>
        <button onClick={handleNextReview} className="next-btn">
          <GoChevronRight />
        </button>
      </div>
      <button onClick={handleRandomReview} className="btn btn-btn-hipster">
        surprise me
      </button>
    </article>
  );
}
export default Review;
