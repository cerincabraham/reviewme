import React from 'react'

function Feedback() {
  return (
    <div className=' blockSection bgBlock d-flex flex-column justify-content-between align-items-center '>
      <div className='text-white'>
        <h2 className='textMain'>We Value Your Feedback</h2>
        <h5 className='textSecondary'>Sorry to Hear That!</h5>
        <h5 className='textSecondary'>Help Us Understand How We Can Improve</h5>
      </div>
      <div className='mt-0'>
        <iframe
          id="JotFormIFrame-242695567010862"
          title="Clone of Get In Touch PokenoFamilyHealth"
          onLoad={() => window.parent.scrollTo(0, 0)} // Use onLoad as a React event handler
          allowTransparency="true" // Capitalize 'T' for React compatibility
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/242695567010862"
          frameBorder="0" // Use camelCase for React
          style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }} // Correct inline style syntax
          scrolling="no"
        ></iframe>



      </div>

    </div>
  )
}

export default Feedback