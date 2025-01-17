import Image from 'next/image';

export default function MonitoringInfo() {
  return (
    <div className="relative flex flex-col sm:flex-row justify-center items-center p-8 bg-white mt-16">
      <div className="absolute top-1/4 left-4 flex flex-col items-start pr-8 z-10">
        <div className="bg-black h-[2px] w-[200px] sm:w-[545.32px] mb-2"></div>
        <h2 className="text-lg sm:text-xl font-bold mb-2">Sleep Monitoring</h2>
        <p className="text-gray-600 mb-4 max-w-xs">
          Track your sleep patterns effortlessly. Our app analyzes your nightly rest, providing insights into sleep quality, duration, and disruptions.
        </p>
      </div>
      <div style={{ width: '200px', height: '400px', margin: '0 8px' }}>
        <Image
          src="/p1.png"
          alt="Vital Signs"
          layout="fixed"
          width={328.34}
          height={676.99}
        />
      </div>
      <div className="absolute bottom-1/4 right-4 flex flex-col items-end pl-8 z-10">
        <div className="bg-black h-[2px] w-[200px] sm:w-[545.32px] mb-2"></div>
        <h2 className="text-lg sm:text-xl font-bold mb-2 mr-4">Heart Rate Monitoring</h2>
        <p className="text-gray-600 mb-4 max-w-xs">
          Keep an eye on your heart health in real-time. Our app continuously monitors your heart rate, helping you understand your cardiovascular trends and detect any irregularities early.
        </p>
      </div>
    </div>
  );
} 