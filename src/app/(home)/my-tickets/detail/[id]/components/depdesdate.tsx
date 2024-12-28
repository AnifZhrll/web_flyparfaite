/* eslint-disable @next/next/no-img-element */
import { getUrlFile } from '@/lib/supabase'
import { dateFormat } from '@/lib/utils'
import type { Airplane, Flight, FlightSeat, Ticket, User } from '@prisma/client'
import React from 'react'

type Data = Ticket & {
    flight: Flight & {plane: Airplane}
    customer: User
    seat: FlightSeat
}

interface DepDesDateProps {
    data: Data
}

export default function DepDesDate({data} : DepDesDateProps) {
  return (
    <div className="title container max-w-[1130px] mx-auto flex gap-[30px] pt-[50px] pb-[68px]">
                <p className="flex items-center gap-[30px] font-medium text-lg  text-white">My Tickets<span>/</span>Details<span>/</span></p>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-[32px] leading-[48px]  text-white">{data.flight.departureCity} to {data.flight.destinationCity}</h1>
                    <p className="font-medium text-lg leading-[27px]  text-white">{data?.bookingDate ? dateFormat(data.bookingDate, "DD MMM YYYY") : ""}</p>
                </div>
            </div>
  )
}