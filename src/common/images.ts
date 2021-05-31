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
import { Class } from './types'

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
    case Class.DH:
      return classImagePaths.DH
    case Class.DK:
      return classImagePaths.DK
    case Class.DRUID:
      return classImagePaths.DRUID
    case Class.HUNTER:
      return classImagePaths.HUNTER
    case Class.MAGE:
      return classImagePaths.MAGE
    case Class.MONK:
      return classImagePaths.MONK
    case Class.PALADIN:
      return classImagePaths.PALADIN
    case Class.PRIEST:
      return classImagePaths.PRIEST
    case Class.ROGUE:
      return classImagePaths.ROGUE
    case Class.SHAMAN:
      return classImagePaths.SHAMAN
    case Class.WARLOCK:
      return classImagePaths.WARLOCK
    case Class.WARRIOR:
      return classImagePaths.WARRIOR
    default:
      return classImagePaths.WARRIOR
  }
}
