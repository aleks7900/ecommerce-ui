import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

export default function ProfilePage() {

    return (

        <Card>

            <CardContent>

                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Profile
                </Typography>

                <Typography>

                    Name:
                    Alex Developer

                </Typography>

                <Typography>

                    Email:
                    alex@test.com

                </Typography>

                <Typography>

                    Role:
                    CUSTOMER

                </Typography>

            </CardContent>

        </Card>
    );
}