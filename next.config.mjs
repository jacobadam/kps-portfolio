const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/kps-portfolio" : "",
};

export default nextConfig;
