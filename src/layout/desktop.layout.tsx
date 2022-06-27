import { FC, ReactNode, useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import Sidebar from "../components/Sidebar/Sidebar";
import { ProgramService } from "../services/program.service";
import { AtomProgramsList } from "../store/programs.store";
import styles from "./layout.module.scss";
interface LayoutProps {
  children: ReactNode;
}

const DesktopLayout: FC<LayoutProps> = ({ children }) => {
  const prgData = useRecoilValueLoadable(AtomProgramsList);

  return (
    <div className={styles.layoutWrapper}>
      <Sidebar />
      <div className={styles.childWrapper}>{children}</div>
    </div>
  );
};

export default DesktopLayout;
