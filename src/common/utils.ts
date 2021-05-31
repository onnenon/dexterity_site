import { ClassEnum } from './types'

export const getColorForClass = (class_: string): string => {
  switch (class_) {
    case ClassEnum.DH:
      return '#A330C9'
    case ClassEnum.DK:
      return '#C41F3b'
    case ClassEnum.DRUID:
      return '#FF7D0A'
    case ClassEnum.HUNTER:
      return '#ABD473'
    case ClassEnum.MAGE:
      return '#69CCF0'
    case ClassEnum.MONK:
      return '#00FF96'
    case ClassEnum.PALADIN:
      return '#F58CBA'
    case ClassEnum.PRIEST:
      return '#FFFFFF'
    case ClassEnum.ROGUE:
      return '#FFF569'
    case ClassEnum.SHAMAN:
      return '#0070DE'
    case ClassEnum.WARLOCK:
      return '#9482C9'
    case ClassEnum.WARRIOR:
      return '#C79C63'
    default:
      return '#FFFFFF'
  }
}
