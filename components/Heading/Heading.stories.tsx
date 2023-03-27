// Button.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { Heading } from '@chakra-ui/react'

export default {
	title: 'Heading',
	component: Heading
} as Meta<typeof Heading>

export const Heading2: StoryFn<typeof Heading> = () => (
	<Heading variant={{ base: 'h2.base' }} as="h2">
		H2 heading
	</Heading>
)
export const Heading3: StoryFn<typeof Heading> = () => (
	<Heading variant={{ base: 'h3.base' }} as="h3">
		H3 heading
	</Heading>
)
export const Heading4: StoryFn<typeof Heading> = () => (
	<Heading variant={{ base: 'h4.base' }} as="h4">
		H4 heading
	</Heading>
)
