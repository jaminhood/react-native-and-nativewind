import axios from "axios"
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react"

type PhotosType = { photos: HomeCardContract[] }

const PhotosContext = createContext<PhotosType>({ photos: [] })

export const PhotosProvider = ({ children }: PropsWithChildren) => {
	const [photos, setPhotos] = useState<HomeCardContract[]>([])

	const fetchData = async () =>
		await axios
			.get("https://jsonplaceholder.typicode.com/photos")
			.then(({ data }: { data: HomeCardContract[] }) => {
				let i = 0
				let newPhotos: HomeCardContract[] = []

				while (i < 3) {
					const _card = data[i]
					newPhotos.push(_card)
					i++
				}

				setPhotos(newPhotos)
			})
			.catch(error => console.error(error))

	useEffect(() => {
		fetchData()
	}, [])

	return <PhotosContext.Provider value={{ photos }}>{children}</PhotosContext.Provider>
}

export const usePhotos = () => {
	const context = useContext(PhotosContext)
	if (!context) throw new Error("usePhotos must be used within a PhotosProvider")
	return context
}
