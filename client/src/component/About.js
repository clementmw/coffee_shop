import React from 'react';

function About({ id }) {
  return (
    <div id={id} className="bg-gray-100 min-h-screen">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Instructions:</h2>
          <ol className="list-decimal list-inside">
            <li>At the top of the page, click on the "Dreamteam" route on the navbar</li>
            <li>Add a new team by filling in the correct details as asked in the specific forms</li>
            <li>Go back to the home page</li>
            <li>On the navbar, click on the "Teams" route to see the specific team or teams you have added together with other inbuilt teams</li>
            <li>Go back to the home page and click on the "Create match" route to create your own match</li>
          </ol>
        </div>
      </div>
  );
}

export default About;
