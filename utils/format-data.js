
const defaultDateOptions = {
    day:'numeric',
    weekday: 'long',
    month: 'long',
}


export function formatDate(date, options = defaultDateOptions) {
    return new Intl.DateTimeFormat('en', options).format(date)
}

export function formatTemp(value) {
    return `${Math.floor(value)}°`
}

export function formatWeekList(rawData){
    
    let dayList = []
    const weeklist = []

    rawData.forEach( (Item, index) => {
        dayList.push(Item)

        if ( (index + 1) % 8 == 0) {
            weeklist.push(dayList)
            dayList = []
        }//end if
    }) 
    return weeklist
} 