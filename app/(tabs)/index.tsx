import { TestCard } from "@/components/TestCard"
import { ToggleBgColor } from "@/components/ToggleBgColor"
import { TopCard } from "@/components/TopCard"
import { usePhotos } from "@/context/PhotosContext"
import { useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
	const [bgColor, setBgColor] = useState(`bg-zinc-800`)
	const { photos } = usePhotos()

	const toggleBgColorHandler = (color: string) => setBgColor(color)

	return (
		<SafeAreaView className={`${bgColor} flex-1 px-6`}>
			<Text className="font-bold text-zinc-100 mb-8 mt-4 text-center text-base">Let's See</Text>
			<ToggleBgColor toggleBgColorHandler={toggleBgColorHandler} />
			<ScrollView>
				<TopCard />
				{photos.length > 0 && (
					<View className="mb-4 flex-row flex-wrap justify-between w-full">
						{photos.map((_card: HomeCardContract) => (
							<TestCard
								key={_card.id}
								data={_card}
							/>
						))}
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	)
}
