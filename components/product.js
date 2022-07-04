import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ProductListing({ product }) {
  const { image, title, description, price, category, rating } = product;

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3">
            {title}
          </Typography>
          <Typography component="h3">{category}</Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Typography>{description}</Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "10px 0",
              }}
            >
              <div>Price: </div>
              <div style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                {price}
              </div>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "10px 0",
              }}
            >
              <div>Rating: </div>
              <div style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                {rating.rate}
              </div>
              <div style={{ paddingLeft: "5px" }}>
                {`of ${rating.count} reviews`}
              </div>
            </Box>

            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Back to Home
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
