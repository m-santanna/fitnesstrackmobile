import { View, Text, Pressable } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { useState } from 'react'
import { zincDark, zincBackground, zincText, dashboardStyles } from '../globals'
import { formatDate } from '../utils'

const DashboardPage = ({ setPage }) => {
	const [selectedDay, setSelectedDay] = useState('')
	const trainedDays = [formatDate(Date.now()), '2024-02-14'] // still testing
	return (
		<View style={{ flex: 1 }}>
			<Calendar
				onDayPress={(day) => setSelectedDay(day.dateString)}
				style={{ borderRadius: 10, marginHorizontal: 15 }}
				markedDates={{
					// needs adjustment
					[trainedDays]: {
						marked: true,
						dotColor: 'lime',
					},
					[selectedDay]: {
						selected: true,
						disableTouchEvent: true,
					},
				}}
				theme={{
					'stylesheet.dot': {
						dot: {
							width: 4,
							height: 4,
							marginTop: 4,
							marginHorizontal: 1,
							borderRadius: 2,
							opacity: 0,
						},
					},

					'stylesheet.calendar.header': {
						header: {
							backgroundColor: zincDark,
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingLeft: 10,
							paddingRight: 10,
							marginTop: 6,
							alignItems: 'center',
						},
					},
					calendarBackground: zincDark,
					textDayHeaderColor: zincText,
					textMonthTextColor: zincText,
					dayTextColor: zincText,
					todayTextColor: zincText,
					arrowColor: zincText,
					monthTextColor: zincText,
					textDayHighlightColor: zincDark,
					textDisabledColor: '#a3a3a3',
					selectedDayBackgroundColor: zincBackground,
					selectedDayTextColor: '#ffffff',
				}}
			/>
			<Text>Dashboard!</Text>
			<Pressable onPress={() => setPage('main')}>
				<Text>Main</Text>
			</Pressable>
		</View>
	)
}

export default DashboardPage
