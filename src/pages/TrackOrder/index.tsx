import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TrackingResult from "../../components/TrackingResult";

import React, { useState } from "react";

const orderCodeStyle = 'w-1/2 sm:w-4/5 p-3 mb-6 rounded-lg text-black focus:outline-none focus:border-customColorBlue focus:ring-2 focus:ring-customColorBlue'

export default function TrackOrder() {

    const captchaUrl = "https://rastreamento.correios.com.br/core/securimage/securimage_show.php?0.8337961214543901";

    const [data, setData] = useState([]);
    const [error, setError] = useState<string | null>(null);

    const submitHandler = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        const formData = new FormData(evento.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        fetch(`https://rastreamento.correios.com.br/app/resultado.php?objeto=${data.tracking}&captcha=${data.captcha}&mqs=S`)
        // fetch(`https://www.linkcorreios.com.br/?id=${data.tracking}`)
            .then(response => response.json())
            .then(result => {
                if (result && result.status === "Success") {
                    setData(result.data);
                } else if (result && result.erro === 'true' && data.tracking === 'NC792526735BR') {
                    setError("Erro específico para NC792526735BR");
                } else {
                    setError("Não foi possível rastrear a encomenda. Verifique o código de rastreamento.");
                }
            })
            .catch(err => {
                console.log(err);
                setError("Ocorreu um erro ao rastrear a encomenda.");
            });
    };

    return (
        <>
            <div className="flex flex-col items-center flex-wrap">
                <Title>Enter your code below to track your order:</Title>
                <div className="w-1/3 sm:w-4/5 p-3 my-4 rounded-lg flex flex-col items-start text-yellow-700 border border-yellow-200 bg-yellow-200">
                    <p>
                        ⚠️ The postal API, for tracking parcels, is no longer available for free, 
                        there are other free alternatives, but we are pending responses for permission. 
                        To simulate a successful search, install and enable the 
                        <a href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?pli=1" target="_blank" rel="noreferrer">
                            <strong> Allow CORS Chrome extension </strong>
                        </a>
                        and use the code: <strong>NC792526735BR</strong>
                    </p>
                </div>
            </div>
            <form
                onSubmit={submitHandler}
                className='flex flex-col items-center flex-wrap p-6'>
                <Input 
                    name="tracking"
                    obrigatorio={true}
                    className={orderCodeStyle}
                    placeholder="Type your code" />
                <img className="mb-6 rounded-lg border border-customColorBlue" src={captchaUrl} alt="Captcha" />
                <Input 
                    name="captcha"
                    obrigatorio={true}
                    className={orderCodeStyle}
                    placeholder="Type your captcha" />
                <Button
                typeButton="submit">
                Search Order
            </Button>
            </form>

            <TrackingResult trackingData={data} error={error}/>
        </>
    )
  }