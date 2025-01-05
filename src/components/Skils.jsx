import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">My Skills</h2>

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frontend Development</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">HTML</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">CSS</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">JavaScript</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">React</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Backend Development</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Node.js</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Express.js</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">MongoDB</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tools</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Git</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">VS Code</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Figma</span>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
