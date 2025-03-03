import { Cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from "next";

const cloudinary = new Cloudinary({
  CLOUDINARY_CLOUD_NAME: "dzlccxjlh",
  CLOUDINARY_API_KEY: "443653692444348",
  CLOUDINARY_API_SECRET: "11VCcwIX-HWu-bxxcpLj-hJlLXo",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const file = req.files?.file; // Assuming file is uploaded as 'file'
      if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const uploadResult = await cloudinary.uploader.upload(file.path);
      return res.status(200).json({ url: uploadResult.secure_url });
    } catch (error) {
      return res.status(500).json({ error: "Error uploading file" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
