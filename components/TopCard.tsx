import React, { useState } from "react"
import { Image, Text, TextInput, View } from "react-native"

const TopCard = () => {
	const [title, setTitle] = useState(`The Brain behind it all`)

	return (
		<View className="bg-zinc-100 p-2 flex-row rounded-lg mb-4">
			<Image
				source={require("@/assets/images/top-img.jpg")}
				className="w-24 h-32 rounded-lg"
			/>
			<View className="flex-1 pl-2">
				<Text className="text-left text-zinc-900 text-base font-bold mb-8 mt-4">{title}</Text>
				<TextInput
					value={title}
					onChangeText={setTitle}
					className="bg-zinc-300 rounded-md px-2 py-1"
					placeholder="Type anything"
				/>
			</View>
		</View>
	)
}
export { TopCard }
