import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Paper,
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const platforms = ["1500 x 1500", "1200 x 800", "2000 x 1000", "1000 x 1500"];

const ImageResizer = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [croppedImages, setCroppedImages] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [downloaded, setDownloaded] = useState(false); // ✅ Track download
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const parseSize = (sizeStr) => {
    const [w, h] = sizeStr.split("x").map((s) => parseInt(s.trim(), 10));
    return { width: w, height: h };
  };

  const handleSelectSize = (item) => {
    setSelected(item);
    setOpen(false);
  };

  const autoCrop = (imageSrc, targetWidth, targetHeight) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const aspect = targetWidth / targetHeight;
        let cropWidth = image.width;
        let cropHeight = image.width / aspect;
        if (cropHeight > image.height) {
          cropHeight = image.height;
          cropWidth = image.height * aspect;
        }

        const startX = (image.width - cropWidth) / 2;
        const startY = (image.height - cropHeight) / 2;

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        ctx.drawImage(
          image,
          startX,
          startY,
          cropWidth,
          cropHeight,
          0,
          0,
          targetWidth,
          targetHeight
        );

        resolve(canvas.toDataURL("image/jpeg", 0.95));
      };
      image.onerror = reject;
      image.src = imageSrc;
    });

  const handleMultipleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length || !selected) return alert("Please select a size first.");

    const { width, height } = parseSize(selected);
    setProcessing(true);

    const results = [];
    for (const file of files) {
      const reader = new FileReader();
      const result = await new Promise((resolve) => {
        reader.onload = async () => {
          const resized = await autoCrop(reader.result, width, height);
          resolve({ name: file.name, data: resized });
        };
        reader.readAsDataURL(file);
      });
      results.push(result);
    }

    setCroppedImages(results);
    setProcessing(false);
    setDownloaded(false); // reset download state
  };

  const handleDownloadAll = async () => {
    if (croppedImages.length === 0) return;
    const zip = new JSZip();
    croppedImages.forEach((img) => {
      const base64Data = img.data.split(",")[1];
      zip.file(img.name, base64Data, { base64: true });
    });

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "resized_images.zip");

    setDownloaded(true); // ✅ Show finish button
  };

  const handleBack = () => {
    if (croppedImages.length > 0) setCroppedImages([]);
    else setSelected("");
  };

  const handleFinish = () => {
    setCroppedImages([]);
    setSelected("");
    setDownloaded(false);
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: { xs: "95%", sm: "70%", md: "50%" },
          p: 4,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, color: "#1976d2", textAlign: "center", letterSpacing: 0.5 }}
        >
          Bulk Image Resizer
        </Typography>

        {(selected || croppedImages.length > 0) && (
          <Box sx={{ display: "flex", gap: 2, alignSelf: "flex-start" }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
              sx={{ textTransform: "none", fontWeight: 600, borderRadius: 2 }}
            >
              Back
            </Button>

            {croppedImages.length > 0 && downloaded && (
              <Button
                variant="contained"
                onClick={handleFinish}
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#1565c0" },
                }}
              >
                Finish
              </Button>
            )}
          </Box>
        )}

        {/* Step 1: Select Size */}
        {!selected && (
          <Box sx={{ width: "100%", position: "relative" }} ref={dropdownRef}>
            <Box
              onClick={() => setOpen(!open)}
              sx={{
                borderRadius: 2,
                p: 2,
                bgcolor: "#fff",
                cursor: "pointer",
                border: "1px solid #ccc",
                fontWeight: 500,
                color: "#666",
                textAlign: "center",
                "&:hover": { borderColor: "#007bff", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
              }}
            >
              Select target image size
            </Box>

            {open && (
              <Paper
                elevation={3}
                sx={{
                  position: "absolute",
                  width: "100%",
                  mt: 1,
                  borderRadius: 2,
                  maxHeight: 200,
                  overflowY: "auto",
                  zIndex: 10,
                }}
              >
                {platforms.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton
                      onClick={() => handleSelectSize(item)}
                      sx={{ "&:hover": { bgcolor: "#007bff33" }, borderRadius: 1 }}
                    >
                      {item}
                    </ListItemButton>
                  </ListItem>
                ))}
              </Paper>
            )}
          </Box>
        )}

        {/* Step 2: Upload Multiple Images */}
        {selected && croppedImages.length === 0 && (
          <Box
            sx={{
              width: "100%",
              minHeight: 300,
              border: "2px dashed #bdbdbd",
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#fafafa",
            }}
          >
            <Button variant="outlined" component="label" disabled={processing}>
              {processing ? "Processing..." : "Upload Multiple Images"}
              <input type="file" accept="image/*" hidden multiple onChange={handleMultipleUpload} />
            </Button>
          </Box>
        )}

        {/* Step 3: Preview + Download */}
        {croppedImages.length > 0 && (
          <>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {croppedImages.length} Images Resized Successfully 
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                gap: 2,
                width: "100%",
              }}
            >
              {croppedImages.map((img, i) => (
                <img
                  key={i}
                  src={img.data}
                  alt={img.name}
                  style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
                />
              ))}
            </Box>

            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadAll}
              sx={{
                mt: 2,
                backgroundColor: "#1976d2",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Download ZIP
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default ImageResizer;
