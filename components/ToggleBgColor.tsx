import React from "react"
import { TouchableOpacity, View } from "react-native"

const colors = [{ color: `bg-green-800` }, { color: `bg-red-800` }, { color: `bg-blue-800` }, { color: `bg-teal-800` }]

const ToggleBgColor = ({ toggleBgColorHandler }: ToggleBgColorContract) => {
	return (
		<View className="bg-white justify-center w-full flex-row rounded-lg mb-4 p-4">
			{colors.map(_color => (
				<TouchableOpacity
					key={_color.color}
					className={`${_color.color} p-0 w-12 h-12 rounded-full mx-2`}
					onPress={() => toggleBgColorHandler(_color.color)}
				/>
			))}
		</View>
	)
}

export { ToggleBgColor }
