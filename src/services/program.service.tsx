import { get } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { FStore } from "../config/firebase.config";
import { ProgramDTO } from "../model/program.model";

export const ProgramService = () => {
  const getPrograms = async () => {
    const ref = collection(FStore, "PROGRAMS");
    const res = await getDocs(ref);
    let _programs = [] as ProgramDTO[];
    for (const doc in res.docs) {
      let x = res.docs[doc];
      if (x.exists()) {
        const _data = x.data() as ProgramDTO;
        console.log({ d: _data });
        _programs.push(_data);
      }
    }
    return _programs;
  };

  return { getPrograms };
};
