import { useRouter } from "next/router";
import React from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { ProgramDTO } from "../../model/program.model";
import {
  AtomProgramsList,
  AtomSelectedProgram,
} from "../../store/programs.store";
import { ProgramList } from "./menu";
import styles from "./Sidebar.module.scss";

export interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const setSelected = useSetRecoilState(AtomSelectedProgram);
  const prgList = useRecoilValueLoadable(AtomProgramsList);
  const router = useRouter();

  const onButtonClick = (prg: ProgramDTO) => {
    setSelected(prg);
    router.push(prg.id);
  };

  if (prgList.state === "loading")
    return (
      <div className={`${styles.Sidebar} ${styles.loading}`}>Loading...</div>
    );
  const _prgs: ProgramDTO[] = prgList.contents ?? [];
  return (
    <div className={styles.Sidebar}>
      <div className={styles.title}>Programs</div>
      <div className={styles.body}>
        {_prgs.map((prg) => {
          return (
            <button
              onClick={() => onButtonClick(prg)}
              key={prg.id}
              className={styles.prgButton}
            >
              {prg.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
