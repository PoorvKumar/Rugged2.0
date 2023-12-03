import React, { useState } from "react";
import {
  Stack,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Chip,
  Select,
  FormControl,
  Autocomplete,
  TextField
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

const names = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn"
];

export default function MultipleSelectChip() {
  return (
    <>
      {/* <MultiSelect /> */}
      <MultiAutocomplete />
    </>
  );
}

// const MultiSelect = () => {
//   const [selectedNames, setSelectedNames] = useState([]);
//   return (
//     <FormControl sx={{ m: 1, width: 500 }}>
//       <InputLabel>Multiple Select</InputLabel>
//       <Select
//         multiple
//         value={selectedNames}
//         onChange={(e) => setSelectedNames(e.target.value)}
//         input={<OutlinedInput label="Multiple Select" />}
//         renderValue={(selected) => (
//           <Stack gap={1} direction="row" flexWrap="wrap">
//             {selected.map((value) => (
//               <Chip
//                 key={value}
//                 label={value}
//                 onDelete={() =>
//                   setSelectedNames(
//                     selectedNames.filter((item) => item !== value)
//                   )
//                 }
//                 deleteIcon={
//                   <CancelIcon
//                     onMouseDown={(event) => event.stopPropagation()}
//                   />
//                 }
//               />
//             ))}
//           </Stack>
//         )}
//       >
//         {names.map((name) => (
//           <MenuItem
//             key={name}
//             value={name}
//             sx={{ justifyContent: "space-between" }}
//           >
//             {name}
//             {selectedNames.includes(name) ? <CheckIcon color="info" /> : null}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

const MultiAutocomplete = () => {
  return (
    <Autocomplete
      sx={{ m: 1, width: 200 }}
      multiple
      id="tags-standard"
      options={names}
      getOptionLabel={(option) => option}
      defaultValue={[names[0], names[1]]}
      disableCloseOnSelect
      renderOption={(props, option, { selected }) => (
        <MenuItem
          key={option}
          value={option}
          sx={{ justifyContent: "space-between" }}
          {...props}
        >
          {option}
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Celebrities"
          placeholder="Favorites"
        />
      )}
    />
  );
};
