import {
    Typography
} from "@mui/material";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [

    { day: "Mon", orders: 20 },

    { day: "Tue", orders: 35 },

    { day: "Wed", orders: 50 },

    { day: "Thu", orders: 42 },

    { day: "Fri", orders: 70 }
];

export default function AnalyticsPage() {

    return (

        <>

            <Typography
                variant="h4"
                gutterBottom
            >
                Analytics
            </Typography>

            <ResponsiveContainer
                width="100%"
                height={400}
            >

                <LineChart
                    data={data}
                >

                    <XAxis
                        dataKey="day"
                    />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="orders"
                    />

                </LineChart>

            </ResponsiveContainer>

        </>
    );
}