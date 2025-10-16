import React from 'react';

const Educational = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-[#140e24] via-[#41256f] to-[#340a4f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-semibold text-purple-300 text-center mb-10">Educational Background</h2>

                {/* Bachelor's Degree */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science and Engineering (CSE)</h3>
                    <p className="text-gray-600 mt-2">Currently pursuing at <span className="font-semibold text-purple-600">BUBT (Bangladesh University of Business and Technology)</span></p>
                    <p className="text-gray-500 mt-1">Current Semester: <span className="font-semibold text-purple-500">4</span></p>
                </div>

                {/* HSC */}
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-gray-600 mt-2">Completed from <span className="font-semibold text-purple-600">Saydabad Ideal Govt College and University</span></p>
                    <p className="text-gray-500 mt-1">Year: <span className="font-semibold text-purple-500">2022</span></p>
                    <p className="text-gray-500 mt-1">Subject: <span className="font-semibold text-purple-500">Science</span></p>
                </div>
            </div>
        </section>
    );
};

export default Educational;
