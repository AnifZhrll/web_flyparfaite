import Benefits from '@/app/(home)/checkout/components/benefits'
import Navbar from '@/app/components/navbar'
import React from 'react'
import TransactionDetail from './components/transaction-detail'
import FlightDetail from './components/flight-detail'
import { getDetailTicket } from '../../lib/data'
import DepDesDate from './components/depdesdate'

type Params = {
    id: string
}

interface DetailTicketProps {
    params: Params
}

export default async function DetailTicketPage({params}: DetailTicketProps) {

    const data = await getDetailTicket(params.id)
    

  return (
    <>
      <section id="Header" className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative">
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
          <Navbar />
            {data && <DepDesDate data={data}/>}
            <div className="w-full h-[15px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0"></div>
        </div>
    </section>

    <section id="Content" className="container max-w-[1130px] mx-auto -mt-[33px] z-10 relative">
    <div className="checkout-container flex-col lg:flex-row flex gap-[70px]">
        {data && <FlightDetail data={data} />}
        <div className="flex flex-col mt-[63px] gap-[30px]">
            <Benefits />
            {data && <TransactionDetail data={data} />}
        </div>
    </div>
  </section>
    </>
  )
}
