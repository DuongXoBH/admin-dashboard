"use client";

import { useFetchPaginationProduct, useFetchProductsApi } from "@/api-hook/product";
import Image from "next/image";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ProductList() {
  const [offset, setOffset] = useState<number>(0);
  const {data : list} = useFetchProductsApi();
  const total = list?.length ;
  const handlePageChange = (offsetChange: number) => {
    if (offsetChange >= 0 && offsetChange < total ) setOffset(offsetChange);
  };

  const { data: products } = useFetchPaginationProduct({
    offset: offset,
    limit: 3,
  });

  const newProducts = products?.map((
    product: {
      id: number;
      title: string;
      images: string[];
      price: number;
    }) =>{
      return {
        ...product,
        totalFavorites : Math.floor(Math.random()*200 + 1),
        favorites: true,
      }
    })

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "500px",
        marginTop: 2,
        borderRadius: 2,
        backgroundColor: "#F5F6FA",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* Previous Button*/}
      <Button
        onClick={() => handlePageChange(offset - 3)}
        sx={{ width: "50px", display: "flex", justifyContent: "center" }}
      >
        <Image src="/arrow-left.svg" alt="" width={25} height={25} />
      </Button>

      {/* Product List */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {newProducts?.map(
          (
            element: {
              id: number;
              title: string;
              images: string[];
              price: number;
              totalFavorites: number;
              favorites: boolean;
            },
            index: number
          ) => {
            return (
              <Card
                key={`product-${offset}-${index}`}
                sx={{
                  width: "320px",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  borderRadius: 2,
                  overflow: "hidden",
                  "&:hover": {
                    borderColor: "gray",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  },
                }}
              >
                <Box sx={{ display:"flex", justifyContent: "center", alignItems: 'center',width: "100%" , height: "320px" }}>
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
                      onClick={() => {
                      }}
                    >
                      {element.favorites ? <FavoriteIcon sx={{ color: "red" }}/> : <FavoriteBorderIcon/>}
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            );
          }
        )}
      </Box>

      {/* Next  Button*/}
      <Button
        onClick={() => handlePageChange(offset + 3)}
        sx={{ width: "50px", display: "flex", justifyContent: "center" }}
      >
        <Image src="/arrow-right.svg" alt="" width={25} height={25} />
      </Button>
    </Box>
  );
}
