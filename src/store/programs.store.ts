import { atom, selector } from "recoil";
import { ProgramDTO } from "../model/program.model";
import { ProgramService } from "../services/program.service";

const getProgramsList = selector({
  key: "getProgramListSelector",
  get: async () => {
    const _prgs = ProgramService().getPrograms();
    return _prgs;
  },
});

export const AtomProgramsList = atom<ProgramDTO[]>({
  key: "atomPrograObj",
  default: getProgramsList,
});

export const AtomSelectedProgram = atom<ProgramDTO | null>({
  key: "selectedProgramAtom",
  default: null,
});
