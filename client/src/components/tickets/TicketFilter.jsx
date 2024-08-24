import * as React from "react"
import filterIcon from './../../../src/assets/icons/filter.svg'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export function TicketFilter({filter,setSearchParams}) {

  const handleFilterChange = (filter) => {
    setSearchParams({filter:filter})
  }
//console.log(filter)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="font-semibold text-lg w-32 flex justify-between" variant="outline"><img className="w-8 h-6 " src={filterIcon} />{filter}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{"Filter"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
          <DropdownMenuItem onClick={()=>handleFilterChange("All")} value="All">All</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>handleFilterChange("New")} value="New">New</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>handleFilterChange("Open")} value="Open">Open</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>handleFilterChange("Closed")} value="Closed">Closed</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
