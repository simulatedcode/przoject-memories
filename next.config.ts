import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  webpack(config) {

    config.module.rules.push({
      test: /\.(glsl|frag|vert|vs|fs)$/,
      type: "asset/source"
    })

    return config
  },
  experimental: {
    turbo: {
      rules: {
        "**/*.{glsl,frag,vert,vs,fs}": {
          as: "string"
        }
      }
    }
  }
}

export default nextConfig