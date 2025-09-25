import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(["next/core-web-vitals", "next/typescript"]), // dùng mảng
  {
    ignores: [], // có thể vẫn giữ nhưng Flat Config mới dùng ignorePatterns
    ignorePatterns: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // nếu muốn tắt react/no-unescaped-entities cho toàn project
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off", // tắt cảnh báo img element nếu muốn
    },
  },
];

export default eslintConfig;
