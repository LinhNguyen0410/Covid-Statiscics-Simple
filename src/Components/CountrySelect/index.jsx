import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    Box,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import CartStatistics from "./CartStatistics";
import countriesApi from "../../Apis/countriesApi";

CountrySelect.propTypes = {
    countries: PropTypes.array,
};

function CountrySelect({ countries = [] }) {
    const [valueSelected, setValueSelected] = useState("vietnam");
    const [dataCountry, setDataCountry] = useState([]);
    const handleChangeCountry = (e) => {
        setValueSelected(e.target.value);
    };

    const countryName = countries.filter((country) => {
        const slug = country.Slug;
        return slug === valueSelected;
    });
    const countryNameSelected =
        countryName.length && countryName ? countryName[0].Country : "";

    useEffect(() => {
        (async () => {
            try {
                const dataByCountry = await countriesApi.getCountryByName(
                    valueSelected
                );
                setDataCountry(dataByCountry);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [valueSelected]);

    return (
        <Box>
            <FormControl variant="standard" sx={{ m: 2, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-standard-label">Quốc Gia</InputLabel>
                <Select value={valueSelected} onChange={handleChangeCountry}>
                    {countries.map((country) => (
                        <MenuItem key={country.ISO2} value={country.Slug}>
                            {country.Country}
                        </MenuItem>
                    ))}
                </Select>

                <FormHelperText>Lựa chọn quốc gia</FormHelperText>
            </FormControl>

            <Typography
                sx={{ fontWeight: "bold", fontSize: "34px", letterSpacing: "1px" }}
            >
                {countryNameSelected}
            </Typography>

            <CartStatistics data={dataCountry} />
        </Box>

    );
}

export default CountrySelect;
