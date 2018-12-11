import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementTwlocale from 'element-ui/lib/locale/lang/zh-TW'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from './zh'
import twLocale from './tw'
import enLocale from './en'

Vue.use(VueI18n)

const messages = {
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  tw: {
    ...twLocale,
    ...elementTwlocale
  },
  en: {
    ...enLocale,
    ...elementEnLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh',
  messages
})

export default i18n
