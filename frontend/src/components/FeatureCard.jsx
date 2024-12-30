function FeatureCard({ title, description }) {
  return (
    <div className="text-text-light text-center sm:text-left transition-transform transform hover:scale-105">
      <h3 className="font-semibold text-xl sm:text-2xl mb-2">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}

export default FeatureCard;
