import {SysRequirement} from "../../sysrequirements/shared/sysrequirement.model";

export class Game{
  name: string;
  releaseDate: string;
  genre: string;
  developer: string;
  publisher: string;
  minSysReq: SysRequirement;
  recommendedSysReq: SysRequirement;
}
