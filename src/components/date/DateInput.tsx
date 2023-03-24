import { DateRangePicker } from "materialui-daterange-picker";
import { type DateRange } from "materialui-daterange-picker/dist/types";
import { useState } from "react";
import InputCommon from "../input/InputCommon";

export default function DateInput() {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({});

  console.log({ dateRange });

  return (
    <>
      <InputCommon />
      <DateRangePicker
        open={open}
        toggle={() => setOpen(!open)}
        onChange={(range) => setDateRange(range)}
      />
    </>
  );
}
