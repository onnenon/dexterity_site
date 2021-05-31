export enum Class {
  DK = 'dk',
  DH = 'dh',
  DRUID = 'druid',
  HUNTER = 'hunter',
  MAGE = 'mage',
  MONK = 'monk',
  PALADIN = 'paladin',
  PRIEST = 'priest',
  ROGUE = 'rogue',
  SHAMAN = 'shaman',
  WARLOCK = 'warlock',
  WARRIOR = 'warrior',
}

export interface Member {
  class: Class
  name: string
}

export interface GuildRoster {
  tanks: Member[]
  healers: Member[]
  melee: Member[]
  ranged: Member[]
}
