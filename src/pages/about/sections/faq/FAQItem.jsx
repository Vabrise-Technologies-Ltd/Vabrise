import React, { useState } from 'react';

function FAQItem({ question, answer }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const handleToggle = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <div
        tabIndex={0}
        className={`text-gray-800 collapse collapse-arrow  bg-cyan-50 md:my-4 my-2 rounded-md ${isCollapsed ? 'collapsed' : 'expanded'}`}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleToggle();
          }
        }}
        role="button"
      >
        <div className="collapse-title md:text-lg font-semibold">
          {question}
        </div>
        {!isCollapsed && (
          <div className="collapse-content mt-2 md:text-lg text-sm font-light">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  }

export default FAQItem;