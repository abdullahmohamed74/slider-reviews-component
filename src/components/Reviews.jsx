import { useState } from 'react';
import Review from './Review';
import people from './data';

function Reviews() {
  const [index, setIndex] = useState(0);
  const person = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  const handleNextReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const handlePrevReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const handleRandomReview = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    // do not repeat the same review
    if (randomNum === index) randomNum = index + 1;
    setIndex(checkNumber(randomNum));
  };

  return (
    <main>
      <Review
        person={person}
        handlePrevReview={handlePrevReview}
        handleNextReview={handleNextReview}
        handleRandomReview={handleRandomReview}
      />
    </main>
  );
}
export default Reviews;
