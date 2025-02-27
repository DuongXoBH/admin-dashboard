"use client";

import { useFetchProductsApi } from "@/api-hook/product";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
interface IProduct {
  id: number;
  title: string;
  images: string[];
  price: number;
  totalFavorites: number;
  favorites: boolean;
}
export default function FavoritesList() {
  const { data: products } = useFetchProductsApi();
  const newProducts = products?.map(
    (product: {
      id: number;
      title: string;
      images: string[];
      price: number;
    }) => {
      return {
        ...product,
        totalFavorites: Math.floor(Math.random() * 200 + 1),
        favorites: Math.random() < 0.5,
      };
    }
  );
  const Favorites = newProducts?.filter((element: IProduct) => {
    return element.favorites;
  });
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {Favorites?.map((element: IProduct, index: number) => {
        return (
          <Card
            key={`favorites-${index}`}
            sx={{
              width: "320px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: 2,
              overflow: "hidden",
              marginBottom: "5px",
              "&:hover": {
                borderColor: "gray",
                borderWidth: "1px",
                borderStyle: "solid",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "320px",
              }}
            >
              <CardMedia
                component="img"
                image={element.images[0]}
                alt={element.title}
                sx={{ width: "100%", height: "320px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingX: 4,
                  paddingY: 5,
                  maxWidth: "80%",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    height: "24px",
                  }}
                >
                  {element.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  ${element.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: "144px",
                    height: "48px",
                    backgroundColor: "#F5F6FA",
                    color: "black",
                    borderRadius: 2,
                    fontWeight: "bold",
                    textTransform: "none",
                    mt: 1,
                    "&:hover": {
                      backgroundColor: "#E2E4ED",
                    },
                  }}
                >
                  Edit Product
                </Button>
              </CardContent>
              <Box
                sx={{
                  width: "70px",
                  display: "flex",
                  alignItems: "start",
                  paddingTop: "35px",
                }}
              >
                <Typography sx={{ paddingTop: "8px" }}>
                  {element.totalFavorites}
                </Typography>
                <IconButton
                  sx={{ paddingRight: 2, paddingLeft: "0px !important" }}
                  onClick={() => {}}
                >
                    <FavoriteIcon sx={{ color: "red" }} />
                </IconButton>
              </Box>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}
