import { produceSingleton } from './singleton-fp';


const i18nConfig = produceSingleton()
const themeConfig = produceSingleton()
const filteringConfig = produceSingleton()