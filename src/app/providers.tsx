"use client"

import { ConfigProvider, theme } from "antd"
import type { ReactNode } from "react"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#003B30",
          colorText: "#35383B",
					colorBgBase: "#FFFFFF",
          borderRadius: 8,
					controlHeight: 40,
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
