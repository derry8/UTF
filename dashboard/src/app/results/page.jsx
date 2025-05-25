import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen p-6 ">
      <h1 className="text-3xl font-bold mb-6">Results Management</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* See Results */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">See Results</h2>
          <p className="text-gray-600">Here you can view all the submitted match results.</p>
          {/* Later: Map through results here */}
        </div>

        {/* Post Results */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Post Results</h2>
          <p className="text-gray-600">Post new results for completed matches here.</p>
          {/* Later: Add form to submit result */}
        </div>
      </div>
    </div>
  )
}

export default Page
