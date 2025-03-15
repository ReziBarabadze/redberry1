const nextConfig = {
  images: {
    domains: ["momentum.redberryinternship.ge"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "momentum.redberryinternship.ge",
        pathname: "/storage/**",
      },
    ],
  },
};
module.exports = nextConfig;
