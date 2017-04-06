import {SysRequirement} from "../../sysrequirements/shared/sysrequirement.model";

export class Game{
  id: string;
  name: string;
  release_date: string;
  genre: string;
  developer: string;
  publisher: string;
  img_url: string;
  minimum_system_requirements: SysRequirement;
  recommended_system_requirements: SysRequirement;
}
