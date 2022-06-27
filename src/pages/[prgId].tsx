import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import Card from "../components/Card/Card";
import { AtomSelectedProgram } from "../store/programs.store";

const PrgPage: NextPage = () => {
  const { prgId } = useRouter().query;
  const prg = useRecoilValue(AtomSelectedProgram);

  return (
    <div>
      <Head>
        <title>Programs</title>
      </Head>

      <Card className="m1" title="Problem">
        {prg?.problem}
      </Card>
      <Card className="m1" title="Solution">
        {prg?.solution ? (
          prg.solution
        ) : (
          <div className="text-muted">
            Solution not available at the moment!
          </div>
        )}
      </Card>
    </div>
  );
};

export default PrgPage;
