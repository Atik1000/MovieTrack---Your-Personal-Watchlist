#!/bin/bash

# MovieTrack - Quick Commands Reference

echo "🎬 MovieTrack - Available Commands"
echo "===================================="
echo ""

echo "📦 Development:"
echo "  pnpm dev              - Start development server (localhost:3000)"
echo "  pnpm build            - Build for production"
echo "  pnpm start            - Start production server"
echo "  pnpm lint             - Run ESLint"
echo ""

echo "🧪 Testing:"
echo "  pnpm test             - Run all tests"
echo "  pnpm test:watch       - Run tests in watch mode"
echo "  pnpm test:coverage    - Run tests with coverage report"
echo "  pnpm test:ci          - Run tests in CI mode"
echo ""

echo "🐳 Docker:"
echo "  docker-compose up app                    - Run production container"
echo "  docker-compose --profile dev up dev      - Run development container"
echo "  docker build -t movietrack:latest .      - Build production image"
echo "  docker run -p 3000:3000 movietrack       - Run container manually"
echo ""

echo "📚 Documentation:"
echo "  README.md            - Main documentation"
echo "  TESTING.md           - Testing guide"
echo "  DOCKER.md            - Docker guide"
echo "  SETUP.md             - Setup instructions"
echo "  DEPLOYMENT.md        - Deployment guide"
echo ""

echo "✅ Quick Start:"
echo "  1. Copy .env.local.example to .env.local"
echo "  2. Add your TMDB API key"
echo "  3. Run: pnpm dev"
echo "  4. Open: http://localhost:3000"
echo ""
