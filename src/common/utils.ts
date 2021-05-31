import { Class } from './types'

export const getColorForClass = (class_: Class) => {
  switch (class_) {
    case Class.DH:
      return '#A330C9'
    case Class.DK:
      return '#C41F3b'
    case Class.DRUID:
      return '#FF7D0A'
    case Class.HUNTER:
      return '#ABD473'
    case Class.MAGE:
      return '#69CCF0'
    case Class.MONK:
      return '#00FF96'
    case Class.PALADIN:
      return '#F58CBA'
    case Class.PRIEST:
      return '#FFFFFF'
    case Class.ROGUE:
      return '#FFF569'
    case Class.SHAMAN:
      return '#0070DE'
    case Class.WARLOCK:
      return '#9482C9'
    case Class.WARRIOR:
      return '#C79C63'
  }
}
