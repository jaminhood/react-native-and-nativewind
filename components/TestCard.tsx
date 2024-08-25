import React, { FC } from "react"
import { Image, Text, View } from "react-native"

const TestCard: FC<{ data: HomeCardContract }> = ({ data }) => {
	return (
		<View className="w-1/2 rounded-lg p-2">
			<Image
				source={{ uri: data.url }}
				className="rounded-lg w-full h-32"
			/>
			<Text className="text-sm font-bold text-left text-zinc-100 mt-2">{data.title}</Text>
		</View>
	)
}

export { TestCard }
