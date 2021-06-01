export enum ClassEnum {
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

export enum RankEnum {
  OFFICER = 'officer',
  GM = 'gm',
}

export interface Member {
  class: ClassEnum
  name: string
  rank?: RankEnum
}

export interface GuildRoster {
  tanks: Member[]
  healers: Member[]
  melee: Member[]
  ranged: Member[]
}
