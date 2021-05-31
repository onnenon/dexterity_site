import dk_image from '../assets/class_icons/dk.png'
import dh_image from '../assets/class_icons/dh.png'
import druid_image from '../assets/class_icons/druid.png'
import hunter_image from '../assets/class_icons/hunter.png'
import mage_image from '../assets/class_icons/mage.png'
import monk_image from '../assets/class_icons/monk.png'
import paladin_image from '../assets/class_icons/paladin.png'
import priest_image from '../assets/class_icons/priest.png'
import rogue_image from '../assets/class_icons/rogue.png'
import shaman_image from '../assets/class_icons/shaman.png'
import warlock_image from '../assets/class_icons/warlock.png'
import warrior_image from '../assets/class_icons/warrior.png'
import { ClassEnum } from './types'

const classImagePaths = {
  DK: dk_image,
  DH: dh_image,
  DRUID: druid_image,
  HUNTER: hunter_image,
  MAGE: mage_image,
  MONK: monk_image,
  PALADIN: paladin_image,
  PRIEST: priest_image,
  ROGUE: rogue_image,
  SHAMAN: shaman_image,
  WARLOCK: warlock_image,
  WARRIOR: warrior_image,
}

export const getImagePathForClass = (class_: string): string => {
  switch (class_) {
    case ClassEnum.DH:
      return classImagePaths.DH
    case ClassEnum.DK:
      return classImagePaths.DK
    case ClassEnum.DRUID:
      return classImagePaths.DRUID
    case ClassEnum.HUNTER:
      return classImagePaths.HUNTER
    case ClassEnum.MAGE:
      return classImagePaths.MAGE
    case ClassEnum.MONK:
      return classImagePaths.MONK
    case ClassEnum.PALADIN:
      return classImagePaths.PALADIN
    case ClassEnum.PRIEST:
      return classImagePaths.PRIEST
    case ClassEnum.ROGUE:
      return classImagePaths.ROGUE
    case ClassEnum.SHAMAN:
      return classImagePaths.SHAMAN
    case ClassEnum.WARLOCK:
      return classImagePaths.WARLOCK
    case ClassEnum.WARRIOR:
      return classImagePaths.WARRIOR
    default:
      return classImagePaths.WARRIOR
  }
}
