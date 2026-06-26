const ErrorState = ({
  onRetry,
  message = "Unable to load data. Please try again.",
  className = "",
}) => {
  return (
    <div className={`flex justify-center py-20 ${className}`}>
      <div className="text-center p-8 sm:p-12 border border-accent-red/30 rounded w-[90%] max-w-[400px]">
        <h3 className="text-accent-red text-xl mb-3 font-semibold">
          Connection Error
        </h3>
        <p className="text-text-secondary text-sm mb-6">{message}</p>
        <button
          onClick={onRetry}
          className="bg-transparent border border-primary text-primary px-8 py-3 rounded font-semibold uppercase tracking-[2px] text-sm hover:bg-primary hover:text-bg-primary transition-all duration-300 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorState;
