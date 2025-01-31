import { cn, rupiahFormat } from '@/lib/utils'
import { Airplane, Flight, FlightSeat, Ticket, User } from '@prisma/client'
import React from 'react'


type Data = Ticket & {
    flight: Flight & {plane: Airplane}
    customer: User
    seat: FlightSeat
}

interface TransactionDetailProps {
    data: Data
}

export default function TransactionDetail({data}: TransactionDetailProps) {
  return (
    <div className="flex flex-col gap-[30px] w-[400px]">
                <div className="flex flex-col gap-[18px]">
                    <p className="font-semibold  text-white">Payment Details</p>
                    <div className="flex justify-between  text-white">
                        <span>ID Transaction</span>
                        <span className="font-semibold">{data.code}</span>
                    </div>
                    <div className="flex justify-between  text-white">
                        <span>Seat Price</span>
                        <span className="font-semibold">{rupiahFormat(Number(data.price))}</span>
                    </div>
                    <div className="flex justify-between  text-white">
                        <span>Insurance 24%</span>
                        <span className="font-semibold  text-white">FREE</span>
                    </div>
                    <div className="flex justify-between  text-white">
                        <span>Baggage</span>
                        <span className="font-semibold  text-white">FREE</span>
                    </div>
                    <div className="flex justify-between">
                        <span className=" text-white">Grand Total</span>
                        <span className="font-bold text-flysha-light-purple">
                        {rupiahFormat(Number(data.price))}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className=" text-white">Status</span>
                        <span className={cn("font-bold", data.status === "PENDING" && "text-yellow-500", data.status === 
                        "SUCCESS" && "text-green-500", data.status === "FAILED" && "text-red-500")}>
                            {data.status}
                        </span>
                    </div>
                </div>
            </div>
  )
}
