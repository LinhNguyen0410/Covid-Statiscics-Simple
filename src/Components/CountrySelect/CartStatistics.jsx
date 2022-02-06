import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import PropTypes from "prop-types";
import { formatNumber } from "../../Utils/index";
import CountUp from "react-countup";
import { Grid } from "@mui/material";

CartStatistics.propTypes = {
    data: PropTypes.array,
};

function CartStatistics({ data = [] }) {
    const dataLasted = data && data.length ? data[data.length - 1] : [];

    const listData = [
        {
            title: "Tổng số ca nhiễm",
            count: dataLasted.Confirmed || 0,
            type: "red",
            img: "https://stjude.scene7.com/is/image/stjude/covid-fever-virus?fmt=png-alpha&wid=500",
        },
        {
            title: "Số ca đã khỏi",
            count: dataLasted.Active || 0,
            type: "green",
            img: "https://i.slcc.edu/culture/COVID-19/images/covidvaccinetime.jpg",
        },
        {
            title: "Số ca tử vong",
            count: dataLasted.Deaths || 0,
            type: "gray",
            img: "https://www.voicesofyouth.org/sites/voy/files/styles/large/public/images/2020-04/aizat_support_doctors.jpg?itok=UHKAwIZO",
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                gap: "24px",
                justifyContent: {
                    xs: "center",
                    sm: "row",
                },
                alignItems: {
                    xs: "center",
                    sm: "row",
                },
                mt: 2,
                flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                },
                width: {
                    xs: "100%",
                },
            }}
        >
            {listData.map((data, index) => (
                <Card
                    key={index}
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "80%",
                        },
                        height: 120,
                        borderLeft: `5px solid ${data.type}`,
                        boxShadow: "0 1px 11px #ccc",
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            gap: "5px",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "15px",
                            }}
                        >
                            <Typography>{data.title}</Typography>
                            <CountUp
                                style={{ fontWeight: "bold" }}
                                end={data.count}
                                formattingFn={formatNumber}
                            ></CountUp>
                        </Box>
                        <Box>
                            <img style={{ width: "80px" }} src={data.img} alt="" />
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

export default CartStatistics;
