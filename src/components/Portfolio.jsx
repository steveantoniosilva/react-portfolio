import '../css-components/Portfolio.css';

export default function Portfolio() {
  const quote =
    '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do." - - Steve Jobs';

  const quoteToArray = quote.split(' ');
  const map = quoteToArray.map((word, index) => (
    <span key={index}>{word}</span>
  ));
  return (
    <div className='portfolio'>
      <h1>{map}</h1>
    </div>
  );
}
