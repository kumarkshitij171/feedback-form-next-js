const Star = ({ setRating, rating }) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div>
            <div className="flex ml-5 space-x-2 ">
                {stars.map((star) => (
                    <button
                        key={star}
                        className={`flex items-center text-3xl cursor-pointer mb-3 ${star <= rating ? 'text-yellow-500' : ''}`}
                        onClick={() => setRating(star)}
                    >
                        ★
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Star
