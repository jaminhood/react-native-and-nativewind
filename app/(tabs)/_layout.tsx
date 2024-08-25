import { Tabs } from "expo-router"
import React from "react"

// import { Home } from "@/components/icons/Home"
import { TabBarIcon } from "@/components/navigation/TabBarIcon"
import { useColorScheme } from "@/hooks/useColorScheme"
import { Text, View } from "react-native"

const TabBarItem = ({ color, focused, page }: { color: string; focused: boolean; page: string }) => (
	<View className="flex-row gap-2">
		{/* <Home /> */}
		{focused && (
			<Text
				style={{ color }}
				className="text-sm font-bold">
				{page}
			</Text>
		)}
	</View>
)

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colorScheme == `dark` ? `#ffffff` : `#222222`,
				headerShown: false,
				tabBarStyle: {
					flexDirection: `row`,
					position: `absolute`,
					bottom: 20,
					left: 30,
					right: 30,
					borderRadius: 20,
					backgroundColor: colorScheme == `dark` ? `#222` : `#fff`,
					borderTopWidth: 0,
				},
				tabBarShowLabel: false,
			}}>
			<Tabs.Screen
				name="index"
				options={{
					tabBarIcon: ({ color, focused }) => (
						<TabBarItem
							color={color}
							focused={focused}
							page="Home"
						/>
					),
				}}
			/>
			{/* <Tabs.Screen
				name="explore"
				options={{
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "code-slash" : "code-slash-outline"}
							color={color}
						/>
					),
				}}
			/> */}
		</Tabs>
	)
}
