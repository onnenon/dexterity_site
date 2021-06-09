import { GuildRoster, ClassEnum, RankEnum } from './types'

export const Roster: GuildRoster = {
  tanks: [
    { name: 'Nolarya', class: ClassEnum.DRUID },
    { name: 'Damdifino', class: ClassEnum.DH },
    { name: 'Veserria', class: ClassEnum.MONK },
  ],
  healers: [
    { name: 'Kooziecup', class: ClassEnum.MONK, rank: RankEnum.OFFICER },
    { name: 'Kefloric', class: ClassEnum.PRIEST, rank: RankEnum.OFFICER },
    { name: 'Illidansbae', class: ClassEnum.PALADIN },
    { name: 'Nulshock', class: ClassEnum.SHAMAN },
    { name: 'Wasat', class: ClassEnum.SHAMAN },
  ],
  melee: [
    { name: 'Lynxx', class: ClassEnum.DRUID, rank: RankEnum.OFFICER },
    { name: 'Macoliann', class: ClassEnum.PALADIN },
    { name: 'Aeterra', class: ClassEnum.PALADIN },
    { name: 'Frahstt', class: ClassEnum.DH },
    { name: 'Vixdh', class: ClassEnum.DH },
    { name: 'Cadorius', class: ClassEnum.DK },
    { name: 'Spinkseh', class: ClassEnum.ROGUE },
  ],
  ranged: [
    { name: 'Kenpewz', class: ClassEnum.DRUID, rank: RankEnum.GM },
    { name: 'Lullz', class: ClassEnum.DRUID },
    { name: 'Fathomm', class: ClassEnum.WARLOCK, rank: RankEnum.OFFICER },
    { name: 'Saelae', class: ClassEnum.WARLOCK },
    { name: 'Sylgja', class: ClassEnum.WARLOCK },
    { name: 'Brashaad', class: ClassEnum.MAGE },
    { name: 'Scàmpy', class: ClassEnum.HUNTER },
    { name: 'Bartwave', class: ClassEnum.SHAMAN },
    { name: 'Iaccus', class: ClassEnum.PRIEST },
    { name: 'Foxyshazzam', class: ClassEnum.PRIEST },
  ],
}
