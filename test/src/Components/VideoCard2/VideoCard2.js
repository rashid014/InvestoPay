import React, { useEffect, useRef } from 'react';
import Video from '../../img/loan.mp4';

const VideoCard = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.autoplay = true;
      videoElement.muted = true;
      videoElement.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  return (
    <>
      <div className="flex justify-center md:h-1/4 lg:h-1/3 xl:h-1/2 mt-10">
        <h2 className="text-gray-500 text-3xl font-semibold mb-4">
          Your Video Title
        </h2>
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-col md:flex-row items-start justify-center bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 md:h-1/2 lg:h-2/3 xl:h-3/4 border-t-4 border-b-4 border-blue-600 rounded-md overflow-hidden">
          {/* Left side - Writings */}
          <div className="flex-1 p-4 md:p-8 text-white">
            <h2 className="text-3xl font-semibold mb-4">Your Video Title</h2>
            <p className="text-lg mb-4">
              Description or additional information about the video.
            </p>
            <div className="flex items-center">
              <span className="mr-2">Posted by John Doe</span>
              <span className="text-gray-500">12 hours ago</span>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="flex-1 border-l-0 md:border-l-4 border-blue-600">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              src={Video}
              type="video/mp4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
