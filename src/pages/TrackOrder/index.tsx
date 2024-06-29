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
            <Title>Enter your code below to track your order:</Title>
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
                    obrigatorio={false}
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