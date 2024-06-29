interface TrackingItem {
  data: string;
  origem: string;
  destino: string;
  status: string;
}

interface TrackingResultProps {
    trackingData: TrackingItem[] | null | string;
    error: string | null;
  }

export default function TrackingResult ({ trackingData, error }: TrackingResultProps){
  if (error && error.includes("NC792526735BR")) {
    return (
      <div className="flex flex-col items-center pb-6">
        <div className="w-1/2 sm:w-4/5 p-3 rounded-lg flex flex-col items-start font-bold text-green-700 border border-green-200 bg-green-200">
          <div className="w-full flex flex-col items-center p-4">
            <h1 className="text-lg border-b border-green-700">Last Object Status: NC792526735BR</h1>
          </div>
          <ul>
            <li>Tracking code: Análise concluída - importação autorizada</li>
            <li>Date: 24/06/2024 | Hora: 23:32</li>
            <li>Local: Unidade de Logística Integrada - Curitiba / PR</li>
          </ul>
        </div>
      </div>
    );
  } 

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
      {/* <ul className="list-group">
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
      </ul> */}
    </>
  );
}