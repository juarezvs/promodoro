import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../Templates/MainTemplate';

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  console.log(props);

  const { state, setState } = props;

  function handleClick() {
    setState(prevState => {
      return { ...prevState, currentCycle: 5 };
    });
  }

  return (
    <MainTemplate>
      <Container>
        <button onClick={handleClick}>CLICAR</button>
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
