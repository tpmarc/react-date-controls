import { getYear } from "date-fns"
import getMonth from "date-fns/getMonth"
import React, { useContext } from "react"
import { LocalesContext } from "../common/LocalesContext"
import { CalendarContext } from "./CalendarContext"

export interface HeadlessCalendarHeader {
  date: Date
  month: number
  year: number
  monthLong: string
  monthShort: string
  monthNarrow: string
}

export interface CalendarHeaderProps {
  children: (value: HeadlessCalendarHeader) => JSX.Element[] | JSX.Element
}

export function CalendarHeader({ children }: CalendarHeaderProps) {
  const locales = useContext(LocalesContext)
  const { month } = useContext(CalendarContext)

  const monthLong = month.toLocaleString(locales, { month: "long" })
  const monthShort = month.toLocaleString(locales, { month: "short" })
  const monthNarrow = month.toLocaleString(locales, { month: "narrow" })

  const headlessValues = {
    date: month,
    month: getMonth(month),
    year: getYear(month),
    monthLong,
    monthShort,
    monthNarrow,
  }

  return <>{children(headlessValues)}</>
}
