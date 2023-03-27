// app/layout.tsx
'use client'

import theme from '@/theme/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body>
				<CacheProvider>
					<ChakraProvider theme={theme}>{children}</ChakraProvider>
				</CacheProvider>
			</body>
		</html>
	)
}
