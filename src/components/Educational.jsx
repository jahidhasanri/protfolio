import React from 'react';

const Educational = () => {
    return (
        <section className="bg-gray-100 py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Educational Background</h2>
                
                {/* Bachelor's Degree */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science and Engineering (CSE)</h3>
                    <p className="text-gray-600">Currently pursuing at <span className="font-semibold">BUBT (Bangladesh University of Business and Technology)</span></p>
                    <p className="text-gray-500">Current Semester: 4</p>
                </div>

                {/* HSC */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-gray-600">Completed from <span className="font-semibold">Saydabad Ideal Govt College and University</span></p>
                    <p className="text-gray-500">Year: 2022</p>
                    <p className="text-gray-500">Subject: Science </p>
                </div>
            </div>
        </section>
    );
};

export default Educational;
