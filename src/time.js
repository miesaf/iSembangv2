// Time Format Setting (replaces vue-moment, which has no Vue 3 version)
import dayjs from 'dayjs'
import msMy from 'dayjs/locale/ms-my.js'

// dayjs' ms-my locale has no meridiem; use moment's ms-my one so `a` still reads pagi / tengahari / petang / malam
dayjs.locale({
  ...msMy,
  meridiem (hour) {
    if (hour < 11) return 'pagi'
    if (hour < 15) return 'tengahari'
    if (hour < 19) return 'petang'
    return 'malam'
  }
})

// Same output as the old `{{ value | moment(format) }}` filter: `{{ $moment(value, format) }}`
export function formatTime (value, format) {
  return dayjs(value).format(format)
}

export default {
  install (app) {
    app.config.globalProperties.$moment = formatTime
  }
}
