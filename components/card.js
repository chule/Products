import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ProductCard({ title, image, description, price, id }) {
  console.log(price);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Product image"
        height="250"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary"></Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>Price:</div>
          <div>{price}</div>
        </Box>
        <Box
          minHeight={70}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
