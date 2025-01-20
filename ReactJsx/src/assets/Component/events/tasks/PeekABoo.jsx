import React from 'react'

const PeekABoo = () => {
    const handleRightClick = (e) => {
        e.preventDefault();
        alert("Didn’t expect me, huh?");
      };
    
      return (
        <div onContextMenu={handleRightClick} className="p-10 border">
          Right-click me for a surprise!
        </div>
      );
}

export default PeekABoo