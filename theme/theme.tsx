import { pxToRem } from '../helpers/common'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	colors: {
		'bg.primary': '#171C23',
		'bg.secondary': '#232B35',
		'bg.action': '#313131',
		'text.primary': '#FFFFFF',
		'text.secondary': '#A6A6A6',
		'success.primary': '#02B15A',
		'success.secondary': '#02B15A26',
		'error.primary': '#E41414',
		'error.secondary': '#EB001B26',
		'cyan.primary': '#EB001B26',
		'cyan.text': '#64CFF6',
		'violet.primary': '#6359E9',
		'violet.secondary': '#464687',
		'violet.text': '#8C89B4',
		'yellow.primary': '##FFBA03',
		'yellow.secondary': '#FFBA035C',
		'orange.primary': '#FE702A',
		'orange.secondary': '#FE702A5C'
	},
	fontSizes: {
		body: pxToRem(16),
		h2: pxToRem(24),
		h3: pxToRem(24),
		h4: pxToRem(16)
	},
	textStyles: {
		h2: {
			fontSize: 'h2 !important',
			fontWeight: '600 !important',
			lineHeight: '1.25 !important'
		},
		h3: {
			fontSize: 'h3 !important',
			fontWeight: '500 !important',
			lineHeight: '1.25 !important'
		},
		h4: {
			fontSize: 'h4 !important',
			fontWeight: '600 !important',
			lineHeight: '1.375 !important'
		}
	},
	styles: {
		global: {
			body: {
				bg: 'bg.primary',
				color: 'text.primary',
				fontSize: 'body'
			},
			h2: {
				textStyle: 'h2'
			},
			h3: {
				textStyle: 'h3'
			},
			h4: {
				textStyle: 'h4'
			}
		}
	},
	components: {
		Heading: {
			variants: {
				'h2.base': {
					textStyle: 'h2'
				},
				'h3.base': {
					textStyle: 'h3'
				},
				'h4.base': {
					textStyle: 'h4'
				}
			}
		}
	}
})

export default theme
