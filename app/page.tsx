'use client'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export default function Home() {
	return (
		<Flex justify="center" align="center" w="100%" h="100vh">
			<Box>
				<Heading variant={{ base: 'h2.base' }} as="h2">
					Hello, firebond 🔥!
				</Heading>
				<Text color="text.secondary">Let's build something awesome</Text>
			</Box>
		</Flex>
	)
}
