import { GuildRoster, ClassEnum } from './types'

export const Roster: GuildRoster = {
  tanks: [
    { name: 'Nolarya', class: ClassEnum.DRUID },
    { name: 'Damdifino', class: ClassEnum.DH },
    { name: 'Veserria', class: ClassEnum.MONK },
  ],
  healers: [
    { name: 'Kooziecup', class: ClassEnum.MONK, isOfficer: true },
    { name: 'Kefloric', class: ClassEnum.PRIEST, isOfficer: true },
    { name: 'Illidansbae', class: ClassEnum.PALADIN },
    { name: 'Honeybunnyy', class: ClassEnum.PALADIN },
    { name: 'Nulshock', class: ClassEnum.SHAMAN },
    { name: 'Wasat', class: ClassEnum.SHAMAN },
  ],
  melee: [
    { name: 'Lynxx', class: ClassEnum.DRUID, isOfficer: true },
    { name: 'Macoliann', class: ClassEnum.PALADIN },
    { name: 'Aeterra', class: ClassEnum.PALADIN },
    { name: 'Frahstt', class: ClassEnum.DH },
    { name: 'Vixdh', class: ClassEnum.DH },
    { name: 'Cadorius', class: ClassEnum.DK },
    { name: 'Spinkseh', class: ClassEnum.ROGUE },
  ],
  ranged: [
    { name: 'Kenpewz', class: ClassEnum.DRUID, isOfficer: true },
    { name: 'Lullz', class: ClassEnum.DRUID },
    { name: 'Fathomm', class: ClassEnum.WARLOCK, isOfficer: true },
    { name: 'Saelae', class: ClassEnum.WARLOCK },
    { name: 'Sylgja', class: ClassEnum.WARLOCK },
    { name: 'Arysage', class: ClassEnum.MAGE },
    { name: 'Zerefblast', class: ClassEnum.MAGE },
    { name: 'Irohbrash', class: ClassEnum.MAGE },
    { name: 'Scampy', class: ClassEnum.HUNTER },
    { name: 'Bartwave', class: ClassEnum.SHAMAN },
    { name: 'Iaccus', class: ClassEnum.PRIEST },
    { name: 'Foxyshazam', class: ClassEnum.PRIEST },
  ],
}
