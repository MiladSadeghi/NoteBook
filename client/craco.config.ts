import path from "path"

const settings = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
}

export default settings;