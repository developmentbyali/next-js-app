/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    DB_URI:
      // "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/student7-8?retryWrites=true&w=majority&appName=edify",
      "mongodb+srv://cluster0:cluster0@1stuse.4vjgtr6.mongodb.net/class?retryWrites=true&w=majority&appName=1stUSE",
    // SECURE_URL: "job_portal_1233qwertyuiop",

    // Cloudinary ------------------------------
    // NEXT_PUBLIC_SECRET_KEY: "1234555aaddad",
    // NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dgywyega3",
    // NEXT_PUBLIC_CLOUDINARY_API_KEY: "611277911651993",
    // NEXT_PUBLIC_CLOUDINARY_API_SECRET: "rqC55sdg7MkA9bFTUdlwCXYZf-U",
  },
};

export default nextConfig;
