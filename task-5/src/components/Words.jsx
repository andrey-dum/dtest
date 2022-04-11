
export const Words = ({ words }) => {

    if (words.length <= 0) {
        return (
            <div className="w-full flex justify-center mt-10 text-gray-100 font-extrabold text-6xl">
                Data not found
            </div>
        )
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-8 pb-16">
        {words.map((word) => (
            <div
                key={word}
                className="w-full  h-16 px-8 text-center shadow-sm rounded-md flex items-center border justify-center"
            
            >
                {word}
          </div>
        ))}
      </div>
    );
};
  