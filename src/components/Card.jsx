function Card({ children }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      {children}
    </div>
  );
}

export default Card;