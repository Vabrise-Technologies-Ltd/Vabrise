import React, { useState } from 'react';

function FAQItem({ question, answer }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const handleToggle = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <div
        tabIndex={0}
        className={`collapse collapse-arrow border border-base-300 bg-base-200 md:my-4 my-2 rounded-md ${isCollapsed ? 'collapsed' : 'expanded'}`}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleToggle();
          }
        }}
        role="button"
      >
        <div className="collapse-title md:text-xl font-medium">
          {question}
        </div>
        {!isCollapsed && (
          <div className="collapse-content mt-2 ">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  }

export default FAQItem;