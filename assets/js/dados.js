const palestrantes = [
  {
    nome: 'Ronny John',
    foto: 'ronny-john.JPG',
    miniBio: 'Desenvolvedor fulllstack na Secult CE trabalhando com PHP, usando Symfony e VanilllaJS. Criador de extensões frustado pelo Whatsapp Web e vereador nos eventos de comunidades.',
    titulo: 'Fibers e Concorrência no PHP',
  },
  {
    nome: 'Lorena Alencar', titulo: 'O Algoritmo da Desigualdade: Como a Tecnologia Pode Reforçar ou Reduzir Injustiças Sociais.', foto: 'lorena-alencar.jpg', miniBio: `<p>Oi! Sou assistente social formada desde 2022, com experiência tanto na assistência social quanto na educação. Minha trajetória profissional passou pelo CREAS, onde trabalhei com populações em situação de vulnerabilidade, e hoje atuo na Secretaria de Educação e Desporto de Guaiúba, unindo o Serviço Social à área educacional.</p>Além disso, faço trabalho voluntário na Procuradoria da Mulher de Guaiúba, contribuindo na luta pelos direitos das mulheres.
        <p>No quesito formação, sou pós-graduada em:</p>
        <ul>
          <li>Direitos Humanos e Serviço Social</li>
          <li>Docência no Serviço Social</li>
          <li>Educação Inclusiva</li>
          <li>Gestão de Pessoas (em andamento)</li>
        </ul>
      <p>Nos próximos anos, quero expandir minha atuação na docência e continuar promovendo a inclusão e os direitos sociais. Além disso, venho explorando possibilidades na área da tecnologia, pensando em como meu conhecimento pode contribuir para soluções inovadoras e mais acessíveis. Sempre de olho em novos desafios!</p> ` },
  { nome: 'Gabriel Camurça', foto: 'gabriel-camurca.jpg', miniBio: 'Gabriel Camurça é desenvolvedor Back-end com 3 anos de experiência em projetos web. Formado em Análise e Desenvolvimento de Sistemas e cursando pós-graduação em Arquitetura de Software. Trabalhou em um cartório desenvolvendo soluções personalizadas e, atualmente, na BR Tech, criando plataformas web sob demanda. Fortes habilidades em bancos de dados PHP, JavaScript e SQL. Além disso, é Técnico em Redes e SysAdmin Linux, com expertise em Cloud AWS e Cybersegurança. Amante da literatura, Gabriel encontrou paz na tecnologia em suas palestras.', titulo: 'C4Model para Devs', },
  { nome: 'Pedro Arthur', foto: 'pedro-arthur.jpeg', miniBio: 'Desenvolvedor backend, SRE e pesquisador na área de Redes de Computadores e Sistemas Distribuídos. O cabra já passou por um bocado de linguagens – de C a Scala, de Java a Go – mas nunca largou o bom e velho PHP!', titulo: 'Observabilidade sem Rodeios com OpenTelemetry', },
  { nome: 'Erandi Junior', foto: 'erandir-junior.jpg', miniBio: 'Erandir Junior, desenvolvedor sênior na Trust, apaixonado por boas práticas de programação. O cabra domina PHP, JavaScript e já lidou com um bocado de bancos de dados. Apesar de se apresentar como backend, também manda bem no front!', titulo: 'Trabalhando com Microsserviços da Melhor Forma. Porque Tem Muita Gente Que Não Sabe', },
  { nome: 'José Wesley Gonçalvez', foto: 'jose-golcalves.jpg', miniBio: ' José Wesley Gonçalves, bacharel em Ciências da Computação pela UFERSA e pedreiro de códigos back-end na Invillia.', titulo: 'WSL: Uma Porta para o Mundo Linux', },
  { nome: 'Graziela Barros', foto: 'graziela-barros.jpg', miniBio: 'Desenvolvedora e Professora, apaixonada por tecnologia, conectando pessoas e oportunidades através do digital. Vasta experiência ensinando e aprendendo', titulo: 'Programação: Só pra programadores? Descubra onde essas habilidades podem te levar!', },
]

const agenda = [
  { horario: '8:00', atividade: 'Credenciamento e Merenda', facilitador: 'Comunidade PHP com Rapadura' },
  { horario: '9:00', atividade: 'Fibers e Concorrência no PHP', facilitador: 'Ronny John' },
  { horario: '9:40', atividade: 'C4 Model para Devs', facilitador: 'Gabriel Camurça' },
  { horario: '10:20', atividade: 'WSL: Uma Porta para o Mundo Linux', facilitador: 'José Wesley Gonçalves' },
  { horario: '11:00', atividade: 'O Algoritmo da Desigualdade: Como a Tecnologia Pode Reforçar ou Reduzir Injustiças Sociais.', facilitador: 'Lorena Alencar' },
  { horario: '11:40', atividade: 'Ao moço', facilitador: 'Cada um por si!' },
  { horario: '13:30', atividade: 'Observabilidade sem Rodeios com OpenTelemetry', facilitador: 'Pedro Arthur' },
  { horario: '14:10', atividade: 'Trabalhando com microsserviços da melhor forma. Porque tem muita gente que não sabe.', facilitador: 'Erandir Junior' },
  { horario: '14:50', atividade: 'Merenda	', facilitador: 'Todo mundo!'  },
  { horario: '15:20', atividade: 'Programação: Só pra programadores? Descubra onde essas habilidades podem te levar!', facilitador: 'Graziela Barros' },
  { horario: '16:00', atividade: 'Mesa Redonda	João Paulo, Erandir Junior, Gabriela Lob', facilitador: 'Alessandro Feitoza' },
  { horario: '17:00', atividade: 'Encerramento: agradecimentos e sorteior de brindes', facilitador: 'Comunidade PHP com Rapadura' },
]