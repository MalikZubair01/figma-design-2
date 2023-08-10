import React from "react";

function Carousel() {
  return (
    <div className="bg-[rgba(47,48,58,1)] py-16 md:py-0 md:h-96 flex items-center justify-center bg-gray-900">
      <div className="mx-4 md:mx-0 md:w-[40%] text-center">
        <h4 className="text-white text-2xl font-semibold mb-4">
          Эффективные решения для вашего бизнеса
        </h4>
        <p className="text-gray-300">
          Мы предоставляем инновационные решения для вашего бизнеса, помогая вам
          достигнуть новых высот и успешно конкурировать на рынке.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Узнать больше
        </button>
      </div>
    </div>
  );
}

export default Carousel;
