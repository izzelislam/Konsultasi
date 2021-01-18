const mainColor= {
	blue1: '#1E1C61',
	blue2: '#4B7FFB',
	blue3: '#EDF1FA',
	red1 : '#EF716B',
	red2 : '#F57E71',
	red3 : '#F9EDEB',
	orange1: '#FFB167',
	orange2: '#FAF2EA',
	white1: '#fff'

}

export const colors= {
	base: '#fff',
	primary: mainColor.blue1,
	button: {
		primary: {
			background: mainColor.red1,
			text:mainColor.white1
		}
	},
	card: {
		primary:{background: mainColor.blue2},
		warning:{background: mainColor.orange1},
		danger:{background: mainColor.red2},
		primaryOverlay:{background: mainColor.blue3},
		warningOverlay:{background: mainColor.orange2},
		dangerOverlay:{background: mainColor.red3}
	},
	input: {
		background: '#F2F2F2'
	}

}