import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { convertToLocalISOString } from "@/lib/utils"
import { Button } from "@/components/global/atoms/button"
import { Calendar } from "@/components/global/atoms/calendar"
import { Label } from "@/components/global/atoms/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/global/atoms/popover"

function TestDatePicker() {
  const [entryDate, setEntryDate] = useState<string>("") // Store the ISO string directly

  // Handler when the date is selected
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const isoString = convertToLocalISOString(date)
      setEntryDate(isoString) // Set the ISO string directly in state
    }
  }

  console.log("Entry Date (ISO String): ", entryDate)

  return (
    <div className="space-y-1">
      <Label>Entry Date</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={`w-full justify-start text-left font-normal ${!entryDate && "text-muted-foreground"}`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {entryDate ? format(new Date(entryDate), "PPP") : <span>Pick a date</span>}
            {/* Formatting back to display the selected date */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={entryDate ? new Date(entryDate) : undefined}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default TestDatePicker
