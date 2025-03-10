import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true, // Ajoute un slash à la fin des URLs
  images: {
    unoptimized: true, // Pour éviter les erreurs liées aux images lors de l'exportation statique
  },
  basePath: '/nom-de-ton-repository', // Remplace par le nom de ton repository GitHub
  assetPrefix: '/nom-de-ton-repository', // Idem, remplace par ton repository GitHub
};

export default nextConfig;
