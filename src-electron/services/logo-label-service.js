import { join } from "path";
import sharp from "sharp";
import { Readable } from "stream";

export async function getLogoLabel() {
  const response = await fetch("https://picsum.photos/200");
  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const transformer = sharp()
    .resize(300) // resize to 300 pixels wide
    .toBuffer();

  const resizedImageBuffer = await sharp(buffer).resize(100).toBuffer();
  const base64EncodedImage = `data:image/png;base64,${resizedImageBuffer.toString(
    "base64"
  )}`;

  return base64EncodedImage;
}
