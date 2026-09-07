import coreWebVitals from "eslint-config-next/core-web-vitals"
import typescript from "eslint-config-next/typescript"

// eslint 9 uses flat config, and eslint-config-next 16 exports flat arrays
// directly -- no FlatCompat needed. This replaces .eslintrc.json, which held
// only these two extends. eslint had been declared ^8 while eslint-config-next
// 16 requires >= 9, so every `npm install` failed on ERESOLVE.
export default [
  ...coreWebVitals,
  ...typescript,
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
]
