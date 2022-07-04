import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function ProductCard({ title, image, description, price, id }) {

  return (
    <Link href={`/product/${id}`}>
      <Card sx={{ maxWidth: 345,  cursor: "pointer" }}>
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
      </Card>
    </Link>
  );
}
