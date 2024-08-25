type HomeCardContract = {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailurl: string
}

type ToggleBgColorContract = {
	toggleBgColorHandler: (color: string) => void
}
