import { Container, Content } from "./styles";
import {ButtonText} from '../../components/ButtonText'

export function Privacy() {

  return (
    <Container>
      <Content>
       <ButtonText title='Voltar' goTo='/' white isAtive />
        <h1>Política de Privacidade do Aplicativo Calky</h1>
        <p>
          <strong>Última atualização:</strong> 2023/10/10
        </p>

        <p>
          A equipe por trás do aplicativo Calky ("nós", "nosso", ou
          "aplicativo") está comprometida em proteger a sua privacidade. Esta
          política de privacidade descreve como coletamos, usamos e
          compartilhamos informações pessoais quando você utiliza o nosso
          aplicativo. Ao utilizar o Calky, você concorda com as práticas
          descritas nesta política.
        </p>

        <h2>1. Informações Coletadas</h2>
        <p>
          <strong>1.1. Informações Pessoais:</strong> Coletamos as informações
          pessoais que você fornece voluntariamente, como nome, endereço de
          e-mail e informações relacionadas à sua conta.
        </p>
        <p>
          <strong>1.2. Informações de Viagem:</strong> Coletamos informações
          sobre suas viagens, incluindo a duração das viagens e as despesas
          relacionadas, para fins de cálculo de diárias e gestão de gastos.
        </p>
        <p>
          <strong>1.3. Notas Fiscais e Despesas:</strong> Você pode optar por
          fornecer informações de notas fiscais e outras despesas relacionadas
          às suas viagens para um controle mais preciso de seus gastos.
        </p>

        <h2>2. Uso das Informações</h2>
        <p>
          <strong>2.1. Prestação de Serviços:</strong> Utilizamos as informações
          coletadas para fornecer os serviços do aplicativo, incluindo o cálculo
          de diárias, o registro de despesas de viagem e o acompanhamento de
          suas atividades.
        </p>
        <p>
          <strong>2.2. Melhorias no Aplicativo:</strong> Utilizamos informações
          agregadas e anônimas para melhorar a funcionalidade do aplicativo e a
          experiência do usuário.
        </p>

        <h2>3. Compartilhamento de Informações</h2>
        <p>
          <strong>3.1. Com Terceiros:</strong> Não compartilhamos suas
          informações pessoais com terceiros, a menos que seja necessário para a
          prestação dos serviços ou exigido por lei.
        </p>
        <p>
          <strong>3.2. Segurança dos Dados:</strong> Implementamos medidas de
          segurança para proteger suas informações pessoais contra acesso não
          autorizado ou divulgação.
        </p>

        <h2>4. Seus Direitos</h2>
        <p>
          Você tem o direito de acessar, corrigir, atualizar ou excluir suas
          informações pessoais a qualquer momento. Se você deseja exercer esses
          direitos ou tiver alguma dúvida sobre esta política, entre em contato
          conosco em [endereço de e-mail de contato].
        </p>

        <h2>5. Alterações na Política de Privacidade</h2>
        <p>
          Esta política de privacidade pode ser atualizada de tempos em tempos.
          Recomendamos verificar regularmente se há alterações. A versão mais
          recente desta política estará sempre disponível no aplicativo.
        </p>

        <p>
          Ao usar o Calky, você concorda com as práticas descritas nesta
          política de privacidade. Se não concordar com essas práticas,
          recomendamos que não utilize o nosso aplicativo.
        </p>
      </Content>
    </Container>
  );
}
