interface TrackingItem {
  data: string;
  hora: string;
  local: string;
  status: string;
}

interface TrackingResultProps {
  trackingData: TrackingItem[] | string | null;
  error: string | null;
}

export default function TrackingResult({ trackingData, error }: TrackingResultProps) {
  if (error) {
    return (
      <div className="flex flex-col items-center pb-6">
        <p className="w-1/2 sm:w-4/5 p-3 rounded-lg flex flex-col items-center font-bold text-red-700 border border-red-200 bg-red-200">
          {error}
        </p>
      </div>
    );
  }

  const isTrackingItemsArray = (data: any): data is TrackingItem[] => {
    return Array.isArray(data) && data.length > 0 && typeof data[0].data === "string" && typeof data[0].status === "string";
  };

  if (!trackingData || (Array.isArray(trackingData) && trackingData.length === 0)) return null;

  if (isTrackingItemsArray(trackingData)) {
    // Acessando apenas o primeiro evento
    const firstEvent = trackingData[0];

    return (
      <>
        <div className="flex flex-col items-center flex-wrap w-1/2 sm:w-4/5 p-3 my-4 rounded-lg text-green-700 border border-green-200 bg-green-200">
          <h1 className="text-lg border-b border-green-700 font-bold">Tracking Result</h1>
          <ul className="list-group">
            <li className="list-group-item">
              <span><strong>Date:</strong> {firstEvent.data}</span><br />
              <span><strong>Hour:</strong> {firstEvent.hora}</span><br />
              <span><strong>Local:</strong> {firstEvent.local}</span><br />
              <span><strong>Status:</strong> {firstEvent.status}</span><br />
            </li>
          </ul>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center pb-6">
      <p className="w-1/2 sm:w-4/5 p-3 rounded-lg flex flex-col items-center font-bold text-red-700 border border-red-200 bg-red-200">
        Error: Invalid tracking data format.
      </p>
    </div>
  );
}
