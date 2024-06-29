interface TrackingItem {
  data: string;
  origem: string;
  destino: string;
  status: string;
}

interface TrackingResultProps {
    trackingData: TrackingItem[] | null;
    error: string | null;
  }

export default function TrackingResult ({ trackingData, error }: TrackingResultProps){
  if (error) {
    return (
      <div className="flex flex-col items-center pb-6">
        <p className="w-1/2 sm:w-4/5 p-3 rounded-lg flex flex-col items-center font-bold text-red-700 border border-red-200 bg-red-200">{error}</p>
      </div>
    );
  }

  if (!trackingData || !trackingData.length) return null;

  return (
    <>
      <h1>Tracking Result</h1>
      <ul className="list-group">
        {trackingData.map((item: TrackingItem) => {
          const { data, origem, destino, status } = item;

          return (
            <li key={status} className="list-group-item">
              <span className="badge badge-primary">{origem}</span>
              <span>data: {data}</span>
              <span>destino: {destino}</span>
              <span>status: {status}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}