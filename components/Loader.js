import { useEffect, useState } from 'react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide the loader after images are loaded or after a timeout
    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Give a little extra time after load
    };

    // Set up event listeners for page load
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }

      // Fallback timeout to ensure loader doesn't stay forever
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* Placeholder for a minimalist climber/carabiner animation */}
        <div className="loader-animation">
          <div className="carabiner">
            <div className="carabiner-body"></div>
            <div className="carabiner-gate"></div>
          </div>
          <div className="rope"></div>
        </div>
        <div className="loader-text">Loading...</div>
      </div>

      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .loader-content {
          text-align: center;
        }

        .loader-animation {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 20px;
        }

        .carabiner {
          position: absolute;
          top: 20px;
          left: 35px;
          width: 30px;
          height: 60px;
          animation: swing 2s infinite ease-in-out;
        }

        .carabiner-body {
          position: absolute;
          width: 30px;
          height: 50px;
          border: 5px solid #f4a460;
          border-radius: 15px;
          border-right: 5px solid transparent;
        }

        .carabiner-gate {
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 50px;
          background-color: #f4a460;
          border-radius: 2px;
          animation: gate 2s infinite ease-in-out;
        }

        .rope {
          position: absolute;
          top: 0;
          left: 50px;
          width: 5px;
          height: 20px;
          background-color: #f4a460;
          animation: rope 2s infinite ease-in-out;
        }

        .loader-text {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        @keyframes swing {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }

        @keyframes gate {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(2px);
          }
        }

        @keyframes rope {
          0%, 100% {
            height: 20px;
          }
          50% {
            height: 25px;
          }
        }
      `}</style>
    </div>
  );
}
