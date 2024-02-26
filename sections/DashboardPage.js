import { View, Text, Pressable, TextInput } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { useState } from 'react'
import { zincDark, zincBackground, zincText, dashboardStyles } from '../globals'
import { formatDate } from '../utils'

const DashboardPage = ({ setPage }) => {
	const today = formatDate(Date.now())
	const [selectedDay, setSelectedDay] = useState(today)
	const trainedDays = ['2024-02-12', '2024-02-14'] // just filler data for now

	const trainedDatesObjects = trainedDays.reduce((obj, day) => {
		obj[day] = { marked: true, dotColor: 'lime' }
		return obj
	}, {})

	return (
		<View style={{ flex: 1 }}>
			<Calendar
				onDayPress={(day) => setSelectedDay(day.dateString)}
				style={{
					borderRadius: 10,
					marginHorizontal: 15,
				}}
				markedDates={{
					...trainedDatesObjects,
					[selectedDay]: {
						selected: true,
						disableTouchEvent: true,
					},
				}}
				theme={{
					'stylesheet.day.basic': {
						// Can increase the width and height of each day
						base: {
							width: 36,
							height: 36,
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 1000,
						},
					},
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
			<TextInput />
		</View>
	)
}

export default DashboardPage
